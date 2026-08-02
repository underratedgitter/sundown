<div align="center">

# 🌅 Sundown Studios
### Interactive Agency Website Clone

*A pixel-perfect, animation-rich recreation of the Sundown Studios website — built with vanilla web technologies.*

<br/>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Locomotive Scroll](https://img.shields.io/badge/Locomotive%20Scroll-3.5.4-black?style=for-the-badge)
![Swiper.js](https://img.shields.io/badge/Swiper.js-v11-6332F6?style=for-the-badge&logo=swiper&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

<br/>

[![Last Commit](https://img.shields.io/github/last-commit/underratedgitter/sundown?style=flat-square&color=purple)](https://github.com/underratedgitter/sundown/commits/main)

</div>

---

## 📌 Overview

A front-end implementation of the [Sundown Studios](https://www.sundownstudio.com/) agency website — a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.

This project demonstrates advanced CSS animation, scroll-driven effects, and interactive JavaScript — all without any frameworks.

---

## ✨ Features

| Feature | Implementation |
|:---|:---|
| 🎬 **Animated Splash Loader** | Sequential word reveal on page load |
| 🎞️ **Background Video Hero** | Autoplay looping video with overlay layout |
| 🔄 **Infinite Marquee Text** | CSS animation scroll ticker (EXPERIENCES · CONTENT · ENVIRONMENTS) |
| 🖱️ **Hover Image Preview** | Mouse-following fixed image that swaps on element hover |
| 🎠 **Swiper.js Carousel** | Page 4 sliding gallery with smooth transitions |
| 📜 **Locomotive Smooth Scroll** | Inertia-based page scrolling for premium feel |
| 🎨 **Custom Typography** | Neue Haas Display font (Light, Roman, Medium) |
| 📱 **Responsive Layout** | Fluid grid and responsive nav |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|:---|:---|:---|
| HTML5 | — | Semantic page structure |
| CSS3 | — | Animations, layout, custom typography |
| JavaScript (Vanilla) | ES6+ | Scroll events, hover interactions, loader |
| [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/) | 3.5.4 | Smooth inertia scrolling |
| [Swiper.js](https://swiperjs.com/) | 11 | Touch-friendly slider/carousel |

---

## 📁 Project Structure

```
sundown/
├── index.html                  # Main entry point
├── style.css                   # All styles + animations
├── script.js                   # Locomotive Scroll init + hover interactions
├── icon.png                    # Favicon
├── video.mp4                   # Hero background video
├── NeueHaasDisplayLight.ttf    # Custom font — Light
├── NeueHaasDisplayRoman.ttf    # Custom font — Roman
└── NeueHaasDisplayMediu.ttf    # Custom font — Medium
```

---

## 🚀 Getting Started

No build step required — just open the file in your browser.

```bash
# Clone the repo
git clone https://github.com/underratedgitter/sundown.git
cd sundown

# Open in browser
open index.html
```

> **Note:** For the best experience (especially smooth scroll), serve the files locally via a dev server:
> ```bash
> npx serve .
> # then open http://localhost:3000
> ```

---

## 🎨 Pages & Sections

| Section | Description |
|:---|:---|
| **Loader** | Full-screen animated text reveal on page load |
| **Page 1 — Hero** | Navbar + tagline + background video loop |
| **Page 2 — Marquee** | Infinite horizontal ticker + studio philosophy text |
| **Page 3 — Work** | Hover-preview portfolio grid (7 projects) |
| **Page 4 — Carousel** | Swiper.js sliding gallery |
| **Footer** | Minimal Sundown wordmark footer |

---

## 📜 License

MIT © [Suraj Patel](https://github.com/underratedgitter)
