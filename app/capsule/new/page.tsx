import { createCapsule } from "@/lib/actions"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"

export default async function NewCapsulePage() {
  const session = await auth()
  if (!session?.user) redirect("/login")

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--text-primary)" }}>

      {/* Navbar */}
      <nav style={{ borderBottom: "1px solid var(--border)", padding: "1.25rem 3rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span style={{ color: "var(--gold)", fontSize: "1.4rem" }}>⧗</span>
          <span style={{ fontFamily: "var(--font-playfair)", letterSpacing: "0.25em", fontSize: "0.95rem", textTransform: "uppercase" }}>
            TimeCapsule
          </span>
        </div>
        <Link href="/dashboard" style={{ color: "var(--text-secondary)", fontSize: "0.7rem", fontFamily: "var(--font-jetbrains)", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>
          ← Back to Vault
        </Link>
      </nav>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "4rem 2rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.35em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "0.8rem" }}>
            New Capsule
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "2.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            Seal your thoughts.
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
            Write freely. No one can read this until the date you choose.
          </p>
        </div>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          <span style={{ color: "var(--gold-dim)", fontSize: "0.65rem" }}>✦</span>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        </div>

        {/* Form */}
        <form action={createCapsule} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

          {/* Title */}
          <div>
            <label style={{ display: "block", fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.25em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "0.8rem" }}>
              Capsule Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="e.g. My tech predictions for 2027..."
              required
              style={{
                width: "100%",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                fontFamily: "var(--font-playfair)",
                fontSize: "1rem",
                padding: "1rem 1.2rem",
                outline: "none",
              }}
            />
          </div>

          {/* Content */}
          <div>
            <label style={{ display: "block", fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.25em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "0.8rem" }}>
              Your Message
            </label>
            <textarea
              name="content"
              placeholder="Write your predictions, decisions, or thoughts here. Be honest. Be bold. No one is watching — yet."
              required
              rows={12}
              style={{
                width: "100%",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                fontFamily: "var(--font-playfair)",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                padding: "1.2rem",
                outline: "none",
                resize: "vertical",
              }}
            />
          </div>

          {/* Open Date */}
          <div>
            <label style={{ display: "block", fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.25em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "0.8rem" }}>
              Open Date — When should this be revealed?
            </label>
            <input
              type="date"
              name="openDate"
              required
              min={new Date(Date.now() + 86400000).toISOString().split("T")[0]}
              style={{
                width: "100%",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                fontFamily: "var(--font-jetbrains)",
                fontSize: "0.85rem",
                padding: "1rem 1.2rem",
                outline: "none",
                colorScheme: "dark",
              }}
            />
          </div>

          {/* Category */}
          <div>
            <label style={{ display: "block", fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.25em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "0.8rem" }}>
              Category
            </label>
            <select
              name="category"
              style={{
                width: "100%",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-jetbrains)",
                fontSize: "0.8rem",
                padding: "1rem 1.2rem",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <option value="tech-prediction">⚡ Tech Prediction</option>
              <option value="personal-goal">🎯 Personal Goal</option>
              <option value="team-decision">🤝 Team Decision</option>
              <option value="life-lesson">📖 Life Lesson</option>
              <option value="other">✦ Other</option>
            </select>
          </div>

          {/* Visibility */}
          <div style={{ border: "1px solid var(--border)", padding: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <p style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.25em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "0.3rem" }}>
                  Public Capsule
                </p>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}>
                  When opened, others can read and react to it
                </p>
              </div>
              <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                <input type="checkbox" name="isPublic" style={{ width: "18px", height: "18px", accentColor: "var(--gold)", cursor: "pointer" }} />
              </label>
            </div>
          </div>

          {/* Submit */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", paddingTop: "1rem" }}>
            <button
              type="submit"
              style={{
                background: "var(--gold)",
                color: "var(--bg)",
                padding: "1rem 2.5rem",
                fontSize: "0.75rem",
                letterSpacing: "0.22em",
                fontWeight: 700,
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
              }}
            >
              Seal the Capsule 🔒
            </button>
            <Link href="/dashboard" style={{ color: "var(--text-secondary)", fontSize: "0.7rem", fontFamily: "var(--font-jetbrains)", letterSpacing: "0.1em", textDecoration: "none" }}>
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </main>
  )
}