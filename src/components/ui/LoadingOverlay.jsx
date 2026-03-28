/**
 * LoadingOverlay
 * Shown while the Three.js boot animation is running.
 * Receives `visible` prop from App — hidden after onLoadComplete fires.
 */
export default function LoadingOverlay({ visible }) {
  if (!visible) return null

  return (
    <div id="loader-overlay">
      {/* Spinning aura rings */}
      <div style={{ position: 'relative', width: 90, height: 90, marginBottom: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid transparent', borderTopColor: '#7c3aed', borderRightColor: '#e879f9', animation: 'spin 1.6s linear infinite' }} />
        <div style={{ position: 'absolute', inset: 8, borderRadius: '50%', border: '1px solid transparent', borderBottomColor: '#22d3ee', animation: 'spin 2.4s linear infinite reverse' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'radial-gradient(circle, #a855f7, #7c3aed)', boxShadow: '0 0 20px rgba(168,85,247,0.8)', animation: 'pulse 1.8s ease-in-out infinite' }} />
      </div>

      {/* Name + role */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 300, letterSpacing: '0.35em', color: '#f8fafc', textTransform: 'uppercase' }}>
          Balu R
        </div>
        <div style={{ fontSize: '0.58rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#7c3aed', marginTop: 6 }}>
          Data Engineer · Python &amp; SQL
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ width: 200 }}>
        <div style={{ height: 1, background: 'rgba(124,58,237,0.15)', borderRadius: 2, overflow: 'hidden', marginBottom: 10 }}>
          <div
            id="progress-bar"
            style={{ height: '100%', width: '0%', background: 'linear-gradient(90deg,#7c3aed,#a855f7,#22d3ee)', boxShadow: '0 0 14px rgba(168,85,247,0.6)', transition: 'width 0.05s linear' }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: '#64748b', textTransform: 'uppercase' }}>Loading</span>
          <span id="progress-text" style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1rem', color: '#a855f7', letterSpacing: '0.05em' }}>00%</span>
        </div>
      </div>
    </div>
  )
}
