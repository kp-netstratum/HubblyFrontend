import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
  
    <Auth0Provider
      domain="dev-dt1vz0cmnm8r0wnv.us.auth0.com"
      clientId="YOHLVTUwN2ReEwPOzpXjoQ8g1Maf1G6m"
    //   domain="dev-bpz3fesbt2epuh37.us.auth0.com"
    // clientId="T0QlEym5JqRr0qUNKHKuuBnokOAiZLhe"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
);
