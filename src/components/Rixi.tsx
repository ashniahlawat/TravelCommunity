import React, { useState, useEffect, useRef } from "react";
import "./rixi.css"; // Import CSS file for styling

function ChatbotPrototype() {
  const [messages, setMessages] = useState<
    { text: string; sender: string; timestamp: string }[]
  >([]);
  const [input, setInput] = useState<string>("");
  const chatLogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom of the chat log when new messages are added
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    // Initial bot message when component mounts
    const initialBotMessage = {
      text: "Hi there! I'm Rixi, your travel companion. How can I assist you today?",
      sender: "Chatbot",
      timestamp: new Date().toLocaleString(),
    };
    setMessages([initialBotMessage]);
  }, []);

  const sendMessage = () => {
    if (input.trim() !== "") {
      const userMessage = {
        text: input,
        sender: "User",
        timestamp: new Date().toLocaleString(),
      };
      setMessages([...messages, userMessage]);
      setInput("");
      // Simulate bot response (replace with actual bot logic)
      setTimeout(() => {
        const botResponse = generateBotResponse(input);
        setMessages([...messages, userMessage, botResponse]); // Keep the user's message in the chat window
      }, 1000);
    }
  };

  const generateBotResponse = (input: string) => {
    // Example: Generate random bot responses based on user input
    const responses = [
      "Great choice! Let me find some amazing destinations for you.",
      "I see! How about exploring some off-the-beaten-path locations?",
      "That sounds interesting! Have you considered any specific activities?",
      "Got it! Let me provide you with some recommendations.",
      "Awesome! Let me assist you with your travel plans.",
    ];
    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];
    return {
      text: randomResponse,
      sender: "Chatbot",
      timestamp: new Date().toLocaleString(),
    };
  };

  return (
    <div className="video-container">
      <video autoPlay muted loop id="video-background">
        <source
          src="https://videos.pexels.com/video-files/2169880/2169880-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>

      <div className="chatbot-container">
        <div className="chat-header">
          <h1>Rixi - Your Travel Companion</h1>
        </div>
        <div className="chat-log">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              <div className="message-text">
                <span>{message.text}</span>
                <span className="message-timestamp">{message.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatbotPrototype;
