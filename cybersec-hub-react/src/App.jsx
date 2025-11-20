import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import Reviews from "./pages/Reviews";
import Techniques from "./pages/Techniques";
import Blog from "./pages/Blog";
import About from "./pages/About";
import GitHubSearch from "./pages/GitHubSearch";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-cyber-dark dark:bg-cyber-dark bg-light-bg transition-colors duration-300">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/techniques" element={<Techniques />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/github-search" element={<GitHubSearch />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
