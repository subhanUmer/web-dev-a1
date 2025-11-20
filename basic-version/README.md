# CyberSec Hub - Basic Version (Team Member 1)

This is the **basic version** of the CyberSec Hub website, containing the core React application structure without advanced features.

## 🎯 What's Included in This Version

### ✅ Core Features

- **React 18** with Vite build tool
- **React Router** - Navigation between 7 pages
- **10 Reusable Components**:
  - Header (with theme toggle)
  - Footer
  - CTFCard
  - NewsCard
  - BlogCard
  - ReviewCard
  - TechniqueCard
  - TeamMember
  - GitHubUserCard (placeholder)
  - AIChatBox (placeholder)
- **7 Pages**:

  - Home
  - News (with search/filter)
  - Reviews
  - Techniques (with search/filter)
  - Blog
  - About (with contact form - not functional yet)
  - GitHub Search (placeholder)

- **Tailwind CSS v4** - Complete styling with dark/light theme
- **6 JSON Data Files** - Static content for CTFs, news, blogs, reviews, techniques, team
- **PropTypes** - Component validation
- **localStorage** - Theme preference persistence

### ❌ NOT Included (Enhanced Version Only)

- ❌ Firebase integration (contact form is non-functional)
- ❌ API integrations (GitHub, DummyJSON, Hugging Face)
- ❌ YouTube video embed
- ❌ Working AI chatbox
- ❌ Working GitHub user search
- ❌ Dynamic news from APIs

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The site will open at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
basic-version/
├── src/
│   ├── components/        # 10 reusable React components
│   ├── pages/            # 7 page components
│   ├── data/             # 6 JSON files with static content
│   ├── services/         # Placeholder services (not functional)
│   │   ├── api.js        # Placeholder API functions
│   │   └── firebase.js   # Placeholder Firebase config
│   ├── App.jsx           # Main app with routing
│   ├── main.jsx          # Entry point
│   └── index.css         # Tailwind configuration
├── public/               # Static assets
└── package.json          # Dependencies
```

## 🎨 Features to Test

1. **Theme Toggle** - Click the 🌙/☀️ button to switch between dark/light modes
2. **Navigation** - Browse all 7 pages
3. **Search & Filter** - Try the search on News and Techniques pages
4. **Responsive Design** - Resize the browser to see mobile menu
5. **Static Content** - All content from JSON files displays correctly

## 📝 What Team Member 1 Should Focus On

This version is perfect for the team member who will handle:

- ✅ Core React application structure
- ✅ Component architecture
- ✅ Routing setup
- ✅ Static data management
- ✅ UI/UX with Tailwind CSS
- ✅ Responsive design
- ✅ Theme system

## ⚠️ Known Limitations

- Contact form displays but doesn't save data (no Firebase)
- AI chatbox shows placeholder message
- GitHub search is non-functional
- News page only shows static JSON data
- No video embed

**These features are available in the enhanced version!**

## 🔄 Upgrading to Enhanced Version

To see the complete version with all features, check the `enhanced-version` folder.

## 📚 Technologies Used

- React 18
- React Router DOM v6
- Tailwind CSS v4
- Vite
- PropTypes

---

**Assignment Component**: Core React website structure
**Team Member**: 1 (Foundations)
**Version**: 1.0.0 - Basic
