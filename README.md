CyberSec Hub Enhanced React Version

Overview
This is a simple React conversion of a cybersecurity and CTF information site. It includes pages for home, news, reviews, techniques, blog, about, and GitHub user search. It also has a theme toggle, an AI assistant, and a contact form stored in Firebase.

Tech Stack
React with Vite
Tailwind CSS version 4
React Router
Firebase Firestore
GitHub public REST API
DummyJSON posts API
Hugging Face inference API

Setup Steps
1. Install Node.js 18 or newer.
2. Clone the repository.
3. Run npm install.
4. Create a file named .env and add the line VITE_HF_TOKEN=hf_your_token_here.
5. Optionally add Firebase keys as VITE_FIREBASE_API_KEY and related values in firebase.js.
6. Run npm run dev and open the local development URL printed by Vite.

Build
Run npm run build then npm run preview to view the production build locally.

Environment Variables
VITE_HF_TOKEN is required for real AI responses. If missing, the app returns mock answers.
Add Firebase values in src/services/firebase.js or expose them as VITE_ variables.

APIs
Hugging Face model: microsoft/DialoGPT-medium endpoint https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium
GitHub user search: https://api.github.com/search/users?q=query+repos:%3E0+followers:%3E0
DummyJSON posts: https://dummyjson.com/posts?limit=6

Features
Theme toggle with local storage persistence
AI chat assistant with fallback mock replies
GitHub user search cards
CTF events listing with filters
Reviews and blog post grids
Techniques with category filter and optional code snippet
Contact form stored in Firestore

Theming
Uses a dark class on html to switch palettes. Light and dark color tokens defined in index.css. Components use paired classes for background and text.

Contribution Log
Basic React conversion was done by Subhan Umer
API integration was done by Ahmed Bhatti
Other enhancements including theming, Firebase form, polish and AI fallback were done by Shameer

Screenshots
Home page screenshot: src/assets/images/dictionary_attack.webp
News page screenshot: src/assets/images/reverse.png
Techniques page screenshot: src/assets/images/sqlinjection.png
Team group screenshot: src/assets/team/group.png
Contributor Subhan: src/assets/team/subhan.png
Contributor Ahmed: src/assets/team/ahmed.png
Contributor Shameer: src/assets/team/shameer.png

Deployment
Deploy on a static hosting service like Vercel or Netlify. Set environment variables in the platform UI. Use dist as output after running npm run build.

Future Improvements
Add tests
Add streaming AI responses
Add authentication
Replace dummy data with live feeds

License
For academic and internal use.

End of README
