# Quick Start Guide

## Installation

```bash
cd cybersec-hub-react
npm install
```

## Development

```bash
npm run dev
```

Visit `http://localhost:5173`

## Production Build

```bash
npm run build
npm run preview
```

## Important Notes

1. **Firebase Configuration Required**: Update `src/services/firebase.js` with your Firebase credentials
2. **AI API Token**: Update `src/services/api.js` with your Hugging Face API token (optional)
3. **Image Paths**: Some images use absolute paths that may need adjustment

## All Features Working:

✅ React Router - 7 pages  
✅ 10 React Components  
✅ State & Props (useState, useEffect)  
✅ API Integration (DummyJSON, GitHub)  
✅ Dynamic JSON Data (6 data files)  
✅ Search & Filter Features  
✅ Theme Toggle with localStorage  
✅ Firebase Form (needs config)  
✅ YouTube Video Embed  
✅ AI Chatbot (needs token)  
✅ Tailwind CSS (no inline styles)  
✅ Responsive Design  
✅ GitHub User Search (Task 2)

## Project Structure Highlights

- **Components**: Header, Footer, CTFCard, NewsCard, BlogCard, ReviewCard, TechniqueCard, TeamMember, GitHubUserCard, AIChatBox (10 total)
- **Pages**: Home, News, Reviews, Techniques, Blog, About, GitHubSearch (7 total)
- **Data Files**: ctfEvents, headlines, blogPosts, reviews, techniques, teamMembers (6 total)
- **Services**: Firebase, API integrations
- **Assets**: Team photos, blog images

## Testing Checklist

- [ ] Navigate between all pages
- [ ] Test search on News page
- [ ] Test filters on Techniques page
- [ ] Test theme toggle and reload page
- [ ] Submit contact form (after Firebase setup)
- [ ] Search GitHub users
- [ ] Try AI chatbot (after token setup)
- [ ] Check responsive design on mobile

## Next Steps

1. Follow SETUP_GUIDE.md to configure Firebase and Hugging Face
2. Take screenshots of all pages
3. Test all functionality
4. Deploy to Vercel/Netlify (optional)
5. Present your project!

Enjoy your fully-functional CyberSec Hub! 🎉
