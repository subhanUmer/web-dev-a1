import { useState } from "react";
import { queryAI } from "../services/api";

const AIChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hello! I'm your CyberSec AI assistant. Ask me anything about cybersecurity, CTFs, or hacking techniques!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await queryAI(userMessage);
      setMessages((prev) => [...prev, { role: "ai", text: response }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Sorry, I encountered an error. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-cyber-green text-black p-4 rounded-full shadow-lg hover:bg-opacity-80 transition-all flex items-center gap-2 font-bold"
        >
          <span className="text-2xl">🤖</span>
          <span className="hidden sm:inline">Ask AI</span>
        </button>
      ) : (
        <div
          className="bg-light-card dark:bg-cyber-darker border-2 border-cyber-green rounded-lg shadow-2xl w-96 max-w-[calc(100vw-2rem)] flex flex-col"
          style={{ height: "500px" }}
        >
          {/* Header */}
          <div className="bg-cyber-green text-black p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              <span className="font-bold">CyberSec AI Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-gray-700 font-bold text-xl"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-cyber-blue text-white"
                      : "bg-light-pill dark:bg-gray-700 text-light-text dark:text-gray-100"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-light-pill dark:bg-gray-700 text-light-text dark:text-gray-100 p-3 rounded-lg">
                  <span className="animate-pulse">Thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
      <div className="border-t border-light-border dark:border-gray-700 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about cybersecurity..."
        className="flex-1 bg-light-input dark:bg-gray-700 text-light-text dark:text-white border border-light-border dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-cyber-green"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-cyber-green text-black px-6 py-2 rounded font-bold hover:bg-opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatBox;
