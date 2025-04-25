import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AppContextProvider from "./context/AppContext.jsx";
import Header from "./components/Header.jsx";
import AdminContextProvider from "./context/AdminContext.jsx";
import { BrowserRouter } from "react-router-dom";
import LoadingContextProvider from "./context/LoadingContext.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <LoadingContextProvider>
        <AdminContextProvider>
          <AppContextProvider>
            <BrowserRouter>
              <Header />
              <App />
            </BrowserRouter>
          </AppContextProvider>
        </AdminContextProvider>
      </LoadingContextProvider>
    </HelmetProvider>
  </StrictMode>
);
