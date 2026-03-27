import Ico from '../ui/Ico'
import useSpotlight from '../../hooks/useSpotlight'
import { clientData } from '../../data/clientData'

export default function Skills() {
  useSpotlight()

  const doubled = [...clientData.marqueeItems, ...clientData.marqueeItems]

  return (
    <section id="skills" style={{ position: 'relative', padding: '8rem 0', zIndex: 1, overflow: 'hidden' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="gs-reveal">
          <span className="s-tag"><span className="s-dot" style={{ background: '#22d3ee' }} />Skillset</span>
        </div>
        <h2 className="gs-reveal serif" style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 300, color: '#f8fafc', lineHeight: 1.1, marginBottom: '1rem' }}>
          Tools of the<br /><span className="g-text">trade.</span>
        </h2>
        <p className="gs-reveal" style={{ color: '#334155', fontSize: '0.9rem', fontWeight: 300, marginBottom: '3.5rem', maxWidth: 480 }}>
          From raw data ingestion to production-grade SQL optimisation.
        </p>
      </div>

      {/* Marquee */}
      <div className="mask-x gs-reveal" style={{ overflow: 'hidden', marginBottom: '4rem' }}>
        <div className="marquee" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          {doubled.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 20px', background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(168,85,247,0.28)', borderRadius: 9999, whiteSpace: 'nowrap', fontSize: '0.72rem', letterSpacing: '0.1em', color: '#c4b5fd' }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#a855f7', opacity: 0.9, flexShrink: 0 }} />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Category cards */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.25rem' }}>
          {clientData.skills.map((sk, i) => (
            <div key={i} className="gs-reveal glass glass-hover spotlight" style={{ borderRadius: 20, padding: '2rem 1.75rem', position: 'relative', zIndex: 1 }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Icon */}
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${sk.accent}14`, border: `1px solid ${sk.accent}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', fontSize: '1.5rem', color: sk.accent }}>
                  <Ico name={sk.iconName} />
                </div>
                <h3 className="serif" style={{ fontSize: '1.35rem', fontWeight: 400, color: '#f8fafc', marginBottom: '1rem' }}>{sk.category}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {sk.items.map((it, j) => <span key={j} className="badge">{it}</span>)}
                </div>
              </div>
              <div className="blob" style={{ width: 80, height: 80, background: `${sk.accent}08`, right: -10, bottom: -10, borderRadius: '50%' }} />
            </div>
          ))}
        </div>
      </div>

      <div className="blob" style={{ width: 500, height: 500, background: 'rgba(34,211,238,0.03)', right: -100, top: '30%' }} />
    </section>
  )
}
