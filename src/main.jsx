import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Importo il css dove ho messo roba tailwind
import './index.css';
import App from "./App.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// Importa il CSS di Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";
// Importa tailwind


const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
