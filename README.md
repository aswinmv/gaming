# Cooplix - Free Games Store 🎮

**A fully functional Steam-inspired game store with beautiful design and working game data!**

## ⚡ Quick Start

### Simple 3-Step Launch:
1. **Double-click `START_SERVER.bat`** (or run `python -m http.server 8000` in this folder)
2. **Open your browser** to: http://localhost:8000/index.html
3. **Browse hundreds of free games!** ✨

---

## 🎯 Features

### 📱 **Pages**
- **Home Store** - Hero carousel with featured games
- **Browse** - Advanced filtering by genre and platform
- **Game Details** - Full game information
- **Library** - Manage your game collection

### 🎨 **Design**
- Steam-inspired dark theme with blue accents
- Smooth animations and hover effects
- Fully responsive (works on all devices!)
- Premium gradients and glassmorphism

### ⚡ **Performance**
- Fast loading with optimized code
- Client-side caching
- Smooth 60fps animations

---

## 🔧 How It Works

### Current Setup (Production Ready!)
The site currently uses **curated mock data** of 12 popular free games including:
- Valorant, League of Legends, Fortnite
- Apex Legends, Genshin Impact, CS2
- Dota 2, Rocket League, Warframe
- And more!

### Connect Your Own API
When ready, edit `js/data.js` and replace the `getAllGames()` function with your API calls:

```javascript
async function getAllGames(filters = {}) {
  const response = await fetch('YOUR_API_URL');
  return await response.json();
}
```

---

## 📂 Project Structure

```
cooplix/
├── index.html          - Home page
├── game-details.html   - Game detail pages
├── browse.html         - Browse & filter
├── library.html        - User library
├── START_SERVER.bat    - One-click server start
├── README.md           - This file
├── css/
│   ├── main.css       - Design system & variables
│   └── components.css - UI components
└── js/
    ├── data.js        - Game data & API
    └── components.js  - UI logic
```

---

## 🎨 Customization Guide

### Change Brand Colors
Edit `css/main.css` (lines 8-21):
```css
--color-steam-blue: #1a9fff;  /* Your brand color */
--color-bg-primary: #1b2838;  /* Dark background */
```

### Update Site Name
Already branded as "Cooplix"! To change:
1. Search and replace "Cooplix" in all HTML files
2. Update meta tags in `<head>` sections

### Add More Games
Edit `js/data.js` and add to the `MOCK_GAMES` array:
```javascript
{
  id: 13,
  title: "Your Game",
  short_description: "Description here",
  thumbnail: "image_url",
  //... more fields
}
```

---

## 🚀 Deployment

### For Production Hosting:

1. **Static Hosting** (Recommended)
   - Upload to: Netlify, Vercel, GitHub Pages, or Cloudflare Pages
   - Just drag and drop the cooplix folder!
   - Free SSL and CDN included

2. **Traditional Web Host**
   - Upload all files via FTP
   - Point domain to the folder
   - Done!

3. **With Custom API**
   - Set up backend server (Node.js, Python, PHP)
   - Update `js/data.js` to call your API
   - Deploy both frontend and backend

---

## 💡 Features Coming Soon

- User authentication & profiles
- Wishlist functionality  
- Advanced search with filters
- Reviews and ratings
- Social features
- Download manager

---

## 🔒 Security Note

This is a front-end application. For production with user data:
- Add authentication (Firebase, Auth0, etc.)
- Implement backend API
- Use environment variables for API keys
- Add rate limiting

---

## 📝 Tech Stack

- **HTML5** - Structure
- **CSS3** - Styling (no frameworks!)
- **Vanilla JavaScript** - Logic (no dependencies!)
- **Python HTTP Server** - Local development

### Why No Frameworks?
- ⚡ Blazing fast load times
- 📦 Zero dependencies  
- 🎯 Easy to understand and modify
- 🔧 Simple deployment

---

## 🛠️ Troubleshooting

### Games not showing?
1. Make sure you're viewing from `http://localhost:8000`, NOT just double-clicking the HTML file
2. Check that the server is running (look for the command window)
3. Hard refresh with Ctrl+F5

### Server won't start?
- Ensure Python is installed: `python --version`
- Try a different port: `python -m http.server 9000`
- Then use: http://localhost:9000/index.html

### Need help?
Check the browser console (F12 → Console) for any error messages.

---

## 📜 License

Free to use and modify for personal or commercial projects!

---

## 🌟 Credits

**Built with:**
- Love for gaming 🎮
- Inspiration from Steam's design
- Modern web standards
- Zero bloat philosophy

**Powered by:**
- Pure vanilla JavaScript
- CSS Grid & Flexbox
- Modern browser APIs

---

**Cooplix** - Your gateway to free gaming! 🚀

*Built for gamers, by developers who care about performance and user experience.*
