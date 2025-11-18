import { useState } from "react";
import GitHubUserCard from "../components/GitHubUserCard";
import { searchGitHubUsers } from "../services/api";

const GitHubSearch = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setIsLoading(true);
    setError(null);
    setUsers([]);

    try {
      const results = await searchGitHubUsers(username);
      setUsers(results);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <section className="bg-gradient-to-br from-cyber-darker to-cyber-gray py-12 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-cyber-green mb-4">
            GitHub User Search
          </h1>
          <p className="text-lg text-gray-300">
            Search for GitHub users and view their profiles
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Form */}
        <div className="bg-cyber-darker border border-gray-700 rounded-lg p-8 mb-8">
          <form
            onSubmit={handleSearch}
            className="flex flex-col md:flex-row gap-4"
          >
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter GitHub username..."
              className="flex-1 bg-gray-700 text-white border border-gray-600 rounded px-6 py-3 focus:outline-none focus:border-cyber-green text-lg"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-cyber-green text-black px-8 py-3 rounded-lg font-bold hover:bg-opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Searching..." : "Search"}
            </button>
          </form>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyber-green mx-auto"></div>
            <p className="mt-4 text-gray-400">Searching GitHub users...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-900 border border-red-700 rounded-lg p-6 text-center">
            <p className="text-white text-lg">Error: {error}</p>
          </div>
        )}

        {/* Results */}
        {!isLoading && !error && users.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-cyber-green mb-6">
              Found {users.length} user{users.length !== 1 ? "s" : ""}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map((user) => (
                <GitHubUserCard key={user.id} user={user} />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {!isLoading && !error && users.length === 0 && username && (
          <div className="text-center py-12 text-gray-400">
            <p className="text-xl">No users found for "{username}"</p>
          </div>
        )}

        {/* Initial State */}
        {!isLoading && !error && users.length === 0 && !username && (
          <div className="text-center py-12 text-gray-400">
            <p className="text-xl">
              Enter a username to search for GitHub users
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default GitHubSearch;
