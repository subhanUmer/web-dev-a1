# CyberSec Hub - Enhanced Version (Team Member 2)

This is the **enhanced version** of the CyberSec Hub website, building upon the basic version with advanced features including APIs, Firebase, and multimedia.

## 🎯 What's Included in This Version

### ✅ Everything from Basic Version PLUS:

#### 🔥 Firebase Integration

- **Firestore Database** - Contact form saves to cloud database
- **Real-time data storage** - Submissions visible in Firebase Console
- **Already configured** with your credentials

#### 🌐 API Integrations

1. **GitHub API** - Search for GitHub users

   - Real-time user search
   - Display user profiles with avatars
   - No token required (60 requests/hour)

2. **DummyJSON API** - Dynamic news feed

   - Fetches latest tech articles
   - Displays on home page
   - Free public API

3. **Hugging Face AI** - AI chatbot
   - Microsoft DialoGPT model
   - Interactive chat interface
   - Requires free API token (see setup below)

#### 📺 Multimedia

- **YouTube Video Embed** - Educational cybersecurity content
- Responsive video player
- Embedded on relevant pages

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure API Tokens (Optional for some features)

#### Hugging Face AI (Required for AI chat):

1. Go to https://huggingface.co/settings/tokens
2. Create a new token (Read permission)
3. Open `src/services/api.js`
4. Replace `YOUR_HUGGING_FACE_API_TOKEN` with your token

#### Firebase (Already Configured):

✅ Firebase is already set up with credentials in `src/services/firebase.js`

### 3. Run Development Server

```bash
npm run dev
```

The site will open at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
enhanced-version/
├── src/
│   ├── components/        # 10 reusable React components (all functional)
│   ├── pages/            # 7 page components
│   ├── data/             # 6 JSON files with static content
│   ├── services/         # ⭐ WORKING API services
│   │   ├── api.js        # ✅ GitHub, DummyJSON, Hugging Face APIs
│   │   └── firebase.js   # ✅ Configured Firebase
│   ├── App.jsx           # Main app with routing
│   ├── main.jsx          # Entry point
│   └── index.css         # Tailwind configuration
├── public/               # Static assets
└── package.json          # Dependencies
```

## 🎨 Enhanced Features to Test

### 1. Firebase Contact Form

1. Navigate to `/about`
2. Fill out the contact form
3. Submit the form
4. Check your [Firebase Console](https://console.firebase.google.com/u/0/project/web-assignment-3be77/firestore)
5. See the submission in the `contacts` collection!

### 2. GitHub User Search

1. Navigate to `/github-search`
2. Type any GitHub username (e.g., "octocat")
3. See real-time search results with avatars
4. Click profile links to visit GitHub

### 3. AI Chatbot

1. Go to the home page
2. Click the chat icon in the bottom right
3. Type a message
4. Get AI-generated responses!
   - ⚠️ Requires Hugging Face token (see setup above)

### 4. Dynamic News Feed

1. Visit the home page
2. Scroll to "Latest from API" section
3. See news fetched from DummyJSON API
4. Refreshes on each page load

### 5. Video Content

1. Browse through pages
2. Find embedded YouTube videos
3. Watch cybersecurity tutorials inline

## 📝 What Team Member 2 Should Focus On

This version is perfect for the team member who will handle:

- ✅ API integration (3 different APIs)
- ✅ Firebase database setup
- ✅ External service configuration
- ✅ Dynamic data fetching
- ✅ Async/await patterns
- ✅ Error handling
- ✅ Third-party service integration

## 🔑 API Configuration

### Hugging Face Setup (for AI Chat)

1. **Sign up**: Go to [huggingface.co](https://huggingface.co/)
2. **Get token**: Visit [Settings → Access Tokens](https://huggingface.co/settings/tokens)
3. **Create token**: Click "New token", select "Read" permission
4. **Add to code**: Open `src/services/api.js`
   ```javascript
   const API_TOKEN = "hf_YourActualTokenHere123456";
   ```

### Firebase (Already Configured)

✅ Your Firebase credentials are already in `src/services/firebase.js`

- Project: `web-assignment-3be77`
- Firestore is enabled and in test mode
- Contact form is ready to use!

### GitHub API

✅ No configuration needed!

- Works immediately without token
- 60 requests per hour limit
- Upgrade to 5000/hour with optional token

## 🧪 Testing Checklist

- [ ] Contact form saves to Firebase
- [ ] Firebase Console shows new submissions
- [ ] GitHub search returns user results
- [ ] AI chatbot responds to messages (if token configured)
- [ ] News feed loads from DummyJSON API
- [ ] Videos play inline
- [ ] All basic features still work (theme, navigation, etc.)

## ⚠️ Troubleshooting

### Firebase Errors

- ✅ Already configured! Should work out of the box
- Check Firebase Console for errors if issues occur

### AI Chat Not Working

- Make sure you added your Hugging Face token to `src/services/api.js`
- First request may be slow (model loading)
- Free tier has rate limits

### GitHub Search Issues

- 60 requests/hour limit
- Returns empty array for non-existent users (expected)
- No token needed for basic functionality

## 📊 Comparison with Basic Version

| Feature                  | Basic | Enhanced |
| ------------------------ | ----- | -------- |
| React Components         | ✅    | ✅       |
| Routing                  | ✅    | ✅       |
| Tailwind Styling         | ✅    | ✅       |
| Theme Toggle             | ✅    | ✅       |
| Static Data              | ✅    | ✅       |
| **Firebase**             | ❌    | ✅       |
| **GitHub API**           | ❌    | ✅       |
| **DummyJSON API**        | ❌    | ✅       |
| **AI Chatbot**           | ❌    | ✅       |
| **Video Embed**          | ❌    | ✅       |
| **Working Contact Form** | ❌    | ✅       |

## 📚 Technologies Used

- React 18
- React Router DOM v6
- Tailwind CSS v4
- Vite
- **Firebase Firestore** 🔥
- **GitHub API** 🐙
- **DummyJSON API** 📰
- **Hugging Face AI** 🤖
- PropTypes

## 📖 Additional Documentation

- `API_TOKENS_GUIDE.md` - Detailed token setup instructions
- `SETUP_GUIDE.md` - Complete project setup guide
- `TAILWIND_V4_FIX.md` - Tailwind CSS v4 configuration notes

---

**Assignment Component**: Advanced features (APIs, Firebase, video)
**Team Member**: 2 (Enhancements)
**Version**: 2.0.0 - Enhanced
