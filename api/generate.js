export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { idea } = req.body;

    const prompt = `
Create 3 viral toddler video ideas.

Idea: ${idea}

Format:
Version A / B / C

Each includes:
Hook
Scene
Action
Dialogue
Ending
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a viral video expert." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7
      })
    });

    const data = await response.json();

    // 👇关键：如果 OpenAI 报错
    if (!response.ok) {
      return res.status(500).json({
        error: data.error?.message || "OpenAI error"
      });
    }

    return res.status(200).json({
      prompt: data.choices[0].message.content
    });

  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
}
