import { clientData } from '../../data/clientData'

export default function Experience() {
  return (
    <section id="experience" style={{ position: 'relative', padding: '8rem 1.5rem', zIndex: 1, overflow: 'hidden' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        <div className="gs-reveal">
          <span className="s-tag"><span className="s-dot" style={{ background: '#e879f9' }} />Experience</span>
        </div>

        <h2 className="gs-reveal serif" style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 300, color: '#f8fafc', lineHeight: 1.1, marginBottom: '3.5rem' }}>
          Where I've<br /><span className="g-text">shipped data.</span>
        </h2>

        {/* Timeline */}
        <div className="exp-timeline" style={{ borderLeft: '1px solid rgba(124,58,237,0.15)', marginLeft: 8, paddingLeft: '2.5rem', display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {clientData.experience.map((exp, i) => (
            <div key={i} className="gs-reveal tl-item" style={{ position: 'relative' }}>
              <div className="tl-dot" />

              {/* Header */}
              <div style={{ marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'baseline', marginBottom: 5 }}>
                  <h3 className="serif" style={{ fontSize: '1.6rem', fontWeight: 400, color: '#f8fafc' }}>{exp.company}</h3>
                  <span style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94a3b8', padding: '3px 10px', borderRadius: 9999, border: '1px solid rgba(168,85,247,0.2)' }}>
                    {exp.period}
                  </span>
                </div>
                <p style={{ fontSize: '0.76rem', color: '#a855f7', letterSpacing: '0.08em', fontWeight: 500 }}>{exp.role}</p>
                <p style={{ fontSize: '0.62rem', letterSpacing: '0.1em', color: '#2a1a4a', textTransform: 'uppercase', marginTop: 2 }}>{exp.location}</p>
              </div>

              {/* Bullet list */}
              <div className="glass" style={{ borderRadius: 16, padding: '1.5rem 2rem' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, listStyle: 'none', margin: 0, padding: 0 }}>
                  {exp.description.map((d, j) => (
                    <li key={j} style={{ display: 'flex', gap: 12, fontSize: '0.84rem', color: '#475569', lineHeight: 1.75, fontWeight: 300 }}>
                      <span style={{ color: '#2a1a4a', marginTop: 7, flexShrink: 0 }}>◆</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="blob" style={{ width: 400, height: 400, background: 'rgba(232,121,249,0.03)', right: -80, top: '40%' }} />
    </section>
  )
}
