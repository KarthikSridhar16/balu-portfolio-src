import { clientData } from '../../data/clientData'

export default function About() {
  return (
    <section id="about" style={{ position: 'relative', padding: '8rem 1.5rem', zIndex: 1, overflow: 'hidden' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div className="gs-reveal">
          <span className="s-tag"><span className="s-dot" />About Me</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '4rem', alignItems: 'center' }}>

          {/* Left — bio */}
          <div>
            <h2 className="gs-reveal serif" style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', fontWeight: 300, color: '#f8fafc', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Crafting data<br /><span className="g-text">pipelines that last.</span>
            </h2>
            <p className="gs-reveal" style={{ color: '#475569', lineHeight: 1.88, fontSize: '0.93rem', fontWeight: 300, marginBottom: '2rem' }}>
              {clientData.about}
            </p>
            <a
              href={`mailto:${clientData.email}`}
              className="gs-reveal"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 26px', background: 'rgba(124,58,237,0.08)', color: '#a855f7', border: '1px solid rgba(168,85,247,0.22)', borderRadius: 9999, fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(124,58,237,0.16)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(124,58,237,0.08)'; e.currentTarget.style.transform = 'none' }}
            >
              Get in touch →
            </a>
          </div>

          {/* Right — stat bento */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {clientData.stats.map((s, i) => (
              <div key={i} className="gs-reveal glass glass-hover spotlight" style={{ borderRadius: 18, padding: '2rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div className="g-text serif" style={{ fontSize: '3.2rem', fontWeight: 300, lineHeight: 1, marginBottom: 6 }}>{s.value}</div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.17em', textTransform: 'uppercase', color: '#475569' }}>{s.label}</div>
                </div>
                <div className="blob" style={{ width: 80, height: 80, background: 'rgba(124,58,237,0.08)', right: -20, bottom: -20 }} />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div style={{ marginTop: '4rem' }}>
          <p className="gs-reveal" style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2a1a4a', marginBottom: '1rem' }}>
            Certifications
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '0.75rem' }}>
            {clientData.certifications.map((c, i) => (
              <div key={i} className="gs-reveal cert">
                <div style={{ fontSize: '0.74rem', color: '#e2e8f0', fontWeight: 400, marginBottom: 3 }}>{c.name}</div>
                <div style={{ fontSize: '0.58rem', letterSpacing: '0.1em', color: '#7c3aed', textTransform: 'uppercase' }}>
                  {c.issuer}{c.year ? ` · ${c.year}` : ''}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="blob" style={{ width: 450, height: 450, background: 'rgba(124,58,237,0.04)', left: -100, top: '50%' }} />
    </section>
  )
}
