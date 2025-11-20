import PropTypes from "prop-types";

const NewsCard = ({ news }) => {
  return (
    <div className="bg-cyber-darker border border-gray-700 rounded-lg p-6 hover:border-cyber-green hover:-translate-y-1 transition-all duration-300">
      <h4 className="text-cyber-blue text-lg font-bold mb-3">{news.title}</h4>
      <p className="text-gray-300 text-sm mb-4">{news.description}</p>
      <div className="text-gray-500 text-xs">{news.date}</div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsCard;
