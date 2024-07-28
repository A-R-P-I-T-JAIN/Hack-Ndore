import React, { useState } from 'react';
import './ChatBox.css'; // Add styles here

const simulatedResponses = [
  "Sure, I can help with that.",
  "Let me look into that for you.",
  "Can you provide more details?",
  "That's an interesting question!"
];

const ChatBox = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { message: "Hello, I'm Chatbot! Ask me anything.", sender: "ChatGPT" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage = { message, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsTyping(true);

    // Simulate response
    setTimeout(() => {
      const randomResponse = simulatedResponses[Math.floor(Math.random() * simulatedResponses.length)];
      setMessages((prevMessages) => [...prevMessages, { message: randomResponse, sender: "ChatGPT" }]);
      setIsTyping(false);
    }, 1000);

    setMessage("");
  };

  return (
    <div className="chatbox-container ">
      <button className="close-btn" onClick={onClose}>X</button>
      <div className="messages-container">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender === 'ChatGPT' ? 'chatgpt-message' : 'user-message'}`}>
            {msg.message}
          </div>
        ))}
        {isTyping && <div className="typing-indicator">Chatbot is typing...</div>}
      </div>
      <div className="input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleSend();
          }}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
