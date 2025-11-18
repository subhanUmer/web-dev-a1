import PropTypes from "prop-types";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-cyber-darker border border-gray-700 rounded-lg overflow-hidden hover:border-cyber-green hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-cyber-blue text-lg font-bold mb-3">{post.title}</h3>
        <p className="text-gray-300 text-sm mb-4 flex-1">{post.description}</p>
        <a
          href="#"
          className="text-cyber-green font-bold hover:text-cyber-blue transition-colors inline-flex items-center gap-2"
        >
          Read more <span>→</span>
        </a>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogCard;
