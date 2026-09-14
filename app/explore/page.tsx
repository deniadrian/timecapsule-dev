import { db } from "@/lib/db"
import Link from "next/link"

export default async function ExplorePage() {
  const capsules = await db.capsule.findMany({
    where: {
      isPublic: true,
      isOpened: true,
    },
    include: { author: true },
    orderBy: { openedAt: "desc" },
  })

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", color: "var(--text-primary)" }}>

      {/* Navbar */}
      <nav style={{ borderBottom: "1px solid var(--border)", padding: "1.25rem 3rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
          <span style={{ color: "var(--gold)", fontSize: "1.4rem" }}>⧗</span>
          <span style={{ fontFamily: "var(--font-playfair)", letterSpacing: "0.25em", fontSize: "0.95rem", textTransform: "uppercase", color: "var(--text-primary)" }}>
            TimeCapsule
          </span>
        </Link>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <span style={{ color: "var(--gold)", fontFamily: "var(--font-jetbrains)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Explore
          </span>
          <Link href="/dashboard" style={{ color: "var(--text-secondary)", fontSize: "0.7rem", fontFamily: "var(--font-jetbrains)", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>
            My Vault
          </Link>
        </div>
      </nav>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "5rem" }}>
          <p style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.35em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "1rem" }}>
            Public Archive
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Opened Capsules
            <br />
            <em style={{ color: "var(--gold)" }}>from the community.</em>
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ width: "3rem", height: "1px", background: "var(--border)" }} />
            <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
              {capsules.length} capsule{capsules.length !== 1 ? "s" : ""} revealed so far
            </span>
          </div>
        </div>

        {/* Empty state */}
        {capsules.length === 0 ? (
          <div style={{ textAlign: "center", padding: "6rem 2rem", border: "1px solid var(--border)" }}>
            <div style={{ width: "80px", height: "80px", border: "1px solid var(--border)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2rem" }}>
              <span style={{ color: "var(--gold-dim)", fontSize: "1.5rem" }}>⧗</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", marginBottom: "0.8rem" }}>
              No capsules opened yet.
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              Be the first to seal a public capsule.
              <br />
              The archive will grow with time.
            </p>
            <Link href="/login" style={{ border: "1px solid var(--gold-dim)", color: "var(--gold)", padding: "0.9rem 2rem", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", textDecoration: "none" }}>
              Seal a Capsule
            </Link>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {capsules.map((capsule, i) => (
              <Link
                key={capsule.id}
                href={`/capsule/${capsule.id}`}
                style={{ textDecoration: "none" }}
              >
                <div style={{
                  borderBottom: "1px solid var(--border)",
                  borderTop: i === 0 ? "1px solid var(--border)" : "none",
                  padding: "2.5rem 0",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "2rem",
                  alignItems: "start",
                  cursor: "pointer",
                }}>
                  {/* Left */}
                  <div>
                    {/* Author + date */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1rem" }}>
                      {capsule.author.image && (
                        <img src={capsule.author.image} alt="" width={22} height={22}
                          style={{ borderRadius: "50%", border: "1px solid var(--border)" }} />
                      )}
                      <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", color: "var(--text-secondary)", letterSpacing: "0.1em" }}>
                        {capsule.author.name}
                      </span>
                      <span style={{ color: "var(--border)" }}>·</span>
                      <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", color: "var(--text-secondary)", letterSpacing: "0.1em" }}>
                        Sealed {new Date(capsule.createdAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.8rem", lineHeight: 1.3 }}>
                      {capsule.title}
                    </h2>

                    {/* Preview */}
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "560px" }}>
                      {capsule.content.slice(0, 140)}{capsule.content.length > 140 ? "..." : ""}
                    </p>

                    {/* AI Review preview */}
                    {capsule.aiReview && (
                      <div style={{ marginTop: "1.2rem", display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                        <span style={{ color: "var(--gold)", fontSize: "0.65rem", marginTop: "0.1rem" }}>✦</span>
                        <p style={{ color: "var(--gold-dim)", fontSize: "0.8rem", fontStyle: "italic", fontFamily: "var(--font-playfair)", lineHeight: 1.6 }}>
                          {capsule.aiReview.slice(0, 120)}...
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right */}
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    {capsule.category && (
                      <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.55rem", letterSpacing: "0.2em", color: "var(--text-secondary)", textTransform: "uppercase", border: "1px solid var(--border)", padding: "0.2rem 0.6rem", display: "inline-block", marginBottom: "0.8rem" }}>
                        {capsule.category.replace("-", " ")}
                      </span>
                    )}
                    <div style={{ color: "var(--text-secondary)", fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.1em" }}>
                      Opened {new Date(capsule.openedAt!).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "1.5rem 3rem", display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center" }}>
        <span style={{ color: "var(--text-secondary)", fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem" }}>
          © 2024 TimeCapsule Dev
        </span>
        <span style={{ color: "var(--border)", fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem" }}>
          — p.02 —
        </span>
        <span style={{ color: "var(--gold)", fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", fontStyle: "italic", textAlign: "right" }}>
          Time is the only currency that matters.
        </span>
      </footer>
    </main>
  )
}