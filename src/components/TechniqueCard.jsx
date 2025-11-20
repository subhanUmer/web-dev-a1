import PropTypes from "prop-types";

const TechniqueCard = ({ technique }) => {
  const getTypeColor = (type) => {
    switch (type) {
      case "technique":
        return "bg-orange-500";
      case "tool":
        return "bg-teal-500";
      case "research":
        return "bg-blue-500";
      case "exploit":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-light-card dark:bg-cyber-darker border border-light-border dark:border-gray-700 rounded-lg p-8 hover:border-cyber-green hover:-translate-y-1 transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-cyber-blue to-cyber-green rounded-lg flex items-center justify-center text-4xl">
          {technique.icon}
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <h2 className="text-cyber-blue text-xl font-bold">
              {technique.title}
            </h2>
            <span
              className={`${getTypeColor(
                technique.type
              )} text-white px-4 py-1 rounded-full text-xs font-bold uppercase`}
            >
              {technique.type}
            </span>
          </div>

          <div className="flex flex-wrap gap-4 text-light-subtle dark:text-gray-300 text-sm mb-4">
            <div className="flex items-center gap-1">
              <span>📅</span>
              <span>{technique.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>👤</span>
              <span>{technique.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>⏱️</span>
              <span>{technique.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-bold">{technique.badge}</span>
            </div>
          </div>

          <p className="text-light-subtle dark:text-gray-300 mb-4 leading-relaxed">
            {technique.description}
          </p>

          {technique.codePreview && (
            <div className="bg-light-code dark:bg-black border border-light-border dark:border-gray-700 rounded p-4 mb-4 overflow-x-auto">
              <pre className="text-cyber-green text-sm font-mono whitespace-pre-wrap">
                {technique.codePreview}
              </pre>
            </div>
          )}

          <div className="flex gap-2 flex-wrap mb-4">
            {technique.tags.map((tag, index) => (
              <span
                  key={index}
                  className="bg-light-pill dark:bg-gray-700 text-cyber-green px-3 py-1 rounded-full text-xs"
                >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-cyber-green text-black px-6 py-2 rounded font-bold hover:bg-opacity-80 transition-all">
              Read Full Article
            </button>
            <button className="bg-gray-700 text-white border border-gray-600 px-6 py-2 rounded hover:border-cyber-green transition-all">
              {technique.type === "tool" ? "GitHub Repo" : "Download PoC"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

TechniqueCard.propTypes = {
  technique: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
    badge: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    codePreview: PropTypes.string,
  }).isRequired,
};

export default TechniqueCard;
