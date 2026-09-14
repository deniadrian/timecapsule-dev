"use server"

import { db } from "./db"
import { auth } from "./auth"
import { redirect } from "next/navigation"

export async function createCapsule(formData: FormData) {
  const session = await auth()
  if (!session?.user?.id) redirect("/login")

  const title = formData.get("title") as string
  const content = formData.get("content") as string
  const openDate = formData.get("openDate") as string
  const category = formData.get("category") as string
  const isPublic = formData.get("isPublic") === "on"

  if (!title || !content || !openDate) return

  await db.capsule.create({
    data: {
      title,
      content,
      openDate: new Date(openDate),
      category,
      isPublic,
      authorId: session.user.id,
    },
  })

  redirect("/dashboard")
}