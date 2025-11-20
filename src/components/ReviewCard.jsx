import PropTypes from "prop-types";

const ReviewCard = ({ review }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-500";
      case "intermediate":
        return "bg-yellow-500";
      case "expert":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={index < rating ? "text-yellow-500" : "text-gray-600"}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="bg-light-card dark:bg-cyber-darker border border-light-border dark:border-gray-700 rounded-lg p-6 hover:border-cyber-green hover:-translate-y-1 transition-all duration-300 flex flex-col min-w-[320px] max-w-[400px]">
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-cyber-blue text-lg font-bold flex-1">
          {review.title}
        </h4>
        <div className="flex gap-1 ml-4">{renderStars(review.rating)}</div>
      </div>

      <div className="flex justify-between items-center mb-4 text-xs">
        <span
          className={`${getDifficultyColor(
            review.difficulty
          )} text-white px-3 py-1 rounded-full font-bold uppercase`}
        >
          {review.difficulty}
        </span>
  <span className="text-light-muted dark:text-gray-500">{review.date}</span>
      </div>

  <p className="text-light-subtle dark:text-gray-300 mb-4 flex-1 leading-relaxed">
        {review.summary}
      </p>

      <div className="flex gap-2 flex-wrap mb-4">
        {review.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-light-pill dark:bg-gray-700 text-cyber-green px-2 py-1 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center mt-auto">
        <a
          href="#"
          className="bg-cyber-green text-black px-4 py-2 rounded font-bold text-sm hover:bg-opacity-80 transition-all"
        >
          Read More
        </a>
  <span className="text-light-muted dark:text-gray-500 text-xs">{review.stats}</span>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    difficulty: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    stats: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewCard;
