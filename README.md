# Advanced Portfolio Website 🚀

A modern, responsive portfolio website built using **HTML5, CSS3, and JavaScript**, showcasing advanced CSS concepts such as **CSS Grid, Flexbox, CSS Variables, Animations, Responsive Design, and BEM Methodology**. The project demonstrates modern frontend development practices and provides an interactive user experience with dark/light mode support, scroll animations, and dynamic UI elements.

---

## 📌 Project Overview

This portfolio website was developed as part of the **Week 5: Advanced CSS & Modern Layouts** project. The primary objective was to redesign a personal portfolio using advanced CSS techniques while ensuring responsiveness, accessibility, and maintainability.

The website highlights:

* Personal Introduction
* Education Timeline
* Technical Skills
* Featured Projects
* Coding Profiles
* Contact Form

---

## ✨ Features

### 🎨 Modern UI/UX

* Clean and professional design
* Glassmorphism-inspired cards
* Gradient hero section
* Smooth transitions and animations

### 📱 Fully Responsive Design

* Mobile-first approach
* Responsive layouts using CSS Grid and Flexbox
* Optimized for desktop, tablet, and mobile devices

### 🌙 Dark / Light Theme

* Theme toggle button
* CSS Variables-based theming
* Theme preference stored using Local Storage

### ⚡ Interactive Features

* Typing text animation
* Scroll reveal animations
* Active navigation highlighting
* Scroll progress indicator
* Smooth scrolling navigation

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### CSS Concepts

* CSS Grid
* Flexbox
* CSS Variables
* Media Queries
* Animations & Transitions
* Pseudo-elements
* BEM Methodology

### JavaScript Features

* DOM Manipulation
* Local Storage
* Intersection Observer API
* Event Listeners
* Dynamic Typing Animation

---

## 📂 Project Structure

```text
portfolio/
│
├── index.html
│
├── css/
│   ├── main.css
│   ├── layout.css
│   └── animations.css
│
├── js/
│   └── script.js
│
└── images/
    ├── profile.png
    ├── frontend.jpg
    ├── backend.jpg
    └── programming.jpg
```

---

## 📖 Sections Included

### 1. Hero Section

* Professional introduction
* Animated typing effect
* Call-to-action buttons
* Profile image

### 2. About Section

* Personal background
* Academic information
* Interests and goals

### 3. Education Timeline

* Academic journey visualization
* IIT BHU Varanasi details

### 4. Skills Section

* Frontend Technologies
* Backend Technologies
* Programming Languages

### 5. Projects Section

* Personal Finance Management Platform
* Intelligent Noise Information System

### 6. Coding Profiles

* GitHub
* LinkedIn

### 7. Contact Section

* Contact form
* User interaction interface

---

## ⚙️ Setup Instructions

### Clone Repository

```bash
git clone https://github.com/your-username/portfolio.git
```

### Navigate to Project Folder

```bash
cd portfolio
```

### Run Project

Open `index.html` directly in your browser

OR

Use VS Code Live Server Extension:

```bash
Right Click -> Open with Live Server
```

---

## 🧩 Advanced CSS Techniques Used

### CSS Grid

Used for responsive layouts:

```css
.skills__grid {
    display: grid;
    grid-template-columns:
    repeat(auto-fit, minmax(300px, 1fr));
}
```

### Flexbox

Used for:

* Navigation bar
* Hero section alignment
* Button groups
* Profile links

### CSS Variables

```css
:root {
    --clr-primary: #2563eb;
    --clr-bg: #f8fafc;
}
```

Benefits:

* Easier theme management
* Improved maintainability
* Consistent styling

### BEM Methodology

Example:

```html
<div class="hero__container"></div>
```

Naming Convention:

```text
Block__Element--Modifier
```

Example:

```text
hero
hero__title
btn--primary
```

---

## 🎯 JavaScript Functionality

### Theme Toggle

Allows switching between:

* Light Mode
* Dark Mode

Theme preference is stored using:

```javascript
localStorage
```

### Typing Animation

Dynamically cycles through professional roles:

```text
Full Stack Developer
MERN Stack Developer
Problem Solver
Competitive Programmer
```

### Scroll Reveal Animation

Implemented using:

```javascript
IntersectionObserver
```

### Scroll Progress Indicator

Tracks page reading progress and updates dynamically.

---

## 📊 Performance Optimizations

* Modular CSS architecture
* Reusable CSS variables
* Lightweight JavaScript
* Intersection Observer instead of scroll-heavy animations
* Responsive image handling
* Hardware-accelerated CSS transforms
* Minimal DOM manipulation

---

## 🧪 Testing

| Test Case         | Expected Result            | Status   |
| ----------------- | -------------------------- | -------- |
| Theme Toggle      | Switches between themes    | ✅ Passed |
| Typing Animation  | Text changes dynamically   | ✅ Passed |
| Scroll Reveal     | Sections animate on view   | ✅ Passed |
| Responsive Design | Adapts to all screen sizes | ✅ Passed |
| Navigation Links  | Smooth scrolling works     | ✅ Passed |
| Contact Form      | Form interaction works     | ✅ Passed |

---

## 📸 Screenshots

### Home Page

* Hero section
* Navigation bar
* Profile image

### About Section

* Personal information
* Academic details

### Skills Section

* Technical expertise showcase

### Projects Section

* Featured projects

### Contact Section

* Contact form

### Dark Mode

* Alternate theme demonstration

> Add screenshots inside a `screenshots/` folder and update this section accordingly.

---

## 🚀 Future Enhancements

* Backend integration for contact form
* EmailJS support
* Project filtering system
* Blog section
* Download Resume feature
* Multi-language support
* PWA support
* Performance auditing with Lighthouse

---

## 👨‍💻 Author

**Bhukya Upender**

B.Tech, Electronics and Communication Engineering
IIT BHU Varanasi

* GitHub: [https://github.com/upender-01](https://github.com/upender-01)
* LinkedIn: [https://www.linkedin.com/in/upender-bhukya-2767472a8/](https://www.linkedin.com/in/upender-bhukya-2767472a8/)

---

## 📄 License

This project is created for educational and portfolio purposes. Feel free to use and customize it for personal learning and development.

