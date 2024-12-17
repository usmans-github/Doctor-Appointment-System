import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LoadingProvider } from "./context/LoadingProvider.jsx";
import AppContextProvider from "./context/AppContext.jsx";
import Header from "./components/Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadingProvider>
    <AppContextProvider>
      <Header />
      <App />
    </AppContextProvider>
    </LoadingProvider>
  </StrictMode>
);
