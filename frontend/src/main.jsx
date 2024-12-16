import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Header from "./components/Header.jsx";
import { LoadingProvider } from "./context/LoadingProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadingProvider>

      <Header />
      <App />
    </LoadingProvider>
  </StrictMode>
);
