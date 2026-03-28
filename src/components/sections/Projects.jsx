import Ico from '../ui/Ico'
import useSpotlight from '../../hooks/useSpotlight'
import { clientData } from '../../data/clientData'

export default function Projects() {
  useSpotlight()

  return (
    <section id="projects" style={{ position: 'relative', padding: '8rem 1.5rem', zIndex: 1, overflow: 'hidden' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div className="gs-reveal">
          <span className="s-tag"><span className="s-dot" style={{ background: '#e879f9' }} />Projects</span>
        </div>

        <h2 className="gs-reveal serif" style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 300, color: '#f8fafc', lineHeight: 1.1, marginBottom: '1rem' }}>
          Things I've<br /><span className="g-text">built.</span>
        </h2>
        <p className="gs-reveal" style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: 300, marginBottom: '3.5rem', maxWidth: 480 }}>
          From ML models to full-stack desktop applications — solving real problems with data.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.5rem' }}>
          {clientData.projects.map((proj, i) => (
            <div key={i} className="gs-reveal glass glass-hover spotlight" style={{ borderRadius: 20, padding: '2.25rem', position: 'relative', zIndex: 1 }}>
              <div style={{ position: 'relative', zIndex: 1 }}>

                {/* Icon badge */}
                <div style={{ width: 48, height: 48, borderRadius: 14, background: `${proj.accent}12`, border: `1px solid ${proj.accent}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '1.5rem', color: proj.accent }}>
                  <Ico name={proj.iconName} />
                </div>

                {/* Tagline chip */}
                <div style={{ marginBottom: 10 }}>
                  <span style={{ fontSize: '0.56rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: proj.accent, padding: '3px 10px', borderRadius: 9999, border: `1px solid ${proj.accent}25`, background: `${proj.accent}08` }}>
                    {proj.tagline}
                  </span>
                </div>

                <h3 className="serif" style={{ fontSize: '1.65rem', fontWeight: 400, color: '#f8fafc', marginBottom: '0.75rem', lineHeight: 1.2 }}>{proj.name}</h3>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.78, fontWeight: 300, marginBottom: '1.5rem' }}>{proj.description}</p>

                {/* Tech badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.75rem' }}>
                  {proj.tech.map((t, j) => <span key={j} className="badge">{t}</span>)}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: 16 }}>
                  {[
                    { href: proj.codeUrl, name: 'code', label: 'Code' },
                    { href: proj.liveUrl, name: 'link', label: 'Live' },
                  ].map((lk, j) => (
                    <a key={j} href={lk.href}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: '0.66rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#a855f7')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}>
                      <Ico name={lk.name} />{lk.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="blob" style={{ width: 100, height: 100, background: `${proj.accent}06`, right: -20, bottom: -20, borderRadius: '50%' }} />
            </div>
          ))}
        </div>
      </div>

      <div className="blob" style={{ width: 500, height: 500, background: 'rgba(124,58,237,0.03)', left: -100, bottom: '10%' }} />
    </section>
  )
}
