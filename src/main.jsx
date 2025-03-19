import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { AuthContextProvider } from "./context/AuthContext.jsx";
/* import "./index.css"; */
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App.jsx";
import "./assets/styles/global.css"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
