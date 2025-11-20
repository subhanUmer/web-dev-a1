// API service for fetching CTF data
const CTF_TIME_API = "https://ctftime.org/api/v1/events/";

// Service for GitHub API
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

// Service for Hugging Face AI API (free tier)
export const queryAI = async (message) => {
  try {
    // Using Hugging Face Inference API (free tier)
    // You need to get an API key from https://huggingface.co/settings/tokens
    const API_TOKEN = "YOUR_HUGGING_FACE_API_TOKEN";

    const response = await fetch(
      "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to get AI response");
    }

    const data = await response.json();
    return (
      data[0]?.generated_text || "Sorry, I could not process that request."
    );
  } catch (error) {
    console.error("Error querying AI:", error);
    return "Sorry, the AI service is currently unavailable.";
  }
};

// Service for fetching tech news from DummyJSON
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
