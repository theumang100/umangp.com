import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./css/style.css";
import "./css/additions.css";
import "./css/dark.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

console.log(
  "Hey — curious developer.\n\nIf you're reading this, you opened DevTools.\n\n— Umang"
);
