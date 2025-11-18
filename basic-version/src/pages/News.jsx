import { useState } from "react";
import CTFCard from "../components/CTFCard";
import ctfEventsData from "../data/ctfEvents.json";

const News = () => {
  const [events] = useState(ctfEventsData);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredEvents = events.filter((event) => {
    const matchesFilter = filter === "all" || event.status === filter;
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <section className="bg-gradient-to-br from-cyber-darker to-cyber-gray py-12 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-cyber-green mb-4">
            Latest CTF Competitions
          </h1>
          <p className="text-lg text-gray-300">
            Stay updated with the latest Capture The Flag competitions worldwide
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="mb-8">
          <div className="bg-cyber-darker border border-gray-700 rounded-lg p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search CTF events..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-gray-700 text-white border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-cyber-green"
              />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-gray-700 text-white border border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-cyber-green"
              >
                <option value="all">All Events</option>
                <option value="live">Live Now</option>
                <option value="upcoming">Upcoming</option>
                <option value="ended">Ended</option>
              </select>
            </div>
          </div>

          <div className="text-gray-400 mb-4">
            Showing {filteredEvents.length} CTF competition
            {filteredEvents.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* CTF Events */}
        <div className="space-y-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <CTFCard key={event.id} event={event} />
            ))
          ) : (
            <div className="text-center py-12 text-gray-400">
              No events found matching your criteria.
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default News;
