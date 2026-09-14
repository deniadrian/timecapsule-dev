import Link from "next/link"

export default function NotFound() {
  return (
    <main style={{
      background: "var(--bg)",
      minHeight: "100vh",
      color: "var(--text-primary)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    }}>

      {/* Left — decorative */}
      <div style={{
        borderRight: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2.5rem 3rem",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
          <span style={{ color: "var(--gold)", fontSize: "1.4rem" }}>⧗</span>
          <span style={{ fontFamily: "var(--font-playfair)", letterSpacing: "0.25em", fontSize: "0.95rem", textTransform: "uppercase", color: "var(--text-primary)" }}>
            TimeCapsule
          </span>
        </Link>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "2rem" }}>
            <div style={{ width: "2rem", height: "1px", background: "var(--gold-dim)" }} />
            <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.55rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase" }}>
              Lost in time
            </span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            lineHeight: 1.15,
            marginBottom: "1.5rem",
            fontWeight: 700,
          }}>
            Some things are
            <br />
            meant to stay
            <br />
            <em style={{ color: "var(--gold)" }}>sealed.</em>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.8, maxWidth: "340px" }}>
            The page you're looking for doesn't exist —
            or perhaps it hasn't been revealed yet.
          </p>
        </div>

        <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.55rem", color: "var(--border)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Error · 404 · Not Found
        </div>
      </div>

      {/* Right — actions */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem",
        gap: "0",
      }}>
        {/* Big 404 */}
        <div style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(6rem, 12vw, 10rem)",
          fontWeight: 700,
          color: "var(--border)",
          lineHeight: 1,
          marginBottom: "3rem",
          letterSpacing: "-0.05em",
        }}>
          404
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem", width: "100%", maxWidth: "320px" }}>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          <span style={{ color: "var(--gold-dim)", fontSize: "0.65rem" }}>✦</span>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        </div>

        {/* Actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%", maxWidth: "280px" }}>
          <Link href="/" style={{
            background: "var(--gold)",
            color: "var(--bg)",
            padding: "1rem",
            fontSize: "0.75rem",
            letterSpacing: "0.22em",
            fontWeight: 700,
            textTransform: "uppercase",
            textDecoration: "none",
            textAlign: "center",
          }}>
            Back to Home
          </Link>
          <Link href="/dashboard" style={{
            border: "1px solid var(--border)",
            color: "var(--text-secondary)",
            padding: "1rem",
            fontSize: "0.75rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            textDecoration: "none",
            textAlign: "center",
          }}>
            My Vault
          </Link>
          <Link href="/explore" style={{
            color: "var(--text-secondary)",
            padding: "1rem",
            fontSize: "0.75rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            textDecoration: "none",
            textAlign: "center",
            fontFamily: "var(--font-jetbrains)",
          }}>
            Explore Capsules →
          </Link>
        </div>
      </div>
    </main>
  )
}