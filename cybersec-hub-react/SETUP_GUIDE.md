# Setup Guide for CyberSec Hub

This guide will help you configure all the necessary APIs and services for the CyberSec Hub React application.

## 🔥 Firebase Setup

### Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project" or select an existing project
3. Follow the setup wizard

### Step 2: Enable Firestore Database

1. In your Firebase project, go to "Firestore Database" in the left menu
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a Cloud Firestore location
5. Click "Enable"

### Step 3: Get Firebase Configuration

1. Go to Project Settings (gear icon) > General
2. Scroll down to "Your apps" section
3. Click the web icon (`</>`) to add a web app
4. Register your app (name it "CyberSec Hub")
5. Copy the firebaseConfig object

### Step 4: Update Firebase Configuration

Open `src/services/firebase.js` and replace the configuration:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

### Step 5: Set Up Firestore Security Rules (Production)

For production, update your Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document} {
      allow write: if request.time < timestamp.date(2025, 12, 31);
      allow read: if false;
    }
  }
}
```

## 🤖 Hugging Face AI API Setup

### Step 1: Create Account

1. Go to [Hugging Face](https://huggingface.co/)
2. Sign up for a free account

### Step 2: Get API Token

1. Go to [Settings > Access Tokens](https://huggingface.co/settings/tokens)
2. Click "New token"
3. Give it a name (e.g., "CyberSec Hub")
4. Select "Read" permission
5. Click "Generate token"
6. Copy the token

### Step 3: Update API Configuration

Open `src/services/api.js` and update the token:

```javascript
export const queryAI = async (message) => {
  try {
    const API_TOKEN = 'hf_YOUR_TOKEN_HERE'; // Replace with your token
    // ... rest of the code
  }
};
```

## 🐙 GitHub API

No setup required! The GitHub API is public and doesn't require authentication for basic searches. However, you may encounter rate limits (60 requests per hour).

### Optional: Increase Rate Limit

1. Create a GitHub Personal Access Token
2. Go to GitHub Settings > Developer settings > Personal access tokens
3. Generate new token (classic)
4. No scopes needed for public searches
5. Update API call in `src/services/api.js` to include the token:

```javascript
const response = await fetch(
  `https://api.github.com/search/users?q=${username}`,
  {
    headers: {
      Authorization: "token YOUR_GITHUB_TOKEN_HERE",
    },
  }
);
```

## 📰 DummyJSON API

No setup required! DummyJSON is a free, public API.

## 🚀 Running the Application

After configuring the APIs:

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

## 🧪 Testing Features

### Test Firebase Form

1. Go to the "About" page
2. Fill out the contact form
3. Submit the form
4. Check your Firebase Console > Firestore Database to see the submitted data

### Test AI Chat

1. Go to the Home page
2. Click the "Ask AI" button in the bottom right
3. Type a question and send
4. The AI should respond (note: may be slow on first request)

### Test GitHub Search

1. Go to the "GitHub Search" page
2. Enter a username (e.g., "octocat")
3. Click "Search"
4. User profiles should appear

### Test Theme Toggle

1. Click the theme icon (🌙 or ☀️) in the header
2. The theme should switch between dark and light
3. Refresh the page - your preference should be saved

## 🔧 Troubleshooting

### Firebase Errors

- **"Firebase: Firebase App named '[DEFAULT]' already exists"**: Check if you're initializing Firebase multiple times
- **"Missing or insufficient permissions"**: Update your Firestore security rules
- **"Network error"**: Check your internet connection and Firebase project status

### AI Chat Not Working

- **"Error querying AI"**: Verify your Hugging Face API token is correct
- **Slow responses**: The first request may take 20-30 seconds as the model loads
- **429 Rate limit error**: You've exceeded the free tier limits, wait a few minutes

### GitHub API Issues

- **"API rate limit exceeded"**: Wait an hour or add authentication token
- **No results**: The username doesn't exist or there's a network issue

### General Issues

- **White screen**: Check browser console for errors
- **Styles not applying**: Verify Tailwind CSS is configured correctly
- **Images not loading**: Check image paths in the data JSON files

## 📝 Environment Variables (Recommended for Production)

For better security, create a `.env` file:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_HUGGINGFACE_API_TOKEN=your_hf_token
```

Then update your service files to use environment variables:

```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // ... etc
};
```

## 🎯 Next Steps

1. Take screenshots of all pages for the README
2. Test all features thoroughly
3. Deploy to Netlify or Vercel (optional)
4. Present your project!

## 📞 Support

If you encounter issues:

1. Check the browser console for errors
2. Review the Firebase console for database issues
3. Verify all API tokens are correctly configured
4. Check network requests in browser DevTools

Good luck with your project! 🚀
