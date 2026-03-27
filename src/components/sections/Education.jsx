import { clientData } from '../../data/clientData'

export default function Education() {
  return (
    <section id="education" style={{ position: 'relative', padding: '8rem 1.5rem', zIndex: 1, overflow: 'hidden' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        <div className="gs-reveal">
          <span className="s-tag"><span className="s-dot" />Education</span>
        </div>

        <h2 className="gs-reveal serif" style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 300, color: '#f8fafc', lineHeight: 1.1, marginBottom: '3.5rem' }}>
          Academic<br /><span className="g-text">foundation.</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {clientData.education.map((edu, i) => (
            <div key={i} className="gs-reveal glass glass-hover edu-card" style={{ borderRadius: 20, padding: '2rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', position: 'relative', overflow: 'hidden' }}>

              <div>
                <h3 className="serif" style={{ fontSize: '1.5rem', fontWeight: 400, color: '#f8fafc', marginBottom: 4 }}>{edu.degree}</h3>
                <p style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 300 }}>{edu.institution}</p>
                <p style={{ fontSize: '0.62rem', color: '#2a1a4a', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 4 }}>{edu.period}</p>
              </div>

              {/* GPA */}
              <div style={{ flexShrink: 0 }}>
                <div className="g-text serif" style={{ fontSize: '2.8rem', fontWeight: 300, lineHeight: 1, textAlign: 'right' }}>{edu.grade}</div>
                <div style={{ fontSize: '0.55rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#2a1a4a', textAlign: 'right', marginTop: 2 }}>CGPA</div>
              </div>

              <div className="blob" style={{ width: 120, height: 120, background: 'rgba(124,58,237,0.05)', right: -30, top: -30 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
