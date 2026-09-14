import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function generateCapsuleReview(
  content: string,
  createdAt: Date,
  openedAt: Date,
): Promise<string> {
  const monthsDiff = Math.round(
    (openedAt.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24 * 30),
  );

  const prompt = `
You are an AI reviewer for TimeCapsule Dev — a platform where developers seal their predictions and thoughts for the future.

Someone wrote this message ${monthsDiff} month(s) ago and it just unlocked today:

---
"${content}"
---

Written on: ${createdAt.toDateString()}
Opened on: ${openedAt.toDateString()}

Analyze this message thoughtfully. Consider:
- If it contains predictions, how accurate were they based on your knowledge?
- If it contains personal goals, reflect on the journey they implied
- The emotional weight of reading your own past words

Write a warm, thoughtful, slightly philosophical review in 3-4 sentences. 
Be honest but encouraging. Speak directly to the author as "you".
Do NOT use bullet points. Write in flowing prose.
End with one short memorable sentence that feels like a verdict.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return (
    response.text ?? "The capsule has been opened. Time has its own verdict."
  );
}
