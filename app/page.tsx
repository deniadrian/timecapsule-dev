import Link from "next/link";

const marqueeText =
  "TIMECAPSULE DEV ✦ SEAL YOUR FUTURE ✦ AI POWERED VERDICT ✦ ENCRYPTED MESSAGES ✦ OPEN WHEN READY ✦ ";

export default function Home() {
  return (
    <main
      style={{
        background: "var(--bg)",
        color: "var(--text-primary)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          borderBottom: "1px solid var(--border)",
          padding: "1.25rem 3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span style={{ color: "var(--gold)", fontSize: "1.4rem" }}>⧗</span>
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              letterSpacing: "0.25em",
              fontSize: "0.95rem",
              textTransform: "uppercase",
            }}
          >
            TimeCapsule
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
          {/* Issue label — editorial touch */}
          <span
            style={{
              color: "var(--border)",
              fontFamily: "var(--font-jetbrains)",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
            }}
          >
            VOL. I — ISSUE 001
          </span>
          <Link
            href="/explore"
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.75rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Explore
          </Link>
          <Link
            href="/login"
            style={{
              border: "1px solid var(--gold-dim)",
              color: "var(--gold)",
              padding: "0.5rem 1.4rem",
              fontSize: "0.75rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Open the Vault
          </Link>
        </div>
      </nav>

      {/* Hero — Asymmetric 2 column */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          minHeight: "90vh",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {/* Left — Text */}
        <div
          style={{
            padding: "3rem 4rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRight: "1px solid var(--border)",
          }}
        >
          {/* Tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                width: "2rem",
                height: "1px",
                background: "var(--gold-dim)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: "0.6rem",
                letterSpacing: "0.35em",
                color: "var(--gold)",
                textTransform: "uppercase",
              }}
            >
              For developers who think long-term
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(3rem, 5vw, 5.5rem)",
              lineHeight: 1.05,
              fontWeight: 700,
              marginBottom: "2rem",
            }}
          >
            What will you
            <br />
            tell your
            <br />
            <em style={{ color: "var(--gold)" }}>future self?</em>
          </h1>

          {/* Ornament */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                width: "3rem",
                height: "1px",
                background: "var(--border)",
              }}
            />
            <span style={{ color: "var(--gold-dim)", fontSize: "0.7rem" }}>
              ✦
            </span>
            <div
              style={{
                width: "3rem",
                height: "1px",
                background: "var(--border)",
              }}
            />
          </div>

          {/* Description */}
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1rem",
              lineHeight: 1.9,
              maxWidth: "420px",
              marginBottom: "3.5rem",
            }}
          >
            Seal your predictions, decisions, and thoughts. Let AI be the judge
            when the moment of truth arrives.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/login"
              style={{
                background: "var(--gold)",
                color: "var(--bg)",
                padding: "1rem 2.5rem",
                fontSize: "0.75rem",
                letterSpacing: "0.22em",
                fontWeight: 700,
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Seal a Capsule
            </Link>
            <Link
              href="/explore"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
                padding: "1rem 2.5rem",
                fontSize: "0.75rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              See Opened Capsules
            </Link>
          </div>
        </div>

        {/* Right — Decorative Vault Visual */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background glow */}
          <div
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              background:
                "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />

          {/* Outer ring — spinning */}
          <svg
            className="vault-ring"
            width="340"
            height="340"
            viewBox="0 0 340 340"
            style={{ position: "absolute" }}
          >
            <circle
              cx="170"
              cy="170"
              r="160"
              fill="none"
              stroke="var(--border)"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
          </svg>

          {/* Middle ring */}
          <svg
            width="260"
            height="260"
            viewBox="0 0 260 260"
            style={{ position: "absolute" }}
          >
            <circle
              cx="130"
              cy="130"
              r="125"
              fill="none"
              stroke="var(--gold-dim)"
              strokeWidth="0.5"
            />
          </svg>

          {/* Center vault */}
          <div
            style={{
              width: "180px",
              height: "180px",
              border: "1px solid var(--gold-dim)",
              borderRadius: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 1,
              background: "var(--surface)",
            }}
          >
            <span
              style={{
                color: "var(--gold-dim)",
                fontFamily: "var(--font-jetbrains)",
                fontSize: "0.55rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              Sealed
            </span>
            <span
              style={{
                color: "var(--gold)",
                fontFamily: "var(--font-playfair)",
                fontSize: "2.5rem",
                fontWeight: 700,
              }}
            >
              ⧗
            </span>
            <span
              style={{
                color: "var(--text-secondary)",
                fontFamily: "var(--font-jetbrains)",
                fontSize: "0.55rem",
                letterSpacing: "0.2em",
                marginTop: "0.5rem",
              }}
            >
              Until revealed
            </span>
          </div>

          {/* Corner label */}
          <div
            style={{
              position: "absolute",
              bottom: "2rem",
              right: "2rem",
              textAlign: "right",
            }}
          >
            <div
              style={{
                color: "var(--border)",
                fontFamily: "var(--font-jetbrains)",
                fontSize: "0.55rem",
                letterSpacing: "0.2em",
              }}
            >
              ENCRYPTED
            </div>
            <div
              style={{
                color: "var(--border)",
                fontFamily: "var(--font-jetbrains)",
                fontSize: "0.55rem",
                letterSpacing: "0.2em",
              }}
            >
              TIME-LOCKED
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Strip */}
      <div
        style={{
          borderBottom: "1px solid var(--border)",
          overflow: "hidden",
          padding: "0.9rem 0",
          background: "var(--surface)",
        }}
      >
        <div className="marquee-inner">
          {[...Array(2)].map((_, i) => (
            <span
              key={i}
              style={{
                color: "var(--gold-dim)",
                fontFamily: "var(--font-jetbrains)",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                paddingRight: "2rem",
              }}
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* How it works — Vertical Timeline */}
      <section
        style={{
          padding: "6rem 3rem",
          maxWidth: "900px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <p
          style={{
            color: "var(--text-secondary)",
            fontFamily: "var(--font-jetbrains)",
            fontSize: "0.6rem",
            letterSpacing: "0.45em",
            marginBottom: "5rem",
            textTransform: "uppercase",
          }}
        >
          How it works
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {[
            {
              step: "01",
              title: "Write",
              desc: "Pour your predictions, tech decisions, or personal goals into a capsule. No limit on depth or honesty.",
              icon: "✍",
            },
            {
              step: "02",
              title: "Seal",
              desc: "Set a future date. Your message is encrypted and locked tight — no peeking, no edits.",
              icon: "⬡",
            },
            {
              step: "03",
              title: "Reveal",
              desc: "When time comes, AI reviews your words against what actually happened. Truth has a verdict.",
              icon: "✦",
            },
          ].map((item, i) => (
            <div
              key={item.step}
              style={{
                display: "grid",
                gridTemplateColumns: "100px 1px 1fr",
                gap: "0 2.5rem",
              }}
            >
              {/* Step number */}
              <div
                style={{
                  textAlign: "right",
                  paddingTop: "0.3rem",
                  paddingBottom: "3rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    fontSize: "2.5rem",
                    color: "var(--border)",
                    letterSpacing: "-0.05em",
                    lineHeight: 1,
                  }}
                >
                  {item.step}
                </span>
              </div>

              {/* Vertical line + dot */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--gold)",
                    marginTop: "0.5rem",
                    flexShrink: 0,
                  }}
                />
                {i < 2 && (
                  <div
                    style={{
                      width: "1px",
                      flex: 1,
                      background: "var(--border)",
                      marginTop: "0.5rem",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingBottom: "3.5rem" }}>
                <div
                  style={{
                    color: "var(--gold)",
                    fontSize: "1.2rem",
                    marginBottom: "0.8rem",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.8rem",
                    marginBottom: "0.8rem",
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                    maxWidth: "380px",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "3rem",
          textAlign: "center",
          background: "var(--surface)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            color: "var(--text-secondary)",
            fontSize: "1.1rem",
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          "The best time to plant a tree was 20 years ago.
          <br />
          The second best time is now."
        </p>
        <p
          style={{
            color: "var(--gold-dim)",
            fontSize: "0.6rem",
            letterSpacing: "0.25em",
            marginTop: "1rem",
            fontFamily: "var(--font-jetbrains)",
            textTransform: "uppercase",
          }}
        >
          — Chinese Proverb
        </p>
      </div>

      {/* Bottom CTA */}
      <section style={{ padding: "7rem 3rem", textAlign: "center" }}>
        <p
          style={{
            color: "var(--gold-dim)",
            fontFamily: "var(--font-jetbrains)",
            fontSize: "0.6rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          Ready to start?
        </p>
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
            marginBottom: "3rem",
            lineHeight: 1.15,
          }}
        >
          The future version of you
          <br />
          <em style={{ color: "var(--gold)" }}>is waiting.</em>
        </h2>
        <Link
          href="/login"
          style={{
            background: "var(--gold)",
            color: "var(--bg)",
            padding: "1.1rem 3rem",
            fontSize: "0.75rem",
            letterSpacing: "0.22em",
            fontWeight: 700,
            textTransform: "uppercase",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Create Your Capsule
        </Link>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "1.5rem 3rem",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "var(--text-secondary)",
            fontFamily: "var(--font-jetbrains)",
            fontSize: "0.6rem",
            letterSpacing: "0.1em",
          }}
        >
          © 2026 TimeCapsule Dev
        </span>
        <span
          style={{
            color: "var(--border)",
            fontFamily: "var(--font-jetbrains)",
            fontSize: "0.6rem",
            letterSpacing: "0.1em",
          }}
        >
          — p.01 —
        </span>
        <span
          style={{
            color: "var(--gold)",
            fontFamily: "var(--font-jetbrains)",
            fontSize: "0.6rem",
            fontStyle: "italic",
            textAlign: "right",
          }}
        >
          Time is the only currency that matters.
        </span>
      </footer>
    </main>
  );
}
