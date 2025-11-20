import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Properly add or remove the dark class
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="bg-light-card dark:bg-cyber-darker border-b-2 border-cyber-green transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            to="/"
            className="text-2xl font-bold text-cyber-green hover:opacity-80 transition-opacity"
          >
            CyberSec Hub
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-light-text dark:text-white hover:text-cyber-green transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/news"
              className="text-light-text dark:text-white hover:text-cyber-green hover:bg-light-border dark:hover:bg-cyber-gray px-4 py-2 rounded transition-all"
            >
              CTF News
            </Link>
            <Link
              to="/reviews"
              className="text-light-text dark:text-white hover:text-cyber-green hover:bg-light-border dark:hover:bg-cyber-gray px-4 py-2 rounded transition-all"
            >
              Reviews
            </Link>
            <Link
              to="/techniques"
              className="text-light-text dark:text-white hover:text-cyber-green hover:bg-light-border dark:hover:bg-cyber-gray px-4 py-2 rounded transition-all"
            >
              Techniques
            </Link>
            <Link
              to="/blog"
              className="text-light-text dark:text-white hover:text-cyber-green hover:bg-light-border dark:hover:bg-cyber-gray px-4 py-2 rounded transition-all"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="text-light-text dark:text-white hover:text-cyber-green hover:bg-light-border dark:hover:bg-cyber-gray px-4 py-2 rounded transition-all"
            >
              About
            </Link>
            <Link
              to="/github-search"
              className="text-light-text dark:text-white hover:text-cyber-green hover:bg-light-border dark:hover:bg-cyber-gray px-4 py-2 rounded transition-all"
            >
              GitHub Search
            </Link>
            <button
              onClick={toggleTheme}
              className="text-light-text dark:text-white hover:text-cyber-green transition-colors p-2 text-2xl"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            <Link
              to="/news"
              className="text-light-text dark:text-white hover:text-cyber-green hover:bg-light-border dark:hover:bg-cyber-gray px-4 py-2 rounded transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              CTF News
            </Link>
            <Link
              to="/reviews"
              className="text-light-text dark:text-white hover:text-cyber-green hover:bg-light-border dark:hover:bg-cyber-gray px-4 py-2 rounded transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link
              to="/techniques"
              className="text-light-text dark:text-white hover:text-cyber-green hover:bg-light-border dark:hover:bg-cyber-gray px-4 py-2 rounded transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Techniques
            </Link>
            <Link
              to="/blog"
              className="text-light-text dark:text-white hover:text-cyber-green hover:bg-light-border dark:hover:bg-cyber-gray px-4 py-2 rounded transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="text-light-text dark:text-white hover:text-cyber-green hover:bg-light-border dark:hover:bg-cyber-gray px-4 py-2 rounded transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/github-search"
              className="text-light-text dark:text-white hover:text-cyber-green hover:bg-light-border dark:hover:bg-cyber-gray px-4 py-2 rounded transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              GitHub Search
            </Link>
            <button
              onClick={toggleTheme}
              className="text-light-text dark:text-white hover:text-cyber-green px-4 py-2 text-left transition-colors"
            >
              {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
