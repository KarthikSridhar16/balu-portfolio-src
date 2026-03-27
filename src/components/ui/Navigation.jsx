import { useState, useEffect } from 'react'
import { clientData } from '../../data/clientData'

const NAV_LINKS = [
  { href: '#about',      label: 'About'      },
  { href: '#skills',     label: 'Skills'     },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects'   },
  { href: '#education',  label: 'Education'  },
]

export default function Navigation() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className="nav-fade"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        opacity: 0, padding: '0 2rem',
        background:    scrolled ? 'rgba(4,5,15,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)'        : 'none',
        borderBottom:  scrolled ? '1px solid rgba(124,58,237,0.08)' : 'none',
        transition: 'background 0.4s, backdrop-filter 0.4s, border 0.4s',
      }}
    >
      {/* ── Main bar ──────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

        {/* Logo */}
        <a href="#hero" style={{ textDecoration: 'none', fontFamily: 'Cormorant Garamond,serif', fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.1em', color: '#f8fafc' }}>
          B<span style={{ color: '#a855f7' }}>.</span>R
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: '2.5rem', alignItems: 'center' }}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.target.style.color = '#a855f7')}
              onMouseLeave={e => (e.target.style.color = '#64748b')}
            >
              {link.label}
            </a>
          ))}

          <a
            href={`mailto:${clientData.email}`}
            style={{ padding: '7px 20px', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a855f7', border: '1px solid rgba(168,85,247,0.3)', borderRadius: 9999, textDecoration: 'none', background: 'rgba(124,58,237,0.05)', transition: 'all 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(124,58,237,0.14)'; e.currentTarget.style.borderColor = 'rgba(168,85,247,0.6)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(124,58,237,0.05)'; e.currentTarget.style.borderColor = 'rgba(168,85,247,0.3)' }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <div
              key={i}
              style={{
                width: 22, height: 2, background: menuOpen ? '#a855f7' : '#64748b',
                margin: '5px 0', transition: 'all 0.3s',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(5px,7px)'
                  : i === 2 ? 'rotate(-45deg) translate(5px,-7px)'
                  : 'none'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* ── Mobile menu ───────────────────────────────────────────────────── */}
      {menuOpen && (
        <div style={{ background: 'rgba(4,5,15,0.97)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(124,58,237,0.08)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#64748b', textDecoration: 'none' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
