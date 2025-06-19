const url = "Provide your url here from gemini";

document.addEventListener("DOMContentLoaded", () => {
  const chartForm = document.getElementById("chatForm");
  const userInput = document.getElementById("userInput");
  const chatMessages = document.getElementById("chatMessages");
  const sendButton = document.getElementById("sendButton");

  //Auto re-size textarea
  userInput.addEventListener("input", () => {
    userInput.style.height = "auto"; // Reset height
    userInput.style.height = `${userInput.scrollHeight}px`; // Set to scrollHeight
  });

  chartForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    // Display user's message
    chatMessages.innerHTML += `<div class="message user-message">${userMessage}</div>`;
    userInput.value = ""; // Clear input
    userInput.style.height = "auto"; // Reset height

    // Send request to the API
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: userMessage,
          maxOutputTokens: 100,
          temperature: 0.5,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const botMessage = data.candidates[0].content;

      // Display bot's response
      chatMessages.innerHTML += `<div class="message bot-message">${botMessage}</div>`;
      chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
    } catch (error) {
      console.error("Error:", error);
      chatMessages.innerHTML += `<div class="message error-message">Error: ${error.message}</div>`;
    }
  });
});
