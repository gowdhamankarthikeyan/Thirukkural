# திருக்குறள் - Thirukkural Multilingual Website

A beautiful, multilingual web application for exploring the timeless wisdom of Thirukkural (திருக்குறள்), featuring all 1,330 couplets across 133 chapters in 14 languages.

![Version](https://img.shields.io/badge/version-1.4-blue)
![Languages](https://img.shields.io/badge/languages-14-green)
![License](https://img.shields.io/badge/license-Educational-orange)

## 🌟 Features

### 📚 Complete Content
- **1,330 Couplets** - All kurals with Tamil text and English transliteration
- **133 Chapters** (Athikarams) - Organized into three books (Paal)
- **3 Books** - Virtue (அறத்துப்பால்), Wealth (பொருட்பால்), Love (காமத்துப்பால்)
- **Multiple Commentaries** - Expert explanations from மு. வரதராசனார், சாலமன் பாப்பையா, and கலைஞர்

### 🌍 14 Languages Supported

#### Indian Languages (6)
- 🇮🇳 **தமிழ்** (Tamil) - Default
- 🇮🇳 **हिंदी** (Hindi)
- 🇮🇳 **తెలుగు** (Telugu)
- 🇮🇳 **മലയാളം** (Malayalam)
- 🇮🇳 **ಕನ್ನಡ** (Kannada)
- 🇮🇳 **বাংলা** (Bengali)

#### International Languages (8)
- 🇬🇧 **English**
- 🇪🇸 **Español** (Spanish)
- 🇫🇷 **Français** (French)
- 🇩🇪 **Deutsch** (German)
- 🇨🇳 **中文** (Chinese)
- 🇸🇦 **العربية** (Arabic)
- 🇷🇺 **Русский** (Russian)
- 🇯🇵 **日本語** (Japanese)

### ✨ Key Capabilities
- 🔄 **Instant Language Switching** - No page reload required
- 📱 **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- 🎨 **Beautiful UI** - Clean, modern interface with Tamil cultural elements
- 🔍 **Easy Navigation** - Browse by book, chapter, or kural number
- 📖 **Integrated Translation** - One-click Google Translate for Tamil commentaries
- 💾 **Persistent Preferences** - Language choice saved via cookies
- ⚡ **Fast Performance** - Optimized loading and rendering

---

## 🚀 Quick Start

### Prerequisites
- A web server (Apache, Nginx, or any static file server)
- Modern web browser with JavaScript enabled

### Installation

1. **Clone or Download**
   ```bash
   git clone https://github.com/gowdhamankarthikeyan/thirukkural.git
   cd thirukkural
   ```

2. **Deploy to Web Server**
   
   **Option A: Using Apache**
   ```bash
   # Copy files to Apache web root
   sudo cp -r * /var/www/html/thirukkural/
   
   # Ensure .htaccess is enabled
   sudo a2enmod rewrite
   sudo systemctl restart apache2
   ```

   **Option B: Using Nginx**
   ```bash
   # Copy files to Nginx web root
   sudo cp -r * /usr/share/nginx/html/thirukkural/
   sudo systemctl restart nginx
   ```

   **Option C: Simple HTTP Server (Development)**
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js
   npx http-server -p 8000
   ```

3. **Access the Site**
   ```
   http://localhost:8000
   # or
   http://your-domain.com/thirukkural
   ```

---

## 📁 Project Structure

```
thirukkural/
├── index.html              # Homepage with three books
├── athikarams.html         # Chapter listing page
├── athikaram-view.html     # Single chapter view with all kurals
├── kural.html              # Single kural detailed view
├── styles.css              # Global styles
├── language.js             # Language management system
├── translations.json       # All UI translations (14 languages)
├── athikarams-data.js      # Chapter metadata
├── athikarams.js           # Chapter listing logic
├── athikaram-view.js       # Chapter view logic
├── kural.js                # Single kural view logic
├── thirukkural.json        # Complete kural database (2.3MB)
├── thiruvalluvar-logo.svg  # Logo image
├── .htaccess               # Apache rewrite rules
└── README.md               # This file
```

---

## 🎨 Translation System

### How It Works

The website features a sophisticated translation system with **665 athikaram name translations** across 5 Indian languages:

1. **UI Translation**: All buttons, labels, and navigation elements translate to the selected language
2. **Content Translation**: 
   - For **Tamil & English**: Athikaram names show in English
   - For **Hindi, Telugu, Malayalam, Kannada, Bengali**: Athikaram names show in the respective language
3. **Persistent State**: Language preference saved in cookies

### Translation Coverage

- **UI Elements**: 100% translated (all 14 languages)
- **Athikaram Names**: 
  - Tamil: Original Tamil names + English descriptions
  - English: English names
  - Hindi: Hindi translations (133 chapters)
  - Telugu: Telugu translations (133 chapters)
  - Malayalam: Malayalam translations (133 chapters)
  - Kannada: Kannada translations (133 chapters)
  - Bengali: Bengali translations (133 chapters)
  - Other languages: English names (for international consistency)

---

## 🔧 Configuration

### Web Server Setup

#### Apache (.htaccess included)
The project includes an `.htaccess` file for clean URLs and proper MIME types.

#### Nginx Configuration
Add to your nginx server block:

```nginx
location /thirukkural {
    alias /path/to/thirukkural;
    index index.html;
    
    location ~ \.json$ {
        add_header Content-Type application/json;
    }
    
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;
}
```

---

## 🌐 Adding a New Language

Want to add Portuguese, Italian, or another language? Here's how:

1. **Edit `translations.json`**:

```json
{
  "languages": [
    ...
    {"code": "pt", "name": "Portuguese", "native": "Português"}
  ],
  "translations": {
    "pt": {
      "home": "Início",
      "chapters": "Capítulos",
      "chapter": "Capítulo",
      "couplet": "Copla",
      ...
    }
  },
  "athikaram_names": {
    "pt": {
      "1": "O Louvor de Deus",
      "2": "A Excelência da Chuva",
      ...
    }
  }
}
```

2. **No code changes needed!** The system automatically detects and uses new languages.

---

## 📱 Mobile Features

- Touch-optimized interface
- Smart translate button behavior:
  - Copies Tamil text to clipboard
  - Opens Google Translate
  - Text ready to paste
- Responsive typography
- Optimized navigation

---

## 🐛 Troubleshooting

### Translations not loading
Check browser console for errors. Ensure `translations.json` is served with correct MIME type (`application/json`).

### Gray athikaram names still in English
1. Verify you uploaded the latest `translations.json`
2. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
3. Check browser console for JavaScript errors
4. Ensure all JS files are updated to latest version

### Mobile translate not working
- Requires HTTPS or localhost for clipboard API
- Test with both Chrome and Edge on mobile
- Text should copy to clipboard even if translate doesn't auto-paste

### Flash of untranslated content
- Minor delay (<100ms) is expected on slower connections
- Content fades in smoothly after translations load
- This is optimized for best UX

---

## 📊 Data Files

### translations.json (148KB)
Contains all UI translations and athikaram names:
- 14 languages
- 665 athikaram name translations
- All UI labels and content

### thirukkural.json (2.3MB)
Complete kural database:
- 1,330 kurals
- Tamil text
- English transliterations
- 3 expert commentaries

### athikarams-data.js (4KB)
Metadata for all 133 chapters:
- Tamil names
- English names
- Book (paal) association
- Kural number ranges

---

## 🏆 Version History

- **v1.4** - Complete Indian language translations (665 athikaram names)
  - Hindi: All 133 chapters translated
  - Telugu: All 133 chapters translated
  - Malayalam: All 133 chapters translated
  - Kannada: All 133 chapters translated
  - Bengali: All 133 chapters translated
  
- **v1.3** - 14 language support, welcome modal, cookie persistence

- **v1.2** - Compact display, improved mobile UX, clickable logo

- **v1.1** - Logo, branding, responsive design, ⚖️ icon for Virtue

- **v1.0** - Initial release with core features

---

## 🤝 Contributing

### Ways to Contribute

1. **Add/Improve Translations**
   - Fork the repository
   - Edit `translations.json`
   - Submit a pull request

2. **Report Bugs**
   - Use GitHub Issues
   - Include: Browser, OS, Steps to reproduce
   - Screenshots help!

3. **Suggest Features**
   - Open a GitHub Issue with "Feature:" prefix
   - Describe use case

4. **Improve Documentation**
   - Fix typos, add examples
   - Translate README to other languages

---

## 📜 License

This project is a cultural and educational resource.

- **Content** (Thirukkural text and commentaries): Public domain
- **Code**: Available for educational and non-commercial use

### Attribution

Please credit:
- **திருவள்ளுவர்** (Thiruvalluvar) - Original author
- **மு. வரதராசனார், சாலமன் பாப்பையா, கலைஞர்** - Commentators
- Project contributors

---

## 🙏 Acknowledgments

- **திருவள்ளுவர்** - For this eternal wisdom
- **மு. வரதராசனார்** - Scholarly commentary
- **சாலமன் பாப்பையா** - Modern interpretation
- **கலைஞர் எம். கருணாநிதி** - Contemporary insights
- All contributors to Tamil literary preservation

---

## 📞 Support

- **Live Demo**: https://thirukkural.gowdhaman.in
- **GitHub Issues**: https://github.com/gowdhamankarthikeyan/thirukkural/issues
- **Repository**: https://github.com/gowdhamankarthikeyan/thirukkural

---

## 💻 Technical Stack

- **Frontend**: Vanilla JavaScript (ES6+)
- **Styling**: CSS3 with CSS Variables
- **Data**: JSON
- **No frameworks** - Pure, lightweight code
- **Total bundle**: ~3MB (2.3MB is kural database)

---

## 🔮 Roadmap

### Planned Features
- [ ] Audio pronunciation
- [ ] Advanced search
- [ ] Bookmark kurals
- [ ] Social sharing
- [ ] Daily kural notifications
- [ ] Dark mode
- [ ] PWA support
- [ ] More languages

---

## 📖 Developer Guide

### Local Development

```bash
# Clone and start
git clone https://github.com/gowdhamankarthikeyan/thirukkural.git
cd thirukkural
python3 -m http.server 8000
```

### Key Functions

```javascript
// Get translated text
window.t('home') // → "முகப்பு" (in Tamil)

// Get current language
window.getCurrentLanguage() // → 'ta'

// Change language
window.changeLanguage('hi') // Switch to Hindi

// Get athikaram translation
window.athikaram_names['hi']['1'] // → "ईश्वर की स्तुति"
```

### Testing Checklist

- [ ] All 14 languages load
- [ ] Language switching works
- [ ] Athikaram names translate (Indian languages)
- [ ] Navigation works (prev/next)
- [ ] Mobile responsive
- [ ] Translate button works
- [ ] Cookie saves preference

---

**Built with ❤️ for Tamil literature and cultural preservation**

**வாழ்க தமிழ்! வாழ்க திருக்குறள்!**

*Last Updated: February 2026*
