# Profile Card

A semantic, accessible, and responsive profile card built with plain HTML, CSS, and JavaScript — no frameworks or build tools required.

## Features

- Displays name, bio, avatar, current epoch time (ms), social links, hobbies, and dislikes
- Live epoch time that updates every second via `Date.now()`
- Fully responsive: stacks vertically on mobile, side-by-side layout on wider screens
- Accessible: WCAG AA contrast, visible focus styles, `aria-live` for the time element, semantic HTML (`article`, `figure`, `nav`, `section`)
- All elements include `data-testid` attributes for automated testing

## Project Structure

```
.
├── index.html    # Markup and structure
├── style.css     # Responsive styles
├── script.js     # Live epoch time updater
└── Anjola.jpg    # Avatar image
```

## Running Locally

No build step needed. Just open the file in a browser:

### Open directly

Double-click `index.html`, or drag it into any browser window.

## Data Test IDs

| Element | `data-testid` |
|---|---|
| Card root | `test-profile-card` |
| Name | `test-user-name` |
| Biography | `test-user-bio` |
| Epoch time | `test-user-time` |
| Avatar image | `test-user-avatar` |
| Social links list | `test-user-social-links` |
| LinkedIn link | `test-user-social-linkedin` |
| Twitter / X link | `test-user-social-twitter` |
| GitHub link | `test-user-social-github` |
| Hobbies list | `test-user-hobbies` |
| Dislikes list | `test-user-dislikes` |
