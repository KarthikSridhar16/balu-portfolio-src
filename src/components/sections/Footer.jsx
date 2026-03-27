import Ico from '../ui/Ico'
import { clientData } from '../../data/clientData'

export default function Footer() {
  return (
    <footer id="contact" style={{ position: 'relative', background: '#020310', borderTop: '1px solid rgba(124,58,237,0.07)', padding: '7rem 1.5rem 3rem', zIndex: 1, overflow: 'hidden' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>

        <div className="gs-reveal">
          <span className="s-tag" style={{ justifyContent: 'center' }}><span className="s-dot" />Contact</span>
        </div>

        <h2 className="gs-reveal serif" style={{ fontSize: 'clamp(2.8rem,7vw,6.5rem)', fontWeight: 300, color: '#f8fafc', lineHeight: 1, marginBottom: '1.5rem' }}>
          Let's build<br /><span className="g-text">something together.</span>
        </h2>

        <p className="gs-reveal" style={{ color: '#334155', fontSize: '0.92rem', fontWeight: 300, lineHeight: 1.8, maxWidth: 440, margin: '0 auto 3rem' }}>
          Open to Data Engineer, Python Developer, and Production Support roles. Drop a message.
        </p>

        {/* Primary CTA */}
        <a
          className="gs-reveal"
          href={`mailto:${clientData.email}`}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 42px', background: 'linear-gradient(135deg,#7c3aed,#a855f7)', color: '#fff', borderRadius: 9999, fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 500, boxShadow: '0 0 60px rgba(124,58,237,0.25)', transition: 'all 0.3s', marginBottom: '3rem' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 0 80px rgba(124,58,237,0.45)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0 60px rgba(124,58,237,0.25)' }}
        >
          <Ico name="email" /> {clientData.email}
        </a>

        {/* Contact details */}
        <div className="gs-reveal" style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {[
            { name: 'phone',  label: clientData.phone    },
            { name: 'mappin', label: clientData.location },
          ].map((c, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.8rem', color: '#334155' }}>
              <span style={{ color: '#7c3aed', fontSize: '1rem' }}><Ico name={c.name} /></span>
              {c.label}
            </div>
          ))}
        </div>

        {/* Social icons */}
        <div className="gs-reveal" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
          {[
            { href: clientData.linkedin,           name: 'linkedin' },
            { href: `mailto:${clientData.email}`,  name: 'email'    },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{ width: 46, height: 46, borderRadius: '50%', border: '1px solid rgba(124,58,237,0.18)', background: 'rgba(124,58,237,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#334155', fontSize: '1.1rem', textDecoration: 'none', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)'; e.currentTarget.style.color = '#a855f7'; e.currentTarget.style.transform = 'scale(1.12)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.18)'; e.currentTarget.style.color = '#334155'; e.currentTarget.style.transform = 'none' }}>
              <Ico name={s.name} />
            </a>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(124,58,237,0.06)', paddingTop: '2rem' }}>
          <p style={{ fontSize: '0.62rem', letterSpacing: '0.12em', color: '#1e1040' }}>
            © {new Date().getFullYear()} Balu R · Crafted with precision
          </p>
        </div>
      </div>

      <div className="blob" style={{ width: 600, height: 600, background: 'rgba(124,58,237,0.06)', left: '50%', top: '20%', transform: 'translateX(-50%)' }} />
    </footer>
  )
}
