import Ico from '../ui/Ico'
import { clientData } from '../../data/clientData'

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', padding: '0 1.5rem', zIndex: 1, overflow: 'hidden' }}>

      {/* Ambient glow */}
      <div className="blob" style={{ width: 700, height: 700, background: 'rgba(124,58,237,0.06)', top: '15%', left: '50%', transform: 'translateX(-50%)' }} />

      <div style={{ textAlign: 'center', maxWidth: 860, zIndex: 10 }}>

        {/* Availability badge */}
        <div className="opacity-0 translate-y-4 animate-in" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 18px', borderRadius: 9999, border: '1px solid rgba(168,85,247,0.22)', background: 'rgba(124,58,237,0.07)', backdropFilter: 'blur(10px)', marginBottom: '2.2rem' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22d3ee', animation: 'pulse 2s infinite', display: 'inline-block' }} />
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a855f7' }}>{clientData.availability}</span>
        </div>

        {/* Name */}
        <h1 className="opacity-0 translate-y-8 animate-in serif" style={{ fontSize: 'clamp(3.5rem,11vw,8.5rem)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '0.8rem', color: '#f8fafc' }}>
          {clientData.name}
        </h1>

        {/* Title row */}
        <div className="opacity-0 translate-y-8 animate-in hero-title-row" style={{ display: 'flex', justifyContent: 'center', gap: 12, alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <span className="g-text serif" style={{ fontSize: 'clamp(1.7rem,3.5vw,2.1rem)', fontWeight: 400, letterSpacing: '0.04em' }}>{clientData.title}</span>
          <span className="hero-separator" style={{ color: '#475569', fontSize: '1.2rem' }}>·</span>
          <span className="serif" style={{ fontSize: 'clamp(1.4rem,3vw,1.7rem)', fontWeight: 300, color: '#94a3b8', letterSpacing: '0.04em' }}>{clientData.subtitle}</span>
        </div>

        {/* Tagline card */}
        <div className="opacity-0 translate-y-8 animate-in" style={{ display: 'inline-block', maxWidth: 580, background: 'rgba(124,58,237,0.06)', backdropFilter: 'blur(16px)', border: '1px solid rgba(168,85,247,0.1)', borderRadius: 16, padding: '18px 28px', marginBottom: '3rem' }}>
          <p style={{ fontSize: 'clamp(0.85rem,2vw,1rem)', color: '#64748b', lineHeight: 1.75, fontWeight: 300 }}>{clientData.tagline}</p>
        </div>

        {/* CTA buttons */}
        <div className="opacity-0 translate-y-8 animate-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <div className="hero-cta-row" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#projects"
              style={{ padding: '12px 32px', background: 'linear-gradient(135deg,#7c3aed,#a855f7)', color: '#fff', borderRadius: 9999, textDecoration: 'none', fontSize: '0.76rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 500, boxShadow: '0 0 36px rgba(124,58,237,0.3)', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 0 50px rgba(124,58,237,0.5)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0 36px rgba(124,58,237,0.3)' }}>
              View Projects
            </a>
            <a href="#experience"
              style={{ padding: '12px 32px', background: 'rgba(124,58,237,0.07)', color: '#c4b5fd', border: '1px solid rgba(168,85,247,0.25)', borderRadius: 9999, textDecoration: 'none', fontSize: '0.76rem', letterSpacing: '0.14em', textTransform: 'uppercase', transition: 'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = 'rgba(124,58,237,0.14)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'rgba(124,58,237,0.07)' }}>
              My Journey
            </a>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '1.2rem' }}>
            {[
              { href: clientData.linkedin, name: 'linkedin' },
              { href: `mailto:${clientData.email}`, name: 'email' },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ color: '#334155', fontSize: '1.4rem', transition: 'all 0.25s', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#a855f7'; e.currentTarget.style.transform = 'scale(1.18)' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#334155'; e.currentTarget.style.transform = 'none' }}>
                <Ico name={s.name} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="opacity-0 animate-in" style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <span style={{ fontSize: '0.52rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#1e2240' }}>Scroll</span>
        <span style={{ fontSize: '1.3rem', color: '#2a1a4a', animation: 'bounce 2.2s infinite' }}><Ico name="mouse" /></span>
      </div>
    </section>
  )
}
