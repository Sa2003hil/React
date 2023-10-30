import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-p2mzctj5na8ayq77.us.auth0.com"
    clientId="T3BWacY8Icaayo4rjuoraSNKBNUiRpFi"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>

    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Auth0Provider >



);
