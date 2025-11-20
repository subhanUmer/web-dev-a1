import { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import AIChatBox from "../components/AIChatBox";
import headlinesData from "../data/headlines.json";
import ctfEventsData from "../data/ctfEvents.json";
import { fetchTechNews } from "../services/api";

const Home = () => {
  const [apiNews, setApiNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [headlines] = useState(headlinesData);
  const [featuredCTF] = useState(ctfEventsData[0]);

  useEffect(() => {
    const loadNews = async () => {
      try {
        setIsLoading(true);
        const news = await fetchTechNews();
        setApiNews(news.slice(0, 3));
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadNews();
  }, []);

  return (
    <div className="min-h-screen bg-light-bg dark:bg-cyber-dark text-light-text dark:text-white transition-colors">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-light-card to-light-border dark:from-cyber-darker dark:to-cyber-gray p-8 md:p-16 rounded-lg text-center border border-light-border dark:border-gray-700 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-cyber-green mb-4">
            Welcome to CyberSec Hub
          </h1>
          <p className="text-lg md:text-xl text-light-subtle dark:text-gray-300 max-w-2xl mx-auto">
            Your ultimate destination for CTF competitions, cybersecurity news,
            and cutting-edge techniques. Stay ahead in the world of ethical
            hacking and cyber defense.
          </p>
        </section>

        {/* Featured CTF */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-cyber-green mb-6 border-b-2 border-gray-700 pb-2">
            Featured CTF Event
          </h2>
          <div className="bg-light-card dark:bg-cyber-darker border border-light-border dark:border-gray-700 rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 w-full md:w-48 h-32 bg-gradient-to-br from-cyber-blue to-cyber-green rounded-lg flex items-center justify-center text-black font-bold text-lg">
                {featuredCTF.imageText}
              </div>
              <div className="flex-1">
                <h3 className="text-cyber-blue text-2xl font-bold mb-2">
                  {featuredCTF.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {featuredCTF.badge}
                  </span>
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    {featuredCTF.duration}
                  </span>
                  <span className="bg-cyber-green text-black px-3 py-1 rounded-full text-xs font-bold">
                    Team
                  </span>
                </div>
                <p className="text-light-subtle dark:text-gray-300 mb-4">{featuredCTF.description}</p>
                <p className="text-light-text dark:text-white">
                  <strong>Registration:</strong> Open until Dec 15, 2024
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Headlines */}
  <section className="mb-8">
          <h2 className="text-3xl font-bold text-cyber-green mb-6 border-b-2 border-gray-700 pb-2">
            Latest Headlines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {headlines.map((headline) => (
              <NewsCard key={headline.id} news={headline} />
            ))}
          </div>
        </section>

        {/* Video Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-cyber-green mb-6 border-b-2 border-gray-700 pb-2">
            Featured Video
          </h2>
          <div className="aspect-video bg-light-card dark:bg-gray-900 rounded-lg overflow-hidden border border-light-border dark:border-gray-700">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Cybersecurity Tutorial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* API News from DummyJSON */}
    <section className="mb-8">
          <h2 className="text-3xl font-bold text-cyber-green mb-6 border-b-2 border-gray-700 pb-2">
            Latest Tech News (From API)
          </h2>
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyber-green mx-auto"></div>
      <p className="mt-4 text-light-subtle dark:text-gray-400">Loading news...</p>
            </div>
          ) : error ? (
            <div className="bg-red-900 border border-red-700 rounded-lg p-6 text-center">
              <p className="text-white">Error loading news: {error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {apiNews.map((post) => (
                <NewsCard
                  key={post.id}
                  news={{
                    id: post.id,
                    title: post.title,
                    description: post.body.substring(0, 150) + "...",
                    date: `Posted by user ${post.userId}`,
                  }}
                />
              ))}
            </div>
          )}
        </section>

        {/* Quick Links */}
    <section>
          <h2 className="text-3xl font-bold text-cyber-green mb-6 border-b-2 border-gray-700 pb-2">
            Quick Navigation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="/news"
      className="bg-gradient-to-br from-light-card to-light-border dark:from-cyber-darker dark:to-cyber-gray border-2 border-light-border dark:border-gray-700 rounded-lg p-8 text-center hover:border-cyber-green hover:scale-105 transition-all"
            >
              <div className="text-5xl mb-4">📰</div>
              <h4 className="text-cyber-blue text-xl font-bold mb-2">
                CTF News
              </h4>
      <p className="text-light-subtle dark:text-gray-300">Latest competitions and updates</p>
            </a>
            <a
              href="/reviews"
      className="bg-gradient-to-br from-light-card to-light-border dark:from-cyber-darker dark:to-cyber-gray border-2 border-light-border dark:border-gray-700 rounded-lg p-8 text-center hover:border-cyber-green hover:scale-105 transition-all"
            >
              <div className="text-5xl mb-4">⭐</div>
              <h4 className="text-cyber-blue text-xl font-bold mb-2">
                Reviews
              </h4>
      <p className="text-light-subtle dark:text-gray-300">
                Detailed CTF write-ups and analysis
              </p>
            </a>
            <a
              href="/techniques"
      className="bg-gradient-to-br from-light-card to-light-border dark:from-cyber-darker dark:to-cyber-gray border-2 border-light-border dark:border-gray-700 rounded-lg p-8 text-center hover:border-cyber-green hover:scale-105 transition-all"
            >
              <div className="text-5xl mb-4">🔧</div>
              <h4 className="text-cyber-blue text-xl font-bold mb-2">
                Techniques
              </h4>
      <p className="text-light-subtle dark:text-gray-300">New tools and methodologies</p>
            </a>
            <a
              href="/about"
      className="bg-gradient-to-br from-light-card to-light-border dark:from-cyber-darker dark:to-cyber-gray border-2 border-light-border dark:border-gray-700 rounded-lg p-8 text-center hover:border-cyber-green hover:scale-105 transition-all"
            >
              <div className="text-5xl mb-4">ℹ️</div>
              <h4 className="text-cyber-blue text-xl font-bold mb-2">About</h4>
      <p className="text-light-subtle dark:text-gray-300">Contact and information</p>
            </a>
          </div>
        </section>
      </main>

  {/* AI Chat Box */}
  <AIChatBox />
    </div>
  );
};

export default Home;
