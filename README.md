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
Home page screenshot: src/assets/images/Screenshot From 2025-11-20 23-29-01.png
News page screenshot: src/assets/images/Screenshot From 2025-11-20 23-29-09.png
CTF events page screenshot: src/assets/images/Screenshot From 2025-11-20 23-27-04.png
Reviews page screenshot: src/assets/images/Screenshot From 2025-11-20 23-29-18.png
Techniques page screenshot: src/assets/images/Screenshot From 2025-11-20 23-29-27.png
Blog page screenshot: src/assets/images/Screenshot From 2025-11-20 23-27-16.png
GitHub search page screenshot: src/assets/images/Screenshot From 2025-11-20 23-30-44.png
Contact form page screenshot: src/assets/images/Screenshot From 2025-11-20 23-31-00.png
Team group screenshot: src/assets/team/group.png
Contributor Subhan: src/assets/team/subhan.png
Contributor Ahmed: src/assets/team/ahmed.png
<img width="1913" height="961" alt="Screenshot From 2025-11-20 23-31-00" src="https://github.com/user-attachments/assets/d786b0b3-b917-4db2-8e16-613ac567c92f" />
<img width="1913" height="961" alt="Screenshot From 2025-11-20 23-30-44" src="https://github.com/user-attachments/assets/9e0c086b-23ff-41f8-ae79-a36a7dd006a8" />
<img width="1913" height="961" alt="Screenshot From 2025-11-20 23-29-27" src="https://github.com/user-attachments/assets/8a8e7937-1fd2-412d-b42c-418815eb25ca" />
<img width="1913" height="961" alt="Screenshot From 2025-11-20 23-29-18" src="https://github.com/user-attachments/assets/e628001a-1ddc-4190-8c6e-d281cb463750" />
<img width="1913" height="961" alt="Screenshot From 2025-11-20 23-29-09" src="https://github.com/user-attachments/assets/4b0796a7-6cbd-42d2-8e80-6f36d9db6fed" />
<img width="1913" height="961" alt="Screenshot From 2025-11-20 23-29-01" src="https://github.com/user-attachments/assets/16b1d841-e4c4-4bb7-b782-1fd649773201" />
<img width="1913" height="961" alt="Screenshot From 2025-11-20 23-27-16" src="https://github.com/user-attachments/assets/2b77a238-950e-4bb9-8107-0edbc91e507f" />
<img width="1913" height="961" alt="Screenshot From 2025-11-20 23-27-04" src="https://github.com/user-attachments/assets/88575ffb-2d58-41a4-afe1-179553431f5b" />

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
