import { auth } from "@/lib/auth"
import { redirect, notFound } from "next/navigation"
import { db } from "@/lib/db"
import Link from "next/link"

export default async function CapsuleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const session = await auth()
  if (!session?.user) redirect("/login")

  const capsule = await db.capsule.findUnique({
    where: { id },
    include: { author: true },
  })

  if (!capsule) notFound()

  const isOwner = capsule.authorId === session.user.id
  if (!isOwner && !capsule.isPublic) notFound()

  const now = new Date()
  const isLocked = new Date(capsule.openDate) > now
  const daysLeft = Math.ceil((new Date(capsule.openDate).getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

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

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "5rem 2rem" }}>

        {/* Meta */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
          {capsule.category && (
            <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.55rem", letterSpacing: "0.2em", color: "var(--text-secondary)", textTransform: "uppercase", border: "1px solid var(--border)", padding: "0.2rem 0.6rem" }}>
              {capsule.category.replace("-", " ")}
            </span>
          )}
          <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", color: "var(--text-secondary)", letterSpacing: "0.1em" }}>
            {new Date(capsule.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "2rem" }}>
          {capsule.title}
        </h1>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          <span style={{ color: "var(--gold-dim)", fontSize: "0.65rem" }}>✦</span>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
        </div>

        {/* LOCKED STATE */}
        {isLocked ? (
          <div style={{ textAlign: "center", padding: "5rem 2rem", border: "1px solid var(--border)" }}>
            <div style={{
              width: "120px", height: "120px",
              border: "1px solid var(--gold-dim)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 2.5rem",
            }}>
              <span style={{ fontSize: "2.5rem" }}>🔒</span>
            </div>
            <p style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.35em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "1rem" }}>
              This capsule is sealed
            </p>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", marginBottom: "1rem" }}>
              {daysLeft} day{daysLeft !== 1 ? "s" : ""} remaining
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.8, marginBottom: "0.5rem" }}>
              This capsule will reveal itself on
            </p>
            <p style={{ color: "var(--gold)", fontFamily: "var(--font-jetbrains)", fontSize: "0.85rem", letterSpacing: "0.1em" }}>
              {new Date(capsule.openDate).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>

        ) : (
          /* UNLOCKED STATE */
          <div>
            {/* Content */}
            <div style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              padding: "3rem",
              marginBottom: "3rem",
            }}>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.05rem", lineHeight: 2, color: "var(--text-primary)", whiteSpace: "pre-wrap" }}>
                {capsule.content}
              </p>
            </div>

            {/* AI Review */}
            {capsule.aiReview ? (
              <div style={{ border: "1px solid var(--gold-dim)", padding: "2.5rem" }}>
                <p style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.35em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                  ✦ AI Verdict
                </p>
                <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1rem", lineHeight: 1.9, color: "var(--text-secondary)", fontStyle: "italic" }}>
                  {capsule.aiReview}
                </p>
              </div>
            ) : isOwner ? (
              <form action={`/api/capsules/${capsule.id}/open`} method="POST">
                <button type="submit" style={{
                  width: "100%",
                  background: "var(--gold)",
                  color: "var(--bg)",
                  padding: "1.2rem",
                  fontSize: "0.75rem",
                  letterSpacing: "0.22em",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                }}>
                  ✦ Request AI Verdict
                </button>
              </form>
            ) : null}
          </div>
        )}

        {/* Author */}
        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "0.8rem" }}>
          {capsule.author.image && (
            <img src={capsule.author.image} alt="" width={28} height={28} style={{ borderRadius: "50%", border: "1px solid var(--border)" }} />
          )}
          <span style={{ color: "var(--text-secondary)", fontFamily: "var(--font-jetbrains)", fontSize: "0.65rem", letterSpacing: "0.1em" }}>
            Sealed by {capsule.author.name}
          </span>
        </div>
      </div>
    </main>
  )
}