async function generatePrompt() {

  const idea = document.getElementById("idea").value;

  const response = await fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ idea })
  });

  const data = await response.json();

  document.getElementById("result").innerText =
    JSON.stringify(data, null, 2);

}
