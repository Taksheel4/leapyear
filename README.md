# Look Before You Leap!

A complete static educational website about leap-year mathematics.

## Included files
- index.html — main page
- style.css — responsive layout, Earth–Sun animation, and print styling
- math.js — exact Gregorian leap-year calculation
- app.js — calculator, explorer, comparison panels, and presentation controls
- .nojekyll — serve this as a plain static website

## Preview locally
Extract the ZIP and open index.html in a modern browser. Keep all four website files in the same folder. No installation, build command, API key, or internet connection is required for the website features.

## Upload to GitHub Pages
1. Extract this ZIP.
2. Upload index.html, style.css, math.js, app.js, and .nojekyll to the top level of your GitHub repository. You can include this README too.
3. Enable GitHub Pages for the branch containing these files and select the repository root as the publishing folder.
4. Use the website URL supplied by GitHub Pages to open and share the site.

Upload the extracted files, not the ZIP itself. index.html must sit at the publishing root. All asset references are relative, so the website also works at a repository subpath.

## Features
- Animated Earth and Sun illustration (not to scale)
- Leap-year calculator with exact step-by-step division and remainder
- Interactive 2000–2040 explorer: 11 leap years and 30 common years
- Special-year investigations: 2000, 2024, 2100, 2400
- Decimal accumulation and 400-year correction comparisons
- Presentation, motion, and print controls
- Responsive layouts and reduced-motion support

## Mathematics
A year is leap if it is divisible by 400, or if it is divisible by 4 but not 100. Positive whole-number years up to 40 digits are accepted using BigInt. The Gregorian rule is applied mathematically to earlier years as well; this is not a historical calendar adoption model.

Source: Ganita Prakash, Grade 7, Part II, section 4.4, pages 88–92. The Earth-year approximation used is 365.2422 days.

## Verification
Calculator boundary cases, invalid inputs, large years, year counts, decimal accumulation, JavaScript syntax, and HTML anchor targets were checked. Visual browser testing was not available during creation.

## Hosting independence
This export has no ChatGPT sign-in dependency or private-site access restriction. Visibility of the GitHub Pages deployment is controlled by its hosting settings.
