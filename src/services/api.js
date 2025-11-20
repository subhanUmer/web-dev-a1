import axios from 'axios';

// GitHub user search
export const searchGitHubUsers = async (username) => {
  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${username}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch GitHub users");
    }
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error;
  }
};

// AI chatbot service
export const queryAI = async (message) => {
  const token = import.meta.env.VITE_HF_TOKEN; // read from .env
  const endpoint = 'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium';

  // Provide quick deterministic mock if token absent or still placeholder
  if (!token || token.trim() === '' || token.includes('YOUR_')) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple mock responses based on keywords
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("ctf") || lowerMessage.includes("capture the flag")) {
      return "CTFs (Capture The Flag) are cybersecurity competitions where participants solve security challenges. They're great for learning hacking techniques, cryptography, reverse engineering, and more!";
    } else if (lowerMessage.includes("sql injection") || lowerMessage.includes("sqli")) {
      return "SQL injection is a web security vulnerability that allows attackers to interfere with database queries. Always use parameterized queries and input validation to prevent it!";
    } else if (lowerMessage.includes("xss") || lowerMessage.includes("cross-site scripting")) {
      return "Cross-Site Scripting (XSS) allows attackers to inject malicious scripts into web pages. Prevent it by sanitizing user input and using Content Security Policy (CSP) headers.";
    } else if (lowerMessage.includes("password") || lowerMessage.includes("hash")) {
      return "Always use strong hashing algorithms like bcrypt or Argon2 for passwords. Never store passwords in plain text, and use salt to prevent rainbow table attacks!";
    } else {
      return "That's an interesting question! For full AI responses, please configure a Hugging Face API token in src/services/api.js. In the meantime, ask me about CTFs, SQL injection, XSS, or password security!";
    }
  }

  try {
    const res = await axios.post(
      endpoint,
      { inputs: message },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    // Hugging Face conversation models often return generated_text or an array
    if (Array.isArray(res.data) && res.data.length && res.data[0].generated_text) {
      return res.data[0].generated_text;
    }
    if (res.data.generated_text) return res.data.generated_text;
    return JSON.stringify(res.data).slice(0, 400);
  } catch (error) {
    console.error("Error querying AI:", error);
    return "Sorry, the AI service is currently unavailable.";
  }
};

// Tech news fetching service
export const fetchTechNews = async () => {
  try {
    const response = await fetch("https://dummyjson.com/posts?limit=10");
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }
    const data = await response.json();
    return data.posts || [];
  } catch (error) {
    console.error("Error fetching tech news:", error);
    throw error;
  }
};

export default {
  searchGitHubUsers,
  queryAI,
  fetchTechNews,
};
