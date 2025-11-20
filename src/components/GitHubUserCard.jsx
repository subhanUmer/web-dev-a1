import PropTypes from "prop-types";

const GitHubUserCard = ({ user }) => {
  return (
    <div className="bg-light-card dark:bg-cyber-darker border border-light-border dark:border-gray-700 rounded-lg p-6 hover:border-cyber-green hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-4">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-20 h-20 rounded-full border-2 border-cyber-green"
        />
        <div className="flex-1">
          <h3 className="text-light-text dark:text-white text-xl font-bold mb-1">{user.login}</h3>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-green hover:text-cyber-blue transition-colors text-sm"
          >
            View Profile →
          </a>
        </div>
      </div>
    </div>
  );
};

GitHubUserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default GitHubUserCard;
