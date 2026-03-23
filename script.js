function generatePrompt() {

  const idea = document.getElementById("topic").value;

  if (!idea) {
    alert("Please enter an idea");
    return;
  }

  const hooks = [
    "The toddler suddenly says something unexpected.",
    "Dad is NOT ready for this question.",
    "This moment gets awkward fast.",
    "Mom tries not to laugh… but fails.",
    "What the toddler says shocks everyone."
  ];

  const endings = [
    "Dad freezes. Silence. Then bursts out laughing.",
    "Mom loses it and laughs uncontrollably.",
    "Toddler looks proud like a genius.",
    "Camera shakes slightly from laughter.",
    "Cut at the funniest moment."
  ];

  const randomHook = hooks[Math.floor(Math.random() * hooks.length)];
  const randomEnding = endings[Math.floor(Math.random() * endings.length)];

  const prompt = `
Style:
Ultra-realistic family vlog style.
Natural handheld phone-camera feel.
Warm cozy home lighting.
No subtitles, no watermark.

Scene:
A modern American living room.
Soft natural lighting.
Casual family atmosphere.

Characters:
A 2-year-old toddler (cute, expressive, curious).
Dad (calm but easily amused).
Mom filming casually.

Action & Dialogue:
Topic: ${idea}

${randomHook}

The toddler speaks seriously and confidently.

Include a short, funny dialogue between toddler and parent.
Keep it natural, simple, and very relatable.

Build a strong emotional + comedic moment.

Ending:
${randomEnding}

Mood:
Cute, funny, slightly awkward, highly relatable.

Video Length:
8–12 seconds

Format:
Vertical 9:16
`;

  document.getElementById("result").value = prompt.trim();
}
