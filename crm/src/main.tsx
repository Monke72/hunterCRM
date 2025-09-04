import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import AppRouter from "@app/Provider/ui/AppRouter.tsx";

createRoot(document.getElementById("root")!).render(
  <AppRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </AppRouter>
);
