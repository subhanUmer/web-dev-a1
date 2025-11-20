# CyberSec Hub (Enhanced React Version)

Modern React conversion of a multi-page cybersecurity & CTF information site. Provides dynamic content, API integrations, theme switching, Firebase persistence, and an AI assistant.

## 1. Overview
CyberSec Hub centralizes Capture The Flag (CTF) events, reviews, techniques, blog posts, team info, GitHub user search, and an AI helper for quick security answers. Light/Dark themes are fully supported.

## 2. Tech Stack
| Area | Choice |
|------|--------|
| Framework | React + Vite |
| Styling | Tailwind CSS v4 (CSS @theme) |
| State | React hooks |
| Routing | react-router-dom |
| Data/API | GitHub REST, DummyJSON posts, Hugging Face Inference |
| Persistence | Firebase Firestore (contact form) |
| AI Assistant | Hugging Face DialoGPT-medium (mock fallback) |

## 3. Setup
### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
git clone <repo-url>
cd web-dev-a1
npm install
```

### Environment Variables
Create `.env` (not committed):
```
VITE_HF_TOKEN=hf_your_token_here
VITE_FIREBASE_API_KEY=<firebase-key>
```
Only `VITE_HF_TOKEN` is required for real AI responses. Without it, mock keyword answers are returned.

### Development
```bash
npm run dev
```
Open http://localhost:5173.

### Production Build
```bash
npm run build
npm run preview
```

## 4. Folder Structure
```
src/
	components/    # Reusable UI (cards, header, footer, AI chat)
	pages/         # Route pages (Home, News, Reviews, Techniques, Blog, About, GitHubSearch)
	data/          # Static JSON seed data
	services/      # API and Firebase abstraction
	assets/        # Images
```

## 5. Key Features
| Feature | Description |
|---------|-------------|
| Theme Toggle | Persists user preference via localStorage, light & dark palette. |
| AI Chat | Sends user prompts to DialoGPT model (or mock) and displays streamed answers. |
| GitHub Search | Queries users via GitHub public API (no auth) with basic filtering. |
| Tech News | Uses DummyJSON posts as stand-in feed for external data integration. |
| CTF Events | Interactive filtering & searching across event metadata. |
| Reviews & Blog | Card grids rendering static JSON content. |
| Techniques | Category chips + optional code preview blocks. |
| Contact Form | Writes submissions to Firestore collection `contacts`. |

## 6. API Integration Details
### Hugging Face
Endpoint: `https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium`

Headers:
```
Authorization: Bearer <VITE_HF_TOKEN>
Content-Type: application/json
```
Request body:
```json
{ "inputs": "Your prompt text" }
```
Response parsing checks `generated_text` or returns raw JSON snippet.

### GitHub User Search
Endpoint: `GET https://api.github.com/search/users?q=<query>+repos:%3E0+followers:%3E0`
Lightweight user cards display avatar, login, profile link.

### DummyJSON Posts
Endpoint: `GET https://dummyjson.com/posts?limit=6`
Mapped to headline cards as sample external feed.

## 7. Firebase (Firestore)
Configured in `src/services/firebase.js`. Replace config object with your values. Data stored in `contacts` collection with timestamp.

## 8. Theming
Tailwind v4 CSS uses `@theme` variables in `index.css`. Root `<html>` toggles `dark` class. Light tokens: `--color-light-*`; dark tokens: `--color-cyber-*`. Components use dual classes: `bg-light-card dark:bg-cyber-darker`, etc.

## 9. Contribution Log
- Basic React conversion (initial scaffolding, routing, base components): Subhan Umer
- API integrations (GitHub search, Hugging Face AI service, news feed logic): Ahmed Bhatti
- Advanced enhancements (theming refinements, Firebase form, UI polish, AI fallback): Shameer

## 10. Screenshots (placeholders)
Add actual images to `src/assets/screenshots/` and reference them here:
```
![Home](src/assets/screenshots/home.png)
![AI Chat](src/assets/screenshots/ai-chat.png)
```

## 11. Deployment
Recommended: Vercel or Netlify.
Build command: `npm run build`
Output directory: `dist`
Ensure environment variables set in the hosting platform dashboard (VITE_*).

## 12. Testing (Future Work)
Potential additions:
- Unit tests for `queryAI` mock vs real.
- Snapshot tests for themed components.
- Integration test for form submission with Firestore emulator.

## 13. Future Improvements
- Chat streaming & token usage display.
- User authentication (private dashboards).
- CTF event data from real API.
- Markdown rendering for blog content.

## 14. License
Internal academic/assignment use. Add a formal license if publishing publicly.

---
Maintained to showcase clear project structure, environment setup, and collaborative contribution attribution.
