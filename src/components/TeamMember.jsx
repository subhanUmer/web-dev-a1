import PropTypes from "prop-types";

const TeamMember = ({ member }) => {
  if (member.isLeader) {
    return (
  <div className="bg-light-card dark:bg-cyber-darker border border-light-border dark:border-gray-700 border-l-4 border-l-cyber-green rounded-lg p-8 hover:border-cyber-green transition-all duration-300">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="flex-shrink-0 w-56 h-56 rounded-xl overflow-hidden">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <span className="inline-block bg-black text-cyber-green px-3 py-1 rounded-full text-xs font-bold border border-gray-800 mb-2">
              {member.role}
            </span>
            <h3 className="text-light-text dark:text-white text-2xl font-bold mb-4">
              {member.name}
            </h3>

            <div className="flex flex-wrap gap-4 mb-4 justify-center md:justify-start text-sm text-green-300">
              {member.skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>

            <p className="text-light-subtle dark:text-gray-300 leading-relaxed">
              {member.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
  <div className="bg-light-card dark:bg-cyber-darker border border-light-border dark:border-gray-700 rounded-lg p-6 hover:border-cyber-green hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
      <div className="w-36 h-36 rounded-lg overflow-hidden mb-4">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      <span className="bg-gray-700 text-cyber-green px-3 py-1 rounded-full text-xs mb-3">
        {member.role}
      </span>

  <h3 className="text-light-text dark:text-white text-xl font-bold mb-4">{member.name}</h3>

  <p className="text-light-subtle dark:text-gray-300 text-sm leading-relaxed">
        {member.description}
      </p>
    </div>
  );
};

TeamMember.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
    isLeader: PropTypes.bool,
  }).isRequired,
};

export default TeamMember;
