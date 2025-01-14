// Importo `StrictMode` da React, uno strumento utile per identificare potenziali problemi nel codice React.
import { StrictMode } from "react";

// Importo `createRoot` da React DOM, utilizzato per creare il punto d'ingresso dell'applicazione React.
import { createRoot } from "react-dom/client";

// Importo il file CSS per lo stile globale dell'applicazione.
import "./index.css";

// Importo il componente principale dell'applicazione, `App`, che contiene la logica e i componenti principali.
import App from "./App.jsx";

// Importo `QueryClientProvider` e `QueryClient` da React Query, utilizzati per gestire lo stato globale delle query.
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// Creo un'istanza di `QueryClient`, necessaria per configurare e gestire il comportamento delle query in React Query.
const queryClient = new QueryClient();

// Utilizzo `createRoot` per collegare React al DOM e specificare dove deve essere renderizzata l'applicazione.
// In questo caso, l'app sarà renderizzata all'interno dell'elemento con `id="root"`.
createRoot(document.getElementById("root")).render(
  // Utilizzo `StrictMode` per avvolgere l'applicazione.
  // Questo aiuta a identificare problemi di performance o codice deprecato durante lo sviluppo.
  <StrictMode>
    {/* Avvolgo l'applicazione nel `QueryClientProvider`, necessario per fornire il contesto di React Query. */}
    {/* Passo l'istanza di `queryClient` come prop `client`, che gestirà tutte le query dell'app. */}
    <QueryClientProvider client={queryClient}>
      {/* Renderizzo il componente principale dell'applicazione, `App`. */}
      <App />
    </QueryClientProvider>
  </StrictMode>
);
