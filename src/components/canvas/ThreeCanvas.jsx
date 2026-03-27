import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────────────────────────────────────
// CLEAN AURA ANIMATION — three elements only
//
//  1. Morphing crystal wireframe  — IcosahedronGeometry with breathing displacement
//  2. Two elegant orbital rings   — TorusGeometry at contrasting angles
//  3. Soft circular-dot halo      — PointsMaterial with canvas radial texture
//
// Boot timeline: crystal materialises → rings expand → halo fades in → overlay exits.
// ─────────────────────────────────────────────────────────────────────────────

/** Creates a radial gradient canvas texture so particles render as soft circles,
 *  not squares — works on file://, localhost, and any web server. */
function makeCircleTexture() {
  const canvas  = document.createElement('canvas')
  canvas.width  = 64
  canvas.height = 64
  const ctx = canvas.getContext('2d')
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
  gradient.addColorStop(0,   'rgba(255,255,255,1)')
  gradient.addColorStop(0.4, 'rgba(255,255,255,0.8)')
  gradient.addColorStop(1,   'rgba(255,255,255,0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 64, 64)
  return new THREE.CanvasTexture(canvas)
}

export default function ThreeCanvas({ onLoadComplete }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // ── Renderer ─────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(innerWidth, innerHeight)
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 0.1, 500)
    camera.position.set(0, 0, 20)

    const circleTex = makeCircleTexture()

    // ── 1. Crystal core ───────────────────────────────────────────────────────
    const icoGeo  = new THREE.IcosahedronGeometry(3.8, 4)
    const origPos = icoGeo.attributes.position.array.slice()   // snapshot for morphing
    const icoMat  = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6, wireframe: true, transparent: true, opacity: 0,
    })
    const crystal = new THREE.Mesh(icoGeo, icoMat)
    crystal.scale.setScalar(0.01)   // collapsed at start, boot timeline grows it
    scene.add(crystal)

    // ── 2. Orbital rings ──────────────────────────────────────────────────────
    const makeRing = (radius, tube, colour, rotX, rotZ) => {
      const geo  = new THREE.TorusGeometry(radius, tube, 4, 200)
      const mat  = new THREE.MeshBasicMaterial({ color: colour, transparent: true, opacity: 0 })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.rotation.x = rotX
      mesh.rotation.z = rotZ
      mesh.scale.setScalar(0.01)
      scene.add(mesh)
      return { mesh, mat, geo }
    }

    const ring1 = makeRing(7.2,  0.018, 0x8b5cf6, Math.PI / 2,   0)              // horizontal, violet
    const ring2 = makeRing(9.4,  0.012, 0x22d3ee, Math.PI / 3.5, Math.PI / 5)   // tilted, cyan

    // ── 3. Particle halo ──────────────────────────────────────────────────────
    const PARTICLE_COUNT = 1800
    const haloGeo = new THREE.BufferGeometry()
    const haloPos = new Float32Array(PARTICLE_COUNT * 3)
    const haloCol = new Float32Array(PARTICLE_COUNT * 3)

    const palette = [
      new THREE.Color(0x8b5cf6),   // violet
      new THREE.Color(0xa78bfa),   // purple
      new THREE.Color(0x22d3ee),   // cyan
      new THREE.Color(0xe879f9),   // fuchsia
      new THREE.Color(0xf8fafc),   // white
    ]

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const phi   = Math.acos(2 * Math.random() - 1)
      const theta = Math.random() * Math.PI * 2
      const r     = 12 + Math.random() * 16

      haloPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      haloPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.55  // flattened vertically
      haloPos[i * 3 + 2] = r * Math.cos(phi)

      const c = palette[Math.floor(Math.random() * palette.length)]
      haloCol[i * 3]     = c.r
      haloCol[i * 3 + 1] = c.g
      haloCol[i * 3 + 2] = c.b
    }

    haloGeo.setAttribute('position', new THREE.BufferAttribute(haloPos, 3))
    haloGeo.setAttribute('color',    new THREE.BufferAttribute(haloCol, 3))

    const haloMat = new THREE.PointsMaterial({
      size: 0.22,
      map: circleTex,
      vertexColors: true,
      transparent: true,
      opacity: 0,
      alphaTest: 0.01,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })
    const halo = new THREE.Points(haloGeo, haloMat)
    scene.add(halo)

    // ── Mouse parallax state ──────────────────────────────────────────────────
    let mx = 0, my = 0
    const onMouseMove = e => {
      mx = (e.clientX / innerWidth  - 0.5) * 2
      my = (e.clientY / innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    // ── Render loop ───────────────────────────────────────────────────────────
    let animId
    const clock = new THREE.Clock()

    function animate() {
      animId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      // Breathing vertex displacement on crystal
      const pos = icoGeo.attributes.position.array
      for (let i = 0; i < pos.length; i += 3) {
        const ox = origPos[i], oy = origPos[i + 1], oz = origPos[i + 2]
        const len = Math.sqrt(ox * ox + oy * oy + oz * oz) || 1
        const d   = Math.sin(t * 0.5 + ox * 0.9) * Math.cos(t * 0.4 + oy * 0.7) * 0.28
        pos[i]     = ox + (ox / len) * d
        pos[i + 1] = oy + (oy / len) * d
        pos[i + 2] = oz + (oz / len) * d
      }
      icoGeo.attributes.position.needsUpdate = true

      // Rotate crystal — slow, mouse-influenced
      crystal.rotation.y = t * 0.08 + mx * 0.12
      crystal.rotation.x = t * 0.05 + my * 0.10

      // Rings
      ring1.mesh.rotation.z = t * 0.05
      ring2.mesh.rotation.y = t * 0.07
      ring2.mesh.rotation.z = t * 0.03

      // Halo drift
      halo.rotation.y = t * 0.012

      // Subtle camera parallax
      camera.position.x += (mx * 1.2 - camera.position.x) * 0.035
      camera.position.y += (-my * 0.8 - camera.position.y) * 0.035
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }
    animate()

    // ── Boot GSAP timeline ────────────────────────────────────────────────────
    const progressBar  = document.getElementById('progress-bar')
    const progressText = document.getElementById('progress-text')
    const counter = { v: 0 }

    const bootTl = gsap.timeline({
      onComplete: () => {
        gsap.to('#loader-overlay', {
          opacity: 0, duration: 0.7,
          onComplete: () => {
            const el = document.getElementById('loader-overlay')
            if (el) el.style.display = 'none'
            if (onLoadComplete) onLoadComplete()
          },
        })
      },
    })

    // Progress counter
    bootTl.to(counter, {
      v: 100, duration: 3.2, ease: 'power1.inOut',
      onUpdate: () => {
        const v = Math.round(counter.v)
        if (progressBar)  progressBar.style.width = v + '%'
        if (progressText) progressText.textContent = String(v).padStart(2, '0') + '%'
      },
    }, 0)

    // Crystal materialises
    bootTl.to(crystal.scale,  { x: 1, y: 1, z: 1, duration: 2.2, ease: 'back.out(1.6)' }, 0.3)
    bootTl.to(icoMat,         { opacity: 0.28, duration: 1.8, ease: 'power2.out' },         0.4)

    // Rings expand
    bootTl.to(ring1.mesh.scale, { x: 1, y: 1, z: 1, duration: 1.8, ease: 'back.out(1.3)' }, 0.9)
    bootTl.to(ring1.mat,        { opacity: 0.55, duration: 1.4 },                            1.0)
    bootTl.to(ring2.mesh.scale, { x: 1, y: 1, z: 1, duration: 1.8, ease: 'back.out(1.2)' }, 1.2)
    bootTl.to(ring2.mat,        { opacity: 0.35, duration: 1.4 },                            1.3)

    // Halo particles fade in
    bootTl.to(haloMat, { opacity: 0.55, duration: 2.5 }, 0.8)

    // ── Scroll-driven reactions ───────────────────────────────────────────────
    ScrollTrigger.create({
      trigger: '#hero',
      start: 'top top', end: 'bottom top',
      scrub: true,
      onUpdate: self => {
        const p = self.progress
        haloMat.opacity = 0.55 * (1 - p * 0.9)
        halo.scale.setScalar(1 + p * 0.3)
      },
    })

    ScrollTrigger.create({
      trigger: '#skills',
      start: 'top 70%', end: 'bottom top',
      onEnter:     () => { gsap.to(ring1.mat, { opacity: 0.75, duration: 0.9 }); gsap.to(ring2.mat, { opacity: 0.55, duration: 0.9 }) },
      onLeaveBack: () => { gsap.to(ring1.mat, { opacity: 0.55, duration: 0.9 }); gsap.to(ring2.mat, { opacity: 0.35, duration: 0.9 }) },
    })

    // ── Resize handler ────────────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = innerWidth / innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(innerWidth, innerHeight)
    }
    window.addEventListener('resize', onResize)

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      ScrollTrigger.getAll().forEach(t => t.kill())
      bootTl.kill()

      icoGeo.dispose();  icoMat.dispose()
      ring1.geo.dispose(); ring1.mat.dispose()
      ring2.geo.dispose(); ring2.mat.dispose()
      haloGeo.dispose();  haloMat.dispose()
      circleTex.dispose()
      renderer.dispose()

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [onLoadComplete])

  return (
    <div
      ref={mountRef}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
