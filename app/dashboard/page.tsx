import { auth, signOut } from "@/lib/auth"
import { redirect } from "next/navigation"
import { db } from "@/lib/db"
import Link from "next/link"

export default async function DashboardPage() {
  const session = await auth()
  if (!session?.user) redirect("/login")

  const capsules = await db.capsule.findMany({
    where: { authorId: session.user.id },
    orderBy: { createdAt: "desc" },
  })

  const now = new Date()

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
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <Link href="/explore" style={{ color: "var(--text-secondary)", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>
            Explore
          </Link>
          {session.user.image && (
            <img src={session.user.image} alt="avatar" width={32} height={32}
              style={{ borderRadius: "50%", border: "1px solid var(--gold-dim)" }} />
          )}
          <form action={async () => {
            "use server"
            await signOut({ redirectTo: "/" })
          }}>
            <button type="submit" style={{
              background: "none",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              fontFamily: "var(--font-jetbrains)",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "0.4rem 0.8rem",
              cursor: "pointer",
            }}>
    Sign Out
  </button>
</form>
        </div>
      </nav>

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "4rem 2rem" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "4rem", borderBottom: "1px solid var(--border)", paddingBottom: "2rem" }}>
          <div>
            <p style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem", letterSpacing: "0.35em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "0.8rem" }}>
              Your Vault
            </p>
            <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "2.5rem", fontWeight: 700 }}>
              Welcome back, <em style={{ color: "var(--gold)" }}>{session.user.name?.split(" ")[0]}.</em>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem", marginTop: "0.5rem", fontFamily: "var(--font-jetbrains)" }}>
              {capsules.length} capsule{capsules.length !== 1 ? "s" : ""} sealed
            </p>
          </div>
          <Link href="/capsule/new" style={{
            background: "var(--gold)", color: "var(--bg)",
            padding: "0.9rem 2rem", fontSize: "0.7rem",
            letterSpacing: "0.22em", fontWeight: 700,
            textTransform: "uppercase", textDecoration: "none",
          }}>
            ✦ New Capsule
          </Link>
        </div>

        {/* Capsule List */}
        {capsules.length === 0 ? (
          <div style={{ textAlign: "center", padding: "6rem 2rem" }}>
            <div style={{ width: "100px", height: "100px", border: "1px solid var(--border)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2rem" }}>
              <span style={{ color: "var(--gold-dim)", fontSize: "2rem" }}>⧗</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", marginBottom: "0.8rem" }}>
              Your vault is empty.
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              You haven't sealed any capsules yet.<br />
              What do you want to tell your future self?
            </p>
            <Link href="/capsule/new" style={{ border: "1px solid var(--gold-dim)", color: "var(--gold)", padding: "0.9rem 2rem", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", textDecoration: "none" }}>
              Seal Your First Capsule
            </Link>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {capsules.map((capsule, i) => {
              const isLocked = new Date(capsule.openDate) > now
              const daysLeft = Math.ceil((new Date(capsule.openDate).getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

              return (
                <Link
                  key={capsule.id}
                  href={`/capsule/${capsule.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div style={{
                    borderBottom: "1px solid var(--border)",
                    borderTop: i === 0 ? "1px solid var(--border)" : "none",
                    padding: "2rem 0",
                    display: "grid",
                    gridTemplateColumns: "60px 1fr auto",
                    gap: "2rem",
                    alignItems: "center",
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}>
                    {/* Index */}
                    <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "1.5rem", color: "var(--border)", letterSpacing: "-0.05em" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Content */}
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.4rem" }}>
                        <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", color: "var(--text-primary)", fontWeight: 600 }}>
                          {capsule.title}
                        </h3>
                        {capsule.category && (
                          <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.55rem", letterSpacing: "0.2em", color: "var(--text-secondary)", textTransform: "uppercase", border: "1px solid var(--border)", padding: "0.2rem 0.5rem" }}>
                            {capsule.category.replace("-", " ")}
                          </span>
                        )}
                      </div>
                      <p style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.65rem", color: "var(--text-secondary)", letterSpacing: "0.1em" }}>
                        Created {new Date(capsule.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                        {" · "}
                        Opens {new Date(capsule.openDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                      </p>
                    </div>

                    {/* Status */}
                    <div style={{ textAlign: "right" }}>
                      {isLocked ? (
                        <div>
                          <div style={{ color: "var(--gold)", fontFamily: "var(--font-jetbrains)", fontSize: "0.65rem", letterSpacing: "0.1em", marginBottom: "0.2rem" }}>
                            🔒 Sealed
                          </div>
                          <div style={{ color: "var(--text-secondary)", fontFamily: "var(--font-jetbrains)", fontSize: "0.6rem" }}>
                            {daysLeft} day{daysLeft !== 1 ? "s" : ""} left
                          </div>
                        </div>
                      ) : (
                        <div style={{ color: "var(--seal)", fontFamily: "var(--font-jetbrains)", fontSize: "0.65rem", letterSpacing: "0.1em" }}>
                          ✦ Ready to open
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}