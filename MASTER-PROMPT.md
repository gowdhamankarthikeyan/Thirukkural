# COMPREHENSIVE PROMPT: BUILD THIRUKKURAL MULTILINGUAL WEBSITE

## PROJECT OVERVIEW
Build a complete, multilingual website for Thirukkural (திருக்குறள்) - a classical Tamil literary work containing 1,330 couplets across 133 chapters. The site must support 14 languages with professional UI/UX and seamless language switching.

---

## CORE REQUIREMENTS

### 1. CONTENT STRUCTURE

**Data Hierarchy:**
- **3 Books (Paal)**: 
  - அறத்துப்பால் (Virtue) - Chapters 1-38
  - பொருட்பால் (Wealth) - Chapters 39-108  
  - காமத்துப்பால் (Love) - Chapters 109-133

- **133 Chapters (Athikarams)**: Each has Tamil name, English translation, 10 kurals each

- **1,330 Kurals (Couplets)**: Each has:
  - Tamil text (2 lines)
  - English transliteration (phonetic)
  - 3 expert commentaries in Tamil:
    - மு. வரதராசனார் (Mu. Varadarasanar)
    - சாலமன் பாப்பையா (Solomon Pappaiah)  
    - கலைஞர் எம். கருணாநிதி (Kalaignar M. Karunanidhi)

### 2. LANGUAGE REQUIREMENTS

**14 Languages Total:**

**Indian Languages (6):**
- Tamil (தமிழ்) - DEFAULT
- Hindi (हिंदी)
- Telugu (తెలుగు)
- Malayalam (മലയാളം)
- Kannada (ಕನ್ನಡ)
- Bengali (বাংলা)

**International Languages (8):**
- English
- Spanish (Español)
- French (Français)
- German (Deutsch)
- Chinese (中文)
- Arabic (العربية) - RTL support required
- Russian (Русский)
- Japanese (日本語)

**CRITICAL TRANSLATION RULES:**

1. **Proper Nouns (TRANSLITERATE in native script):**
   - Thirukkural → तिरुक्कुरल (Hindi), 提鲁库拉尔 (Chinese), تيروكورال (Arabic)
   - Thiruvalluvar → तिरुवल्लुवर (Hindi), 提鲁瓦卢瓦尔 (Chinese)
   - Scholar names → Phonetic transliteration in each script

2. **Common Nouns (TRANSLATE to local word):**
   - "Kural" → "Couplet" (English), "दोहा" (Hindi), "Copla" (Spanish), "Vers" (German), "对联" (Chinese)
   - "Athikaram" → "Chapter" (English), "अध्याय" (Hindi), "Capítulo" (Spanish)
   - "Paal" → "Book" (English), "पुस्तक" (Hindi), "Libro" (Spanish)

3. **What Stays Tamil:**
   - Original kural text (the 2-line Tamil couplets)
   - English transliteration (phonetic)
   - Tamil commentary text (use Translate button for these)
   - Tamil athikaram names (e.g., கடவுள் வாழ்த்து stays Tamil in all languages)

4. **Athikaram Name Translation (MUST HAVE):**
   - For Tamil/English: Show English names (e.g., "The Praise of God")
   - For Hindi: Translate all 133 athikaram names to Hindi (e.g., "ईश्वर की स्तुति")
   - For Telugu: Translate all 133 to Telugu (e.g., "దేవుని స్తుతి")
   - For Malayalam: Translate all 133 to Malayalam
   - For Kannada: Translate all 133 to Kannada
   - For Bengali: Translate all 133 to Bengali
   - For other languages: Use English names
   - **Total: 665 athikaram translations required (133 × 5 Indian languages)**

### 3. WEBSITE PAGES

**Page 1: Homepage (index.html)**
- Logo and title: திருக்குறள் with logo (Thiruvalluvar sitting in meditation pose)
- Tagline: "உலகப் பொதுமறை, வாழ்வின் கலை" → Translate to "Universal Scripture, Art of Living"
- Three book cards with icons:
  - Virtue: ⚖️ (balance/justice icon - NOT beads)
  - Wealth: 💰
  - Love: 💕
- Each card shows: Tamil name, translated name, description, chapter count, kural range
- Quick stats: 1,330 couplets, 133 chapters, 3 books
- Brief intro about Thirukkural (translated in all 14 languages)
- Brief bio about Thiruvalluvar (translated in all 14 languages)

**Page 2: Chapter Listing (athikarams.html)**
- Filter tabs: All, Virtue, Wealth, Love
- Grid of athikaram cards, each showing:
  - "அதிகாரம் 1" → Translates to "Chapter 1" (Hindi: "अध्याय 1", Spanish: "Capítulo 1")
  - Tamil athikaram name (stays Tamil)
  - English/translated description (gray text - MUST translate for Indian languages)
  - "குறள் 1-10" → Translates to "Couplet 1-10" (Hindi: "दोहा 1-10", Spanish: "Copla 1-10")

**Page 3: Chapter View (athikaram-view.html)**
- Chapter header with translated labels
- Gray athikaram name (MUST translate for Indian languages)
- All 10 kurals displayed as compact cards
- Each kural card shows:
  - Kural number (translated label)
  - Tamil couplet (2 lines)
  - English transliteration (2 lines)
  - 3 commentaries with "Translate" button
  - Scholar names (transliterated)
- Navigation: Previous/Next chapter buttons

**Page 4: Single Kural View (kural.html)**
- Detailed kural display
- Full screen layout
- Same content as chapter view but focused on one kural
- Navigation: Previous/Next kural buttons

### 4. UI/UX REQUIREMENTS

**Design:**
- Modern, clean interface
- Tamil cultural elements (orange/saffron primary color: #d4380d)
- Professional typography
- Responsive: Mobile-first design
- White/light background
- Proper Tamil font rendering

**Navigation:**
- Logo + title clickable → Returns to homepage
- Language dropdown (top right) with flags/native names
- Breadcrumbs where appropriate
- Clear prev/next navigation
- Smooth transitions

**Language System:**
- Dropdown with all 14 languages
- Click to switch instantly (NO page reload)
- Cookie to save preference
- Welcome modal on first visit (one-time) with language selection
- All UI elements update immediately on language change

**Translate Feature:**
- Each Tamil commentary has "Translate" button
- Desktop: Opens Google Translate in new window with text pre-filled
- Mobile: Copies text to clipboard AND opens Google Translate with text pre-filled
- Shows brief feedback ("Opening..." or "Copied!")

**Loading Experience:**
- NO flash of untranslated content (hide until ready)
- Smooth fade-in after translations load
- Content should appear in selected language from start
- Loading indicator if needed

### 5. TECHNICAL SPECIFICATIONS

**Technology Stack:**
- Pure vanilla JavaScript (ES6+) - NO frameworks
- CSS3 with CSS variables
- JSON for data storage
- No external dependencies except:
  - Google Translate integration (for commentary translation)
  - Unicode fonts (no custom font files needed)

**File Structure:**
```
project/
├── index.html
├── athikarams.html
├── athikaram-view.html
├── kural.html
├── styles.css
├── language.js (translation system)
├── translations.json (UI translations + 665 athikaram names)
├── athikarams-data.js (chapter metadata)
├── athikarams.js
├── athikaram-view.js
├── kural.js
├── thirukkural.json (complete kural database)
├── thiruvalluvar-logo.svg
├── .htaccess (Apache config)
└── README.md
```

**Data Structure:**

`translations.json`:
```json
{
  "languages": [
    {"code": "ta", "name": "Tamil", "native": "தமிழ்"},
    {"code": "hi", "name": "Hindi", "native": "हिंदी"},
    ...
  ],
  "translations": {
    "ta": {"home": "முகப்பு", "chapter": "அதிகாரம்", "couplet": "குறள்", ...},
    "hi": {"home": "होम", "chapter": "अध्याय", "couplet": "दोहा", ...},
    ...
  },
  "athikaram_names": {
    "en": {"1": "The Praise of God", "2": "The Excellence of Rain", ...},
    "hi": {"1": "ईश्वर की स्तुति", "2": "वर्षा की उत्कृष्टता", ...},
    "te": {"1": "దేవుని స్తుతి", "2": "వర్షం యొక్క శ్రేష్ఠత", ...},
    "ml": {...},
    "kn": {...},
    "bn": {...}
  }
}
```

`thirukkural.json`:
```json
{
  "kural": [
    {
      "Number": 1,
      "Line1": "அகர முதல எழுத்தெல்லாம்",
      "Line2": "ஆதி பகவன் முதற்றே உலகு",
      "transliteration1": "akara mudhala ezhuththellaam",
      "transliteration2": "aadhi bhagavan mudhatre ulaku",
      "mv": "மு.வ உரை...",
      "sp": "சா.பா உரை...",
      "mk": "கலைஞர் உரை..."
    },
    ...
  ]
}
```

**Language System Implementation:**

```javascript
// language.js must:
1. Load translations.json on page load
2. Check cookie for saved language preference
3. Apply translations to ALL elements with data-translate attribute
4. Expose functions:
   - window.t(key) → returns translated string
   - window.getCurrentLanguage() → returns current lang code
   - window.changeLanguage(code) → switches language
   - window.athikaram_names → athikaram translations
5. Re-render dynamic content when language changes
6. NO page reload on language switch
```

**Translation Application:**
- Static elements: Use `data-translate="key"` attribute
- Dynamic content: Use `window.t('key')` in JavaScript
- Athikaram names: Use `window.athikaram_names[lang][id]`

### 6. RESPONSIVE DESIGN

**Breakpoints:**
- Mobile: 320px - 480px
- Tablet: 481px - 768px
- Desktop: 769px+

**Mobile Specific:**
- Touch-optimized buttons
- Larger tap targets
- Simplified navigation
- Stack layouts vertically
- Responsive typography

**Arabic (RTL) Support:**
- Detect Arabic language
- Apply `dir="rtl"` to body
- Mirror layouts appropriately
- Maintain visual hierarchy

### 7. PERFORMANCE REQUIREMENTS

**Optimization:**
- Lazy load kural data (don't load all 1,330 upfront)
- Efficient JSON parsing
- Minimal DOM manipulation
- Smooth animations (CSS transitions)
- Fast language switching (<100ms)

**Loading:**
- Show loading state briefly
- Fade in content smoothly
- No flash of untranslated content (CRITICAL)
- Preload translations before showing content

### 8. BROWSER COMPATIBILITY

**Support:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Android)

**Fallbacks:**
- Clipboard API requires HTTPS or localhost
- Graceful degradation for older browsers

### 9. DATA REQUIREMENTS

**You must create or provide:**

1. **Complete kural database** (1,330 entries) with:
   - Tamil text
   - Transliterations
   - All 3 commentaries

2. **665 athikaram name translations**:
   - Hindi: All 133 chapters
   - Telugu: All 133 chapters
   - Malayalam: All 133 chapters
   - Kannada: All 133 chapters
   - Bengali: All 133 chapters

3. **UI translations** for all 14 languages including:
   - Navigation labels
   - Button text
   - Descriptive content
   - Site taglines
   - Scholar names (transliterated)

### 10. SPECIAL FEATURES

**Welcome Modal:**
- Shows on first visit only
- Cookie to prevent re-showing
- Highlights key features:
  - 14 languages
  - 1,330 kurals
  - 3 expert commentaries
- Dismiss button
- Clean, professional design

**Google Translate Integration:**
- "Translate" button on each commentary
- Desktop: Opens Google Translate in popup window
- Mobile: 
  - Copies text to clipboard
  - Shows "Opening..." feedback
  - Opens Google Translate with text pre-filled
  - User can paste if auto-fill fails

**Logo:**
- SVG format
- Thiruvalluvar in meditation pose
- Clickable to return home
- Scales properly on all devices

### 11. ACCESSIBILITY

**Requirements:**
- Semantic HTML5
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly
- Sufficient color contrast
- Alt text for images
- Focus indicators

### 12. SEO

**Must include:**
- Semantic structure (h1, h2, sections)
- Meta descriptions
- Open Graph tags
- Clean URLs
- Sitemap consideration

---

## CRITICAL SUCCESS FACTORS

### 1. Translation Quality
- ALL 665 athikaram names must be accurately translated
- Proper nouns transliterated correctly in native scripts
- Common nouns use local equivalents
- UI feels natural in each language

### 2. Performance
- NO flash of Tamil before translation
- Instant language switching
- Smooth fade-in animations
- Fast page loads

### 3. Mobile Experience
- Touch-friendly
- Responsive layouts
- Smart translate button behavior
- Works on all mobile browsers

### 4. Code Quality
- Clean, maintainable code
- Well-commented
- Consistent naming
- Modular structure
- No console errors

### 5. Data Integrity
- All 1,330 kurals present
- All commentaries complete
- No missing translations
- Proper character encoding (UTF-8)

---

## TESTING CHECKLIST

**Language Tests:**
- [ ] All 14 languages load without errors
- [ ] Language switching updates everything instantly
- [ ] Athikaram names show correctly in Hindi/Telugu/Malayalam/Kannada/Bengali
- [ ] Cookie saves language preference
- [ ] Welcome modal respects cookie

**Content Tests:**
- [ ] All 133 chapters accessible
- [ ] All 1,330 kurals display correctly
- [ ] All commentaries show properly
- [ ] Transliteration readable
- [ ] Tamil text renders correctly

**Navigation Tests:**
- [ ] Homepage → Chapters → Chapter View → Kural works
- [ ] Previous/Next buttons function
- [ ] Logo returns to homepage
- [ ] Filter tabs work on chapters page

**Responsive Tests:**
- [ ] Works on mobile (320px+)
- [ ] Works on tablet (768px)
- [ ] Works on desktop (1920px)
- [ ] Touch interactions work

**Browser Tests:**
- [ ] Chrome (desktop & mobile)
- [ ] Firefox
- [ ] Safari (desktop & iOS)
- [ ] Edge

**Special Feature Tests:**
- [ ] Translate button works on desktop
- [ ] Translate button works on mobile (both Chrome & Edge)
- [ ] Welcome modal shows once
- [ ] RTL works for Arabic
- [ ] No flash of untranslated content

---

## DELIVERABLES

1. **All HTML files** (4 files)
2. **All JavaScript files** (6 files)
3. **CSS file** (1 file)
4. **JSON data files** (2 files: translations.json, thirukkural.json)
5. **Metadata file** (athikarams-data.js)
6. **Logo file** (SVG)
7. **.htaccess** (Apache config)
8. **README.md** (comprehensive documentation)

---

## EXAMPLE OUTPUTS

**Homepage in Hindi:**
```
तिरुक्कुरल
सार्वभौमिक शास्त्र, जीवन की कला

[⚖️ सदाचार]
अध्याय: 38 | दोहा: 1-380

[💰 संपत्ति]
अध्याय: 70 | दोहा: 381-1080

[💕 प्रेम]
अध्याय: 25 | दोहा: 1081-1330
```

**Athikaram Card in Telugu:**
```
అధ్యాయం 1
కடవుள் வாழ்த்து
దేవుని స్తుతి
కవిత 1-10
```

**Kural Display in Spanish:**
```
Capítulo 1: கடவுள் வாழ்த்து (La Alabanza de Dios)

Copla 1

அகர முதல எழுத்தெல்லாம்
ஆதி பகவன் முதற்றே உலகு

akara mudhala ezhuththellaam
aadhi bhagavan mudhatre ulaku

Mu. Varadarasanar:
[Tamil text...] [Traducir]
```

---

## COMMON PITFALLS TO AVOID

1. ❌ **Flash of untranslated content** → ✅ Hide content until translations load
2. ❌ **English athikaram names in Hindi** → ✅ Must have Hindi translations
3. ❌ **Page reload on language change** → ✅ Instant update via JavaScript
4. ❌ **Bead necklace icon for Virtue** → ✅ Use balance/justice symbol ⚖️
5. ❌ **Translate button only copies on mobile** → ✅ Must also open Google Translate
6. ❌ **Missing window.athikaram_names** → ✅ Must expose in language.js
7. ❌ **Not translating "குறள்" and "அதிகாரம்"** → ✅ These must translate to local words
8. ❌ **Tamil kural text translating** → ✅ Original Tamil text must stay Tamil
9. ❌ **Poor mobile UX** → ✅ Must be touch-optimized
10. ❌ **Broken navigation** → ✅ Test all links thoroughly

---

## SUCCESS METRICS

A successful implementation will have:

✅ **14 languages** fully functional
✅ **665 athikaram translations** (133 × 5 Indian languages)
✅ **Zero flash** of untranslated content
✅ **Instant language switching** (<100ms)
✅ **Mobile-friendly** with smart translate behavior
✅ **Professional UI** that honors Tamil culture
✅ **All 1,330 kurals** accessible and readable
✅ **Clean code** that's maintainable
✅ **Fast performance** on all devices
✅ **Cross-browser compatibility**

---

## FINAL NOTES

This is a **cultural preservation project**. The implementation should:
- Honor the timeless wisdom of Thiruvalluvar
- Make Thirukkural accessible to global audiences
- Provide an excellent user experience
- Be maintainable and extensible
- Follow web standards and best practices

**The website should feel like a digital tribute to திருக்குறள், not just another web app.**

---

## PROMPT USAGE

When prompting Claude or any AI:

1. **Provide this entire document**
2. **Specify which phase to start with** (e.g., "Start with creating the translation system")
3. **Ask for one feature at a time** for better results
4. **Review and test** each component before moving to next
5. **Provide feedback** on translations for accuracy
6. **Request comprehensive testing** before final delivery

**Estimated development time with AI assistance: 4-6 hours**
**Estimated development time manually: 40-60 hours**

---

**வாழ்க தமிழ்! வாழ்க திருக்குறள்!**

*This prompt captures the complete requirements for building a professional, multilingual Thirukkural website from scratch.*
