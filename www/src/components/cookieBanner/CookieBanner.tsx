"use client";
import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [cookieConsent, setCookieConsent] = useState(() => {
    const consent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookieConsent="));
    return consent ? consent.split("=")[1] === "true" : "";
  });

  const handleAcceptCookies = () => {
    setCookieConsent(true);
    document.cookie =
      "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  };

  const handleDeclineCookies = () => {
    setCookieConsent(false);
    document.cookie =
      "cookieConsent=false; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    // Logic to close the modal
    const modal = document.getElementById("cookie-modal");
    if (modal) {
      modal.style.display = "none";
      enableSiteInteraction();
    }
  };

  const disableSiteInteraction = () => {
    document.body.style.pointerEvents = "none";
  };

  const enableSiteInteraction = () => {
    document.body.style.pointerEvents = "auto";
  };

  useEffect(() => {
    if (cookieConsent !== "") {
      if (cookieConsent === true || cookieConsent === false) {
        enableSiteInteraction();
      } else {
        disableSiteInteraction();
      }
    }
  }, [cookieConsent]);

  if (cookieConsent === true || cookieConsent === false) {
    return null;
  }

  return (
    <>
      <section
        id="cookie-modal"
        className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="max-w-md shadow-2xl p-4 mx-auto bg-[#101010] rounded-2xl">
          <h2 className="font-semibold  text-white">
            🍪 Nós usamos cookies!
          </h2>

          <p className="mt-4 text-sm text-gray-300">
            Olá, este site utiliza cookies essenciais para garantir seu correto
            funcionamento e para melhorar seu desenvolvimento. Os cookies serão configurados apenas após o consentimento. Se possuir alguma dúvida <a href="/politicas/cookies" className="text-red-500 hover:underline">Leia as políticas de cookies</a>.
          </p>

          <p className="mt-3 text-sm text-gray-300">
            Ao fechar esse modal, as configurações padrões serão salvas.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-4 shrink-0">
            <button
              className="text-xs shadow-lg bg-green-700 text-white hover:bg-green-600 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none"
              onClick={handleAcceptCookies}
            >
              Aceitar
            </button>
            <button
              className="text-xs shadow-lg bg-red-700 text-white hover:bg-red-600 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none"
              onClick={handleDeclineCookies}
            >
              Não Aceitar
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookieBanner;
