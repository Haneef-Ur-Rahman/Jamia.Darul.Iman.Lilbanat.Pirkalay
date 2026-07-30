Bhai, ye lo — ek hi window mein **complete README.md**! 📋

```markdown
# 🕌 Jamia Darul Emaan Lil Banaat - Website

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Google Sheets](https://img.shields.io/badge/Backend-Google_Sheets-34A853?logo=googlesheets)](https://sheets.google.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> Official website of **Jamia Darul Emaan Lil Banaat, Peer Kalay, Peshawar**  
> A complete portal for student results, announcements, and madrasa information

---

## ✨ Features

### 🎯 Core Features
- 📱 **Fully Responsive** — Mobile, Tablet, Desktop optimized
- 🌐 **Urdu/Arabic Support** — Complete RTL layout
- 🎨 **Professional UI** — Modern design with Tailwind CSS
- ⚡ **Fast Performance** — Built with Vite

### 📊 Result System
- 📅 **Year-wise Results** — 2025, 2026 (Extendable)
- 📚 **9 Classes** — From A'dadiya to Aalamiya Year 2
- 🔢 **Roll Number Search** — Auto-format: XXXX-XX-XXXXXX
- 📋 **Detailed Result Card** — Marks, Percentage, Grade, Status
- 🖨️ **Print Feature** — Print result card only
- 📊 **Google Sheets Backend** — No server required

### 🔔 Notification System
- 📢 **Google Sheets Controlled** — Update without code changes
- ⏰ **24-Hour Auto Hide** — "Don't show again" option
- 📝 **Rich Urdu Announcements** — Multi-paragraph support
- 🔄 **Multiple Notifications** — Swipe/Next navigation

### 📊 Stats Section
- 👥 Student count, Teachers, Courses
- 👤 Profiles: Muhtamim & Baaniya
- 📞 Contact number display

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| **React 18** | Frontend Framework |
| **Tailwind CSS** | Styling |
| **Google Sheets API** | Backend Database (Results + Notifications) |
| **Material Symbols** | Icons |
| **Vite** | Build Tool |

---

## 📁 Project Structure

```
src/
├── assets/
│   └── images/
│       └── logo.png
├── components/
│   ├── Header.jsx              # Navigation + Mobile Menu
│   ├── Hero.jsx                # Hero Section
│   ├── About.jsx               # About Madrasa
│   ├── Stats.jsx               # Statistics + Profiles
│   ├── Courses.jsx             # Education System
│   ├── Pillars.jsx             # Madrasa Pillars
│   ├── Gallery.jsx             # Photo Gallery
│   ├── Footer.jsx              # Footer
│   ├── Ticker.jsx              # Scrolling Ticker
│   ├── Modal.jsx               # Reusable Modal
│   ├── Results.jsx             # Result Search System
│   └── NotificationModal.jsx   # Announcement Popup
├── App.jsx                     # Main App Component
├── main.jsx                    # Entry Point
└── index.css                   # Global Styles
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/jamia-darul-emaan.git

# Navigate to project folder
cd jamia-darul-emaan

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

The build folder will be created at `dist/` — ready for deployment.

---

## 📊 Google Sheets Setup

### Results Database
1. Create Google Sheets for each year & class
2. Structure: `رقم الجلوس | رقم التسجيل | اسم الطالب | ... | كيفيت`
3. Publish each sheet: **File → Share → Publish to web** (CSV format)
4. Copy Sheet IDs and update in `Results.jsx`

### Notifications Database
1. Create a Google Sheet with columns: `id | title | message | footer | active`
2. Publish to web (CSV format)
3. Copy Sheet ID and update in `NotificationModal.jsx`
4. Set `active` column to `TRUE` to show notification

---

## 🎯 How It Works

### Result Search Flow
```
User → Select Year → Select Class → Enter Roll Number → View Result
```

### Notification Flow
```
User Opens Website → Check Google Sheet → Show Active Notifications → 24h Hide Option
```

### Data Flow
```
Google Sheets (CSV) → Fetch API → Parse CSV → Display on Website
```

---

## 📱 Responsive Design

| Device | Breakpoint | Layout |
|--------|------------|--------|
| Mobile | < 768px | Single Column |
| Tablet | 768px - 1024px | 2 Columns |
| Desktop | > 1024px | Multi Column |

---

## 🎨 Color Scheme

| Color | Hex | Usage |
|-------|-----|-------|
| Brand Maroon | `#800000` | Primary |
| Brand Gold | `#D4AF37` | Accent |
| White | `#FFFFFF` | Background |
| Gray | `#F3F4F6` | Secondary |

---

## 📝 Classes Supported

| Key | Class Name |
|-----|------------|
| A | A'dadiya (اعدادیہ) |
| B | Mutawassita (متوسطہ) |
| C | Oola (اولٰی) |
| 1 | Khassa Year 1 (خاصہ سال اول) |
| 2 | Khassa Year 2 (خاصہ سال دوم) |
| 3 | Aaliya Year 1 (عالیہ سال اول) |
| 4 | Aaliya Year 2 (عالیہ سال دوم) |
| 5 | Aalamiya Year 1 (عالمیہ سال اول) |
| 6 | Aalamiya Year 2 (عالمیہ سال دوم) |

---

## 🔒 Security

- Google Sheets are **View Only** (no edit access)
- No API keys exposed
- No sensitive data in code
- Data published as **CSV (read-only)**

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag & drop dist/ folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm run build
npm run deploy
```

---

## 🤝 Credits

- **Madrasa:** Jamia Darul Emaan Lil Banaat, Peer Kalay, Peshawar
- **Muhtamim:** Maulana Syed Nigar Badshah Peer Kalay
- **Baaniya:** Moallima Mohtarma Baji Ammi Imama Sahiba
- **Contact:** +92 313 9812656

---

## 📄 License

This project is **MIT Licensed** — feel free to use and modify.

---

## 🙏 Acknowledgements

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Sheets API](https://developers.google.com/sheets/api)
- [Material Symbols](https://fonts.google.com/icons)
- [Vite](https://vitejs.dev/)

---

**Made with ❤️ for Jamia Darul Emaan Lil Banaat**
```

---

Bhai, bas **Ctrl+A → Ctrl+C** karo aur `README.md` mein **Ctrl+V**! 🤲📄✨
