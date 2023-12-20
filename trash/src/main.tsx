import React from "react";
import ReactDOM from "react-dom";
import Rotas from "./routes";
import "./assets/style/global.css";
import CookieBanner from "./components/cookieBanner/CookieBanner";

const darkMode = "darkMode";

// Verifica se o cookie 'darkMode' já existe
const darkModeCookie = document.cookie
  .split(";")
  .find((cookie) => cookie.trim().startsWith(`${darkMode}=`));

// Se o cookie 'darkMode' for undefined, define o valor como 'true'
if (!darkModeCookie) {
  document.cookie = `${darkMode}=true; path=/`;
}

ReactDOM.render(
  <React.StrictMode>
    <Rotas />
    <CookieBanner />
  </React.StrictMode>,
  document.getElementById("root")
);
