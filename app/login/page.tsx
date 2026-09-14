import { signIn } from "@/lib/auth"

export default function LoginPage() {
  return (
    <main style={{
      background: "var(--bg)",
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    }}>

      {/* Left — Branding */}
      <div style={{
        borderRight: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2.5rem 3rem",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span style={{ color: "var(--gold)", fontSize: "1.4rem" }}>⧗</span>
          <span style={{ fontFamily: "var(--font-playfair)", letterSpacing: "0.25em", fontSize: "0.95rem", textTransform: "uppercase", color: "var(--text-primary)" }}>
            TimeCapsule
          </span>
        </div>

        {/* Center quote */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "2rem" }}>
            <div style={{ width: "2rem", height: "1px", background: "var(--gold-dim)" }} />
            <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.55rem", letterSpacing: "0.3em", color: "var(--gold)", textTransform: "uppercase" }}>
              The Vault Awaits
            </span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            lineHeight: 1.15,
            color: "var(--text-primary)",
            marginBottom: "1.5rem",
            fontWeight: 700,
          }}>
            Every great journey
            <br />
            starts with a
            <br />
            <em style={{ color: "var(--gold)" }}>sealed letter.</em>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.8, maxWidth: "340px" }}>
            Sign in to create your first time capsule.
            Your thoughts, locked until the moment is right.
          </p>
        </div>

        {/* Footer note */}
        <div style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.55rem", color: "var(--border)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Encrypted · Time-locked · AI reviewed
        </div>
      </div>

      {/* Right — Login Form */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem",
      }}>
        <div style={{ width: "100%", maxWidth: "360px" }}>

          {/* Header */}
          <div style={{ marginBottom: "3rem", textAlign: "center" }}>
            <div style={{
              width: "60px", height: "60px",
              border: "1px solid var(--gold-dim)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
            }}>
              <span style={{ color: "var(--gold)", fontSize: "1.4rem" }}>⧗</span>
            </div>
            <h1 style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "1.8rem",
              color: "var(--text-primary)",
              marginBottom: "0.5rem",
            }}>
              Open the Vault
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem", letterSpacing: "0.05em" }}>
              Sign in to access your capsules
            </p>
          </div>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            <span style={{ color: "var(--gold-dim)", fontSize: "0.65rem" }}>✦</span>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          </div>

          {/* Google Sign In Button */}
          <form action={async () => {
            "use server"
            await signIn("google", { redirectTo: "/dashboard" })
          }}>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "1rem",
                border: "1px solid var(--border)",
                background: "var(--surface)",
                color: "var(--text-primary)",
                fontFamily: "var(--font-jetbrains)",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.8rem",
                transition: "border-color 0.2s",
              }}
            >
              {/* Google icon */}
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
          </form>

          {/* Terms */}
          <p style={{
            color: "var(--border)",
            fontSize: "0.6rem",
            textAlign: "center",
            marginTop: "2rem",
            lineHeight: 1.7,
            fontFamily: "var(--font-jetbrains)",
            letterSpacing: "0.05em",
          }}>
            By signing in, your capsules will be
            <br />
            encrypted and stored securely.
          </p>

          {/* Back link */}
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a href="/" style={{ color: "var(--text-secondary)", fontSize: "0.7rem", fontFamily: "var(--font-jetbrains)", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}