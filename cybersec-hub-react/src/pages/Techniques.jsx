import { useState } from "react";
import TechniqueCard from "../components/TechniqueCard";
import techniquesData from "../data/techniques.json";

const Techniques = () => {
  const [techniques] = useState(techniquesData);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredTechniques =
    activeFilter === "all"
      ? techniques
      : techniques.filter((t) => t.type === activeFilter);

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <section className="bg-gradient-to-br from-cyber-darker to-cyber-gray py-12 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-cyber-green mb-4">
            Latest Techniques & Tools
          </h1>
          <p className="text-lg text-gray-300">
            Cutting-edge security techniques, tools, and research insights
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories Filter */}
        <div className="bg-cyber-darker border border-gray-700 rounded-lg p-4 mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-cyber-green font-bold mr-4">Categories:</span>
            {["all", "technique", "tool", "research", "exploit"].map(
              (filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    activeFilter === filter
                      ? "bg-cyber-green text-black"
                      : "bg-cyber-gray text-white hover:bg-gray-600"
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              )
            )}
          </div>
        </div>

        {/* Techniques List */}
        <div className="space-y-8">
          {filteredTechniques.map((technique) => (
            <TechniqueCard key={technique.id} technique={technique} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Techniques;
