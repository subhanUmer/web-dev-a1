// API services for external data

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
  try {
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
