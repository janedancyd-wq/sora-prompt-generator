function generatePrompt() {
  const input = document.getElementById("topic");
  const output = document.getElementById("result");

  if (!input || !output) {
    alert("HTML ID mismatch");
    return;
  }

  const idea = input.value;

  if (!idea) {
    alert("Please enter an idea");
    return;
  }

  const prompt = `🎬 Viral Toddler Video Prompt

Idea: ${idea}

Hook:
The toddler says something unexpected in the first 3 seconds.

Scene:
A cozy American living room, warm lighting, handheld camera.

Characters:
Cute expressive toddler + parent reacting.

Action:
Toddler speaks seriously and says something funny about "${idea}".

Parents react naturally → surprise → laughter.

Ending:
Cut at peak funny moment.

Style:
Ultra-realistic, vlog style, no subtitles, no watermark.

Format:
Vertical 9:16, 8–12 seconds.
`;

  output.value = prompt;
}
