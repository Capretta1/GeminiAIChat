# 💬 Gemini AI Chat

A lightweight and responsive web-based chatbot powered by **Google's Gemini 1.5 Flash model**, built with **HTML, CSS, and Vanilla JavaScript**. This app allows users to interact with a conversational AI directly from the browser using a sleek, minimal interface.

---

## 🚀 Features

- ✅ Chat with Google's **Gemini 1.5 Flash** model
- 💡 Auto-resizing message input
- 🧠 Real-time interaction with streaming-like experience
- 📱 Responsive layout for mobile and desktop
- 📦 Built with clean and modular Vanilla JavaScript
- ⚠️ Graceful error handling

---

## 🛠️ Technologies Used

- **HTML5** – Markup and layout structure
- **CSS3** – Custom responsive UI styling
- **JavaScript (ES6+)** – DOM manipulation and API communication
- **Google Generative Language API** – For Gemini AI responses

---

## 📸 Preview

![Gemini AI Chat Preview]
![alt text](https://file%2B.vscode-resource.vscode-cdn.net/Users/user/Desktop/GeminiAIChat/Image%202025-06-19%20at%2012.17%E2%80%AFPM.jpg?version%3D1750335540121)

---

## 🧩 Project Structure

gemini-ai-chat/
├── index.html # Main HTML page
├── styles.css # CSS for styling the chat UI
├── script.js # Core JavaScript logic
└── README.md # Project documentation

---

## 🔐 Setup and API Key Usage

To use this app with your own Gemini API key:

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to generate an API key.
2. Replace the demo key in `script.js`:
   ```js
   const url =
     "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY_HERE";
   ```

Open index.html in your browser to start chatting.

⚠️ Note: For security, never expose API keys in public repos. Use environment variables or backend proxy in production.

💬 How It Works
When the user submits a message, it’s sent to the Gemini 1.5 Flash endpoint.

The AI's response is parsed and displayed in the chat window.

Messages are dynamically appended and the view scrolls to the latest message.

The input box auto-resizes based on message length for a smooth UX.

🔧 Potential Improvements
🔁 Add chat history persistence (LocalStorage or Firebase)

🤖 Support for multi-turn conversations (chat context)

🌙 Dark mode toggle

🌐 Host on GitHub Pages or Vercel

🔐 Move to backend for secure API key usage

🙌 Acknowledgements
Google Gemini API

MDN Web Docs

Open-source inspiration from ChatGPT and Bard-style UIs

📜 License
This project is licensed under the MIT License.

✨ Author
Developed by Your Nutsua Bless
