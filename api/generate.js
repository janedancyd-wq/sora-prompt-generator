export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { idea } = req.body;

    const prompt = `
You are a viral short-form video expert.

Based on this idea:
${idea}

Create a COMPLETE viral toddler video package.

OUTPUT FORMAT:

1. VIDEO SCRIPT
Style:
Ultra-realistic family vlog style

Scene:
Describe environment

Characters:
Cute toddler

Action & Dialogue:
Include funny toddler lines

Hook:
First 3 seconds viral moment

Peak Moment:
Funniest moment

Ending:
Funny or cute ending

Mood:
Cute, chaotic, funny

Video Settings:
Vertical 9:16, 10–15 seconds

2. SORA PROMPT
Write a ready-to-use prompt.

3. YOUTUBE
Title:
Description:
Tags: #shorts #toddler #funnybaby

4. TIKTOK
Caption:
Hashtags: #fyp #baby

5. XIAOHONGSHU
标题：
文案：
标签：

Make it viral and engaging.
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
          {
            role: "system",
            content: "You are an expert viral video prompt generator."
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
