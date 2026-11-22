# umangp.com

Personal site for Umang Patel, a software engineer.

[umangp.com](https://umangp.com)

## Develop

```bash
npm install
npm start
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Build and deploy

```bash
npm run build
npm run deploy
```

`npm run build` writes a static site to `build/` and copies `index.html` to `404.html` so unknown paths still load the page. `npm run deploy` publishes that folder to the `gh-pages` branch.

`public/CNAME` is `umangp.com`, so a GitHub Pages deploy keeps the custom domain.

## Content

The page is a short intro, public GitHub projects, and contact links. It does not repeat the resume, and it does not list a phone number or address.
