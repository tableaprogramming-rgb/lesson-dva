# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Digital Visual Arts (DVA) curriculum** — a web-based educational platform designed for college-aged students learning design principles. The platform features a module-based structure with interactive slide presentations for each topic.

### Key Information
- **Course**: Digital Visual Arts (DVA) - 3 units, Second Year Second Semester
- **Institution**: University of San Jose-Recoletos (CSIT Department)
- **Format**: Interactive HTML/CSS/JavaScript slide presentations
- **9 modules** covering design fundamentals through mecha design
- **Study materials**: Each module has both HTML presentations and Markdown transcripts

## Project Architecture

### Directory Structure
```
lesson-dva/
├── index.html                    # Main course hub
├── assets/
│   ├── css/styles.css           # Shared styling (glassmorphism design system)
│   ├── js/script.js             # Slide controller logic
│   └── images/                  # Design reference images
├── module-[N]-[name]/
│   ├── [name].html              # Interactive slide deck
│   └── [name].md                # Student transcript/study guide
├── PEDAGOGY_AND_STYLE.md        # Design principles & teaching methodology
├── course_outline.md             # Syllabus & learning objectives
└── CLAUDE.md                     # This file
```

### Module Categories

**Prelim (Preliminary)**
- Module 0: Orientation
- Module 1: Design Fundamentals
- Module 2: Poster Design

**Midterm**
- Module 3: Typography
- Module 4: Pattern Design
- Module 5: Packaging Design
- Module 6: Department Projects

**Final**
- Module 7: Branding & Logo Design
- Module 8: Digital Illustration
- Module 9: Mecha Design

## Technical Architecture

### Design System (Glassmorphism Aesthetic)
The platform uses a **modern "tech" aesthetic** with:
- **Dark Mode**: Navy/black background (`--bg-dark: #0f0f1a`)
- **Glass UI**: Translucent, blurred elements with `backdrop-filter: blur()`
- **Gradient Accents**: Indigo → Purple → Pink (`--gradient-1`)
- **Typography**: Inter font for body, Fira Code for code snippets
- **CSS Variables**: All colors, gradients, and glass effects defined at `:root`

See `PEDAGOGY_AND_STYLE.md` for detailed design rationale.

### Frontend Stack
- **HTML5**: Semantic markup (`<section>`, `<nav>`, `<header>`)
- **CSS3**: Flexbox, Grid, CSS variables, backdrop filters
- **JavaScript (Vanilla)**: No frameworks — minimal, vanilla JS for slide navigation
- **Responsive**: Mobile-first design with CSS Grid (`repeat(auto-fit, minmax(...))`)

### Slide Presentation System
The core is a **slide deck controller** (`assets/js/script.js`):

```javascript
// Navigation methods:
- Click: Previous/Next buttons
- Keyboard: Arrow keys (Left/Right), Space/Enter (next), Backspace (prev), Home/End
- Touch: Swipe gestures (threshold: 50px)
- Progress tracking: Bottom navigation bar shows "X / Total" and progress fill
```

Each module loads:
1. **HTML**: Organized as `.slide` sections within `.slides-container`
2. **Styles**: Inherits from `assets/css/styles.css`
3. **Controller**: `script.js` automatically detects slides and initializes navigation

### Key CSS Classes & Patterns
- `.slides-container`: Full viewport slide wrapper
- `.slide`: Individual slide (transitions with `opacity`, `visibility`, `transform`)
- `.slide.active`: Currently visible slide
- `.slide.prev`: Previous slide (stored for reverse transitions)
- `.gradient-text`: Text with gradient fill (Indigo→Pink)
- `.card`: Glassmorphism card (hover effect: `translateY(-5px)`)
- `.tag`: Uppercase label badge
- `.grid-container`: Responsive grid for content cards

## Pedagogical Approach

### Design Philosophy
1. **Context-First**: Explain "why" before "how"
2. **Metaphor Method**: Use real-world analogies for complex concepts
3. **Scaffolding**: Progress from infrastructure → history → technical implementation
4. **Modular Learning**: Separate topics prevent information overload
5. **Living Example**: The presentation itself demonstrates HTML5/CSS best practices

### Instructional Tone
- Encouraging & accessible to absolute beginners
- Empowering conclusions with actionable next steps
- Welcoming but technically precise

See `PEDAGOGY_AND_STYLE.md` for full pedagogical guidelines.

## Development Workflow

### Local Development
No build tools required. The project is a pure HTML/CSS/JavaScript static site.

1. **Edit slides**: Modify `module-[N]-[name]/[name].html`
2. **Edit styles**: Update `assets/css/styles.css` (shared across all modules)
3. **Edit behavior**: Update `assets/js/script.js` (slide controller)
4. **Edit transcripts**: Update `.md` files for student study guides

### Viewing Changes
- Open any `.html` file directly in a browser (no server needed)
- Changes to CSS/JS refresh in real-time (F5/Cmd+R)

## Adding a New Module

### Checklist
1. Create new directory: `module-[N]-[name]/`
2. Create presentation file: `[name].html` (copy structure from existing module)
3. Create transcript file: `[name].md`
4. Add link to course hub: Edit `index.html` module-card grid
5. Follow design system: Use CSS variables and existing classes from `styles.css`
6. Follow pedagogical approach: See `PEDAGOGY_AND_STYLE.md` for content structure

### HTML Template Pattern
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Module Name] | Digital Visual Arts</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../assets/css/styles.css">
</head>
<body>
    <div class="progress-bar">
        <div class="progress-fill" id="progressFill"></div>
    </div>

    <div class="slides-container">
        <!-- Section 1: Title Slide -->
        <section class="slide title-slide">
            <div class="slide-content">
                <span class="tag">DVA Module [N]</span>
                <h1 class="main-title gradient-text">[Module Title]</h1>
                <p class="subtitle">[Subtitle]</p>
                <!-- Add content cards using .card class -->
            </div>
        </section>

        <!-- Additional slides: -->
        <section class="slide">
            <div class="slide-content">
                <!-- Content -->
            </div>
        </section>
    </div>

    <!-- Navigation UI (auto-populated by script.js) -->
    <div class="keyboard-hint">Use <kbd>←</kbd> <kbd>→</kbd> or <kbd>Space</kbd> to navigate</div>
    <div class="slide-nav">
        <button class="nav-btn" id="prevBtn">←</button>
        <span class="slide-counter" id="slideCounter">1 / 1</span>
        <button class="nav-btn" id="nextBtn">→</button>
    </div>

    <script src="../assets/js/script.js"></script>
</body>
</html>
```

## Important Files & Their Roles

| File | Purpose |
|------|---------|
| `PEDAGOGY_AND_STYLE.md` | Design principles, tone, aesthetic rationale, material requirements |
| `course_outline.md` | Syllabus, learning objectives, grading, resources |
| `assets/css/styles.css` | Global design system (variables, layout, animations) |
| `assets/js/script.js` | Slide controller (keyboard, touch, progress tracking) |
| `index.html` | Course hub—links to all modules |

## Color Palette (CSS Variables)

- **Primary**: `#6366f1` (Indigo)
- **Accent**: `#f472b6` (Pink)
- **Background**: `#0f0f1a` (Navy/Black)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#a1a1aa` (Gray)
- **Gradient**: Linear blend Indigo → Purple → Pink

All colors defined as CSS custom properties in `:root` for consistency.

## Common Maintenance Tasks

### Update Global Styles
- Edit `assets/css/styles.css` → affects all modules

### Change Navigation Behavior
- Edit `assets/js/script.js` → adjust slide transitions, keyboard shortcuts, swipe sensitivity

### Fix Broken Links in Hub
- Edit `index.html` → update module-card href paths

### Improve Module Content
- Edit `module-[N]-[name]/[name].html` → add/remove slides
- Edit `module-[N]-[name]/[name].md` → update transcripts

## Notes for Contributors

- **Consistency**: Always use the gradient text class (`gradient-text`) for titles
- **Spacing**: Use CSS custom properties; avoid hard-coded colors
- **Responsiveness**: Test layouts on mobile (CSS Grid with `auto-fit` handles this)
- **Accessibility**: Use semantic HTML; ensure keyboard navigation works
- **Performance**: Vanilla JS is intentional—no bloat. Keep it light.
- **Study Materials**: Keep `.md` files up-to-date as complementary study guides
