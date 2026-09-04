# Dr. Omar Faruk Dipu — Portfolio Website

Static site: `index.html`, `style.css`, `script.js`. No build step, no backend — works directly on GitHub Pages.

## 1. Add your images

Create this folder in your repo (if it isn't already there) and drop your photos in with these **exact filenames** — the site is already wired up to them:

```
assets/images/
├── file_00000000e9ac820797350ffa6769dd60.png   → hero photo + gallery (white coat & stethoscope)
├── IMG-20260811-WA0008.jpg                      → About section + gallery (academic moment)
└── Messenger_creation_ED91A35A-4960-4CB1-AAEE-0506F4FE2A95.jpeg  → gallery (Operating Theatre, large tile)
```

If you'd rather rename them to something cleaner (e.g. `hero.jpg`, `academic.jpg`, `ot.jpg`), just update the matching `src="assets/images/..."` and `data-full="..."` attributes in `index.html` — every reference is a plain relative path, no other code changes needed.

## 2. Add future gallery images

To add a new photo to the Gallery section, copy one `<button class="gallery-item ...">` block in `index.html` and point it at your new file — the grid and lightbox will pick it up automatically. Add `item-lg` to the class list to make a tile large/featured.

## 3. Update social links

In the Contact section of `index.html`, replace the placeholder `href="#"` values with your real email (`mailto:you@example.com`), Facebook, LinkedIn, and Instagram URLs.

## 4. Deploy

Push `index.html`, `style.css`, `script.js`, and the `assets/images/` folder to the root of the `dromarfarukdipu.github.io` repository, then commit and push to `main`. GitHub Pages will publish it automatically at your existing URL — no settings changes needed since Pages is already enabled.

## 5. Local preview

Open `index.html` directly in a browser, or run a quick local server from the folder:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.
