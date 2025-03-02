import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

npm install eslint vite-pluging-eslint eslint-config-react-app --save-dev
.eslintrc.json