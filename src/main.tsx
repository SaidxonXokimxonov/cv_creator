import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./pages/home";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
		<App />
    </StrictMode>
  </BrowserRouter>
);
