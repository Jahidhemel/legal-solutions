# Legal Solutions — Sass-Powered Law Firm Landing Page

A boutique law-firm landing page demo built with **Sass** (Dart Sass), vanilla JavaScript, and a deliberate focus on premium typography and clean architecture.

🌐 **Live Demo:** [https://jahidhemel.github.io/legal-solutions/](https://jahidhemel.github.io/legal-solutions/)

---

## ✨ Features

- 🎨 **Sass architecture** — design tokens via maps, mixins for breakpoints, `@each` loops to generate button variants, placeholder selectors (`%card-base`) for shared patterns
- 🧭 **Sticky navbar** with backdrop blur + scroll-aware shadow
- 📱 Mobile hamburger menu with slide-down nav
- 🔍 Hero search bar with toast feedback
- 🗂️ **6-card practice areas grid** with hover-lift, animated arrow, and gold top-bar reveal
- 💬 **Working testimonial slider** — 3 slides, auto-rotating every 6s, with prev/next + dot navigation
- ❓ **FAQ accordion** — single-open accordion with smooth height animation and icon rotation
- 📞 **Contact form** with name/email/message validation
- 📩 Newsletter signup in footer with email validation
- 🪟 Demo modal on practice cards (portfolio context)
- 🍞 Custom toast component (no libraries)
- 📅 Auto-updating copyright year
- 🔗 Real footer social links (LinkedIn / Facebook / Email)
- 🎯 Fully responsive: 1-col on mobile, 2-col tablet, 3-col desktop

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| **Sass / Dart Sass** | Source styling — variables, maps, mixins, loops, nesting |
| **HTML5** | Semantic markup, BEM-style class naming |
| **JavaScript** (vanilla) | Slider, accordion, modal, toast, form validation |
| **Cormorant Garamond** | Serif headlines (premium law-firm feel) |
| **Inter** | Clean sans-serif body |
| **Font Awesome 4.7** | Iconography |

---

## 📁 Project Structure

```
legal-solutions/
├── index.html
├── README.md
├── src/
│   └── scss/
│       └── styles.scss        ← Sass source (design tokens, mixins, components)
└── Assets/
    ├── Images/                ← practice icons, logos, slider photos
    ├── css/
    │   └── styles.css         ← Compiled output (linked from index.html)
    └── js/
        └── main.js            ← Slider, accordion, modal, toast, forms
```

---

## 🚀 Run / Build Locally

```bash
# Clone the repository
git clone https://github.com/Jahidhemel/legal-solutions.git
cd legal-solutions

# Just open in a browser — no build needed (compiled CSS is committed)
open index.html

# To recompile the Sass source after edits:
npm install -g sass
sass --style=compressed --no-source-map src/scss/styles.scss Assets/css/styles.css

# Or watch for changes:
sass --watch src/scss/styles.scss:Assets/css/styles.css
```

---

## 🎨 Design Notes

- **Color palette:** deep navy `#1e3a5f` primary, champagne gold `#c9a96e` accent — the classic premium law-firm pairing
- **Typography:** Cormorant Garamond for headlines (serif, weight 600), Inter for body (sans, weight 400–700) — gives the page a "boutique law firm" feel without being stuffy
- **Spacing rhythm:** 4px-based scale exposed through a Sass `$space` map and `s($n)` helper
- **Component patterns:** rounded corners (16–24px), subtle border + shadow on cards, gold top-bar reveal on hover for practice cards

---

## 🧠 Sass Features Demonstrated

- 🗂 **Maps** for color tokens (`$colors`) and spacing (`$space`)
- 🛠 **Functions** (`c()`, `s()`) to look up values from maps cleanly
- 📐 **Mixins** (`@mixin media`, `@mixin container`, `@mixin focus-ring`)
- 🔁 **`@each` loops** to generate button variants from a map of properties
- 📌 **Placeholder selectors** (`%card-base`, `%card-hover`) shared across components via `@extend`
- 🎯 **`@use 'sass:color'`** for color manipulation (`color.adjust`)
- 🪺 **Deep nesting** (BEM-style with `&__element`, `&--modifier`)
- 🧮 **Math operations** for responsive spacing

---

## 🧠 What I Practiced Building This

- Modern Sass architecture: tokens → mixins → components
- BEM class naming for clear scope and reusability
- Building a real testimonial carousel from scratch (no Swiper / libraries)
- Smooth max-height accordion animation in pure CSS
- Compiling Sass via npm scripts and committing both source + output

---

## 👤 Author

**Md. Jahidul Islam Hemel**
Customer Support Engineer · SaaS & Shopify · Dhaka, Bangladesh

- 🌐 Portfolio: [jahidhemel.github.io](https://jahidhemel.github.io)
- 💼 LinkedIn: [md-jahidul-islam-hemel](https://www.linkedin.com/in/md-jahidul-islam-hemel)
- 📧 Email: jahidhemel@gmail.com

---

## 📄 License

Released for educational and portfolio purposes. Feel free to fork, learn from, or remix the code — credit appreciated.
