# Canvas Assignment Style Guide

This folder contains assignments designed to be copied and pasted directly into **Canvas LMS (Instructure)**. All Canvas-ready HTML files must follow these rules to ensure they look professional and remain functional.

## The "Canvas Design" Prompt

When generating or updating assignment HTML for Canvas, use this prompt:

> **Act as an Instructional Designer and Web Developer.**
> **Task:** Convert the text content I provide below into a professional, responsive HTML layout suitable for the **Canvas LMS (Instructure)**.
> **Technical Constraints (Crucial):**
> 1. **Inline CSS Only:** You must write all styling inside `style=""` attributes. Do not use `<style>` tags or external CSS classes, as Canvas strips them out.
> 2. **Container:** Wrap the entire content in a main `div` with a `max-width: 900px`, centered margin, and a clean font family (Segoe UI, Helvetica, Arial).
> 3. **Responsiveness:** Ensure tables and grids use percentage widths or Flexbox so they don't break on mobile screens.
> 
> **Design Style:**
> * **Visual Aesthetic:** Clean, modern, and flat (similar to Bootstrap 5 documentation).
> * **Color Palette:** Use **#563d7c (Purple)** for main headers/accents and **#0056b3 (Blue)** for secondary sections. Use **#fff3cd (Yellow)** for warning/important note boxes.
> * **Components:**
>   * **Cards:** Use bordered `divs` with rounded corners and light padding to group related content (like modules).
>   * **Alert Boxes:** Create distinct colored boxes for "Warnings" or "Teacher Notes."
>   * **Tables:** Style tables with clean borders and a light header background color.

## Implementation Details

### Colors
- **Primary Header/Accent:** `#563d7c` (Purple)
- **Secondary Headers/Links:** `#0056b3` (Blue)
- **Warning/Teacher Note Background:** `#fff3cd` (Yellow)
- **Warning/Teacher Note Text:** `#856404`
- **Warning/Teacher Note Border:** `#ffeeba` (Solid) / `#ffc107` (Left accent)

### Core Structure
```html
<div style="max-width: 900px; margin: 20px auto; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f8f9fa; padding: 20px; border-radius: 10px;">
    <!-- Content goes here -->
</div>
```

### Banner/Title
```html
<div style="background-color: #563d7c; color: #ffffff; padding: 30px; border-radius: 8px; text-align: center; margin-bottom: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <h1 style="margin: 0; font-size: 28px; font-weight: 600; letter-spacing: 0.5px;">Assignment Title</h1>
    <p style="margin: 10px 0 0; font-size: 18px; opacity: 0.9;">Subtitle or Role</p>
</div>
```

### Cards
```html
<div style="background-color: #ffffff; border: 1px solid #dee2e6; border-radius: 8px; padding: 25px; margin-bottom: 25px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h2 style="color: #563d7c; margin-top: 0; border-bottom: 2px solid #e9ecef; padding-bottom: 10px; font-size: 22px;">Section Title</h2>
    <!-- Content -->
</div>
```
