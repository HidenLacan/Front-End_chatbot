import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatBoxRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsLoading(true);

    try {
      const response = await axios.post('https://node-completition.onrender.com/api/chat', {
        message: input,
      });

      const botMessage = response.data.choices[0].message;
      setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error fetching bot response", error);
    } finally {
      setIsLoading(false);
    }

    setInput("");
  };

  useEffect(() => {
    chatBoxRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="max-w-3xl w-full mx-auto mt-10">
      <div className="chat-box h-96 overflow-y-auto border border-gray-300 rounded-lg p-4 bg-gray-50">
        {messages.map((msg, index) => (
          <p
            key={index}
            className={`p-2 my-2 rounded-lg ${
              msg.role === "user"
                ? "bg-blue-500 text-white text-right"
                : "bg-gray-200 text-black text-left"
            }`}
          >
            <strong>{msg.role === "user" ? "You" : "Bot"}:</strong> {msg.content}
          </p>
        ))}
        <div ref={chatBoxRef}></div>
      </div>

      {isLoading && <p className="text-center my-4 text-gray-500">Loading...</p>}

      <form onSubmit={handleSubmit} className="flex mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:border-blue-300"
          aria-label="Message input"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className={`p-3 rounded-r-lg bg-blue-500 text-white ${
            !input.trim() ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          }`}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
