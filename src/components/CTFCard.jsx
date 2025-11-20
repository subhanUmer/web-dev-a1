import PropTypes from "prop-types";

const CTFCard = ({ event }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "live":
        return "bg-red-500";
      case "upcoming":
        return "bg-yellow-500";
      case "ended":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-light-card dark:bg-cyber-darker border border-light-border dark:border-gray-700 rounded-lg p-6 hover:border-cyber-green hover:-translate-y-1 transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 w-full md:w-32 h-20 bg-gradient-to-br from-cyber-blue to-cyber-green rounded-lg flex items-center justify-center text-black font-bold text-sm">
          {event.imageText}
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <h3 className="text-cyber-blue text-xl font-bold">{event.title}</h3>
            <div className="flex gap-2 flex-wrap">
              <span
                className={`${getStatusColor(
                  event.status
                )} text-white px-3 py-1 rounded-full text-xs font-bold`}
              >
                {event.badge}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-light-subtle dark:text-gray-300 text-sm mb-4">
            <div className="flex items-center gap-1">
              <span>📅</span>
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>👥</span>
              <span>{event.teamSize}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>🏆</span>
              <span>{event.prize}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>⭐</span>
              <span>{event.rating}/5</span>
            </div>
          </div>

          <p className="text-light-subtle dark:text-gray-300 mb-4">{event.description}</p>

          <div className="flex gap-2 flex-wrap mb-4">
            {event.categories.map((category, index) => (
              <span
                  key={index}
                  className="bg-light-pill dark:bg-gray-700 text-cyber-green px-3 py-1 rounded-full text-xs"
                >
                {category}
              </span>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-cyber-green text-black px-6 py-2 rounded font-bold hover:bg-opacity-80 transition-all">
              {event.status === "ended" ? "View Results" : "Join Competition"}
            </button>
            <button className="bg-gray-700 text-white border border-gray-600 px-6 py-2 rounded hover:border-cyber-green transition-all">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CTFCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    badge: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    teamSize: PropTypes.string.isRequired,
    prize: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageText: PropTypes.string.isRequired,
  }).isRequired,
};

export default CTFCard;
