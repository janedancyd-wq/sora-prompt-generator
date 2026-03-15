export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {

    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const idea = body.idea;

    const prompt = `
You are a professional Sora video prompt engineer.

Create a cinematic AI video prompt based on this idea:

${idea}

The prompt should include:

Style
Camera
Lighting
Scene
Characters
Action
Mood
Resolution

Make it detailed and ready for Sora video generation.
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are an expert AI video prompt generator."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7
      })
    });

    const data = await response.json();

    res.status(200).json({
      prompt: data.choices[0].message.content
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

}
