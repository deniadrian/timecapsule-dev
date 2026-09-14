import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { generateCapsuleReview } from "@/lib/gemini"

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const session = await auth()

  if (!session?.user?.id) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  const capsule = await db.capsule.findUnique({ where: { id } })

  if (!capsule || capsule.authorId !== session.user.id) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }

  const now = new Date()
  const isLocked = new Date(capsule.openDate) > now

  if (isLocked) {
    return NextResponse.json({ error: "Capsule is still sealed" }, { status: 403 })
  }

  // Generate AI review
  const aiReview = await generateCapsuleReview(
    capsule.content,
    capsule.createdAt,
    now
  )

  // Save to database
  await db.capsule.update({
    where: { id },
    data: {
      isOpened: true,
      openedAt: now,
      aiReview,
    },
  })

  return NextResponse.redirect(new URL(`/capsule/${id}`, req.url))
}