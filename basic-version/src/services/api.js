// API service placeholders
// Add your API integrations here

// GitHub user search
export const searchGitHubUsers = async (username) => {
  console.log("GitHub API not configured");
  return [];
};

// AI chat service
export const queryAI = async (message) => {
  return "AI service not configured yet.";
};

// Tech news service
export const fetchTechNews = async () => {
  console.log("News API not configured");
  return [];
};

export default {
  searchGitHubUsers,
  queryAI,
  fetchTechNews,
};
