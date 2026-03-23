async function generatePrompt() {
  const idea = document.getElementById("topic").value;
  const resultBox = document.getElementById("result");

  if (!idea) {
    alert("Please enter an idea");
    return;
  }

  resultBox.value = "Generating...";

  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ idea })
    });

    const data = await response.json();

    if (data.error) {
      resultBox.value = "Error: " + data.error;
      return;
    }

    resultBox.value = data.prompt;

  } catch (err) {
    resultBox.value = "Request failed: " + err.message;
  }
}
