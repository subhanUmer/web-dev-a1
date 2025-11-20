# API Tokens Configuration Guide

This guide explains how to set up API tokens for features that require authentication.

## 🔑 Required Tokens

### 1. **Firebase (Contact Form)**

The contact form on the About page uses Firebase Firestore to store submissions.

**Steps to get Firebase credentials:**

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Sign in with your Google account
3. Click "Add project" or select an existing project
4. Go to Project Settings (gear icon) → General
5. Scroll down to "Your apps" and click the web icon `</>`
6. Register your app with a nickname (e.g., "CyberSec Hub")
7. Copy the `firebaseConfig` object

**Where to add it:**
Open `src/services/firebase.js` and replace the placeholder values:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456",
};
```

**Enable Firestore:**

1. In Firebase Console, go to Firestore Database
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location and click "Enable"

---

### 2. **Hugging Face (AI Chat)**

The AI chatbox on the home page uses Hugging Face's Inference API with the DialoGPT model.

**Steps to get Hugging Face token:**

1. Go to [Hugging Face](https://huggingface.co/)
2. Sign up or log in
3. Go to [Settings → Access Tokens](https://huggingface.co/settings/tokens)
4. Click "New token"
5. Give it a name (e.g., "CyberSec Hub")
6. Select "Read" permission (sufficient for inference)
7. Click "Generate" and copy the token

**Where to add it:**
Open `src/services/api.js` and replace the placeholder:

```javascript
const API_TOKEN = "hf_YourActualTokenHere123456";
```

---

### 3. **GitHub API (No Token Needed)**

The GitHub user search feature uses the public GitHub API and **does NOT require a token**.

**Rate Limits:**

- Without authentication: 60 requests per hour
- With token (optional): 5,000 requests per hour

If you want to increase the rate limit, you can optionally add a GitHub Personal Access Token to `src/services/api.js` in the `searchGitHubUsers` function headers.

---

## 🧪 Testing After Configuration

After adding your tokens:

1. **Test Firebase:**

   - Navigate to `/about`
   - Fill out the contact form
   - Submit it
   - Check your Firebase Console → Firestore Database to see the new document

2. **Test Hugging Face:**

   - Go to the home page
   - Scroll to the AI chatbox
   - Type a message and send
   - You should receive an AI-generated response

3. **Test GitHub Search:**
   - Navigate to `/github-search`
   - Search for any username
   - Should work immediately without tokens (rate-limited)

---

## 🔒 Security Notes

- **NEVER commit your API keys to public repositories!**
- Add `.env` file to `.gitignore` if using environment variables
- For production, use environment variables instead of hardcoded values
- Firebase test mode is only for development - set proper security rules for production

---

## ❓ Troubleshooting

**Firebase errors:**

- Make sure Firestore is enabled in your Firebase project
- Check that you're in "test mode" (or have proper security rules)
- Verify all config values are correct

**Hugging Face errors:**

- Ensure your token has "Read" permission
- The API might be slow on first request (model loading)
- Free tier has rate limits

**GitHub errors:**

- 60 requests/hour limit without token
- API returns 404 for users that don't exist (this is expected)

---

## 📚 More Details

For detailed setup instructions, see `SETUP_GUIDE.md`.
