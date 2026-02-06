import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { StoreProvider } from "./context/StoreContext";
import { Router } from "wouter"; // ya BrowserRouter agar React Router use kar rahe ho

const root = createRoot(document.getElementById("root")!);

root.render(
  <GoogleOAuthProvider clientId="805955292530-rfa6bjssisjj69mhi0a1j7asi4irdp4t.apps.googleusercontent.com">
    <StoreProvider>
      <Router>
        <App />
      </Router>
    </StoreProvider>
  </GoogleOAuthProvider>
);
