import { useState } from "react";
import ReviewCard from "../components/ReviewCard";
import reviewsData from "../data/reviews.json";

const Reviews = () => {
  const [reviews] = useState(reviewsData);
  const [featured] = useState({
    title: "DEF CON 32 CTF - Complete Analysis",
    date: "August 12, 2024",
    duration: "48 hours",
    teams: "485 teams",
    rating: "4.9/5",
    description:
      "An comprehensive analysis of DEF CON 32's flagship CTF competition. This year brought unprecedented challenges in AI security, quantum cryptography, and advanced persistent threats. Team Phoenix's victory showcased innovative techniques in memory corruption and side-channel attacks.",
  });

  return (
    <div className="min-h-screen bg-light-bg dark:bg-cyber-dark text-light-text dark:text-white transition-colors">
      <section className="bg-gradient-to-br from-light-card to-light-border dark:from-cyber-darker dark:to-cyber-gray py-12 border-b border-light-border dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-cyber-green mb-4">
            CTF Reviews & Write-ups
          </h1>
          <p className="text-lg text-light-subtle dark:text-gray-300">
            In-depth analysis and reviews of concluded CTF competitions
          </p>
        </div>
      </section>

  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Review */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-cyber-green mb-6 border-b-2 border-gray-700 pb-2">
            Featured Review
          </h2>
      <div className="bg-gradient-to-br from-light-card to-light-border dark:from-cyber-darker dark:to-cyber-gray border-2 border-light-border dark:border-gray-700 rounded-xl p-8 hover:border-cyber-green transition-all">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0 w-full md:w-80 h-52 bg-gradient-to-br from-cyber-blue to-cyber-green rounded-lg flex items-center justify-center text-black font-bold text-2xl">
                DEF CON 32
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <h3 className="text-cyber-blue text-3xl font-bold">
                    {featured.title}
                  </h3>
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    EXPERT
                  </span>
                </div>
        <div className="flex flex-wrap gap-6 text-light-subtle dark:text-gray-300 mb-4">
                  <span>📅 {featured.date}</span>
                  <span>⏱️ {featured.duration}</span>
                  <span>👥 {featured.teams}</span>
                  <span>⭐ {featured.rating}</span>
                </div>
        <p className="text-light-subtle dark:text-gray-300 text-lg leading-relaxed mb-6">
                  {featured.description}
                </p>
                <div className="flex gap-4 flex-wrap">
                  <button className="bg-cyber-green text-black px-8 py-3 rounded-lg font-bold hover:bg-opacity-80 transition-all">
                    Read Full Review
                  </button>
                  <button className="bg-gray-700 text-white border border-gray-600 px-8 py-3 rounded-lg hover:border-cyber-green transition-all">
                    View Challenges
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Reviews */}
  <section>
          <h2 className="text-3xl font-bold text-cyber-green mb-6 border-b-2 border-gray-700 pb-2">
            Recent Reviews
          </h2>
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Reviews;
