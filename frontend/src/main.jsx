import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LoadingProvider } from "./context/LoadingProvider.jsx";
import AppContextProvider from "./context/AppContext.jsx";
import Header from "./components/Header.jsx";
import AdminContextProvider from "./context/AdminContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadingProvider>
      <AdminContextProvider>
        <AppContextProvider>
          <BrowserRouter>
          <Header />
          <App />
          </BrowserRouter>
        </AppContextProvider>
      </AdminContextProvider>
    </LoadingProvider>
  </StrictMode>
);
