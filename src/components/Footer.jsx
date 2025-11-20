const Footer = () => {
  return (
  <footer className="bg-light-card dark:bg-cyber-darker border-t-2 border-cyber-green mt-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-light-text dark:text-white text-center md:text-left">
            &copy; 2024 CyberSec Hub. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-light-pill dark:bg-cyber-gray rounded-full flex items-center justify-center text-cyber-green hover:bg-cyber-green hover:text-black transition-all"
              aria-label="Twitter"
            >
              T
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-light-pill dark:bg-cyber-gray rounded-full flex items-center justify-center text-cyber-green hover:bg-cyber-green hover:text-black transition-all"
              aria-label="GitHub"
            >
              G
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-light-pill dark:bg-cyber-gray rounded-full flex items-center justify-center text-cyber-green hover:bg-cyber-green hover:text-black transition-all"
              aria-label="LinkedIn"
            >
              L
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-light-pill dark:bg-cyber-gray rounded-full flex items-center justify-center text-cyber-green hover:bg-cyber-green hover:text-black transition-all"
              aria-label="Discord"
            >
              D
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
