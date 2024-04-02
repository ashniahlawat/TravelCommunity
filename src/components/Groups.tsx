import React, { useState, useEffect } from "react";
import "./GroupChat.css"; // Import CSS file for styling

interface Message {
  text: string;
  sender: string;
  time: string;
  media?: string;
}

function GroupChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [media, setMedia] = useState<File | null>(null);
  const [mediaText, setMediaText] = useState<string>("");

  const simulateOtherUserMessages = () => {
    const users = ["Arjun Sharma", "Fatima Siddiqui", "Mary Ann D'Souza"];
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const fakeTexts = [
      "Hey, let's travel somewhere!",
      "What do you think about going hiking this weekend?",
      "I just found this amazing restaurant, we should check it out!",
      "Have you seen the latest travel itinerary?",
      "How was your day?",
    ];

    const newMessage: Message = {
      text: fakeTexts[Math.floor(Math.random() * fakeTexts.length)],
      sender: randomUser,
      time: new Date().toLocaleString(),
    };
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    const interval = setInterval(simulateOtherUserMessages, 5000);
    return () => clearInterval(interval);
  }, [messages]);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== "" || media) {
      const newMessage: Message = {
        text: input,
        sender: "User",
        time: new Date().toLocaleString(),
        media: media ? URL.createObjectURL(media) : undefined,
      };
      setMessages([...messages, newMessage]);
      setInput("");
      setMedia(null);
      setMediaText(""); // Reset media text
    }
  };

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setMedia(file);
      setMediaText(file.name); // Set media text to filename
    }
  };

  return (
    <div className="group-chat-container">
      <div className="chat-window">
        <h2 style={{ color: "brown", textAlign: "center", marginTop: "10px" }}>
          Adventure Enthusiasts
        </h2>
        <div className="messages-container">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`messagez ${
                message.sender === "User" ? "own-message" : "other-message"
              }`}
            >
              <div>
                <strong>{message.sender}: </strong>
                {message.text}
              </div>
              {message.media && (
                <div className="message-media">
                  <img src={message.media} alt="Media" />
                </div>
              )}
              <div className="message-time">{message.time}</div>
            </div>
          ))}
        </div>
        <form onSubmit={handleMessageSubmit} className="input-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          {mediaText && <span className="attached-media">{mediaText}</span>}
          <label htmlFor="media-upload" className="file-upload-label">
            <span>Attach Image/Video</span>
            <input
              id="media-upload"
              type="file"
              accept="image/*,video/*"
              onChange={handleMediaChange}
            />
          </label>
          <button id="send" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default GroupChat;
