import { copyFileSync } from "node:fs";

// GitHub Pages (and many static hosts) serve 404.html for unknown paths.
// Copying the app shell keeps old URLs such as /about from hard-failing.
copyFileSync("build/index.html", "build/404.html");
