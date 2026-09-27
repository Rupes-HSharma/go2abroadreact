import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { WebsiteSettingsProvider } from "./context/WebsiteSettingsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <WebsiteSettingsProvider>
        <App />
      </WebsiteSettingsProvider>
    </BrowserRouter>
  </StrictMode>
);
