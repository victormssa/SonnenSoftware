"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieValue = document.cookie
    ?.split('; ')
    .find((row) => row.startsWith('session_info'))
    ?.split('=')[1];
  
  let isCookieAccepted = false;
  
  try {
    const parsedCookieValue = cookieValue ? JSON.parse(decodeURIComponent(cookieValue)) : {};
    isCookieAccepted = parsedCookieValue.cc === true;
  } catch (error) {
    console.error("Erro ao fazer parse do cookie:", error);
  }
  
  const localStorageValue = localStorage.getItem('session_info') || '{}';
  const isLocalStorageAccepted = JSON.parse(localStorageValue).cc === true;

    if (!isCookieAccepted && !isLocalStorageAccepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    document.cookie = 'session_info=' + encodeURIComponent(JSON.stringify({ cc: true })) + '; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('session_info', JSON.stringify({ cc: false }));
    setShowBanner(false);
  };
  
  const handleLater = () => {
    setShowBanner(false);
  };

  if (!showBanner) {
    return null; // Não renderiza o banner se não for necessário
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
            funcionamento e para melhorar seu desenvolvimento. Os cookies serão configurados apenas após o consentimento. Se possuir alguma dúvida <Link href="/politicas/privacidade" className="text-red-500 hover:underline">Leia as políticas de cookies</Link>.
          </p>

          <p className="mt-3 text-sm text-gray-300">
            Ao fechar esse modal, as configurações padrões serão salvas.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-4 shrink-0">
            <button
              className="text-xs shadow-lg bg-green-700 text-white hover:bg-green-600 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none"
              onClick={handleAccept}
            >
              Aceitar
            </button>
            <button
              className="text-xs shadow-lg bg-red-700 text-white hover:bg-red-600 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none"
              onClick={handleDecline}
            >
              Não Aceitar
            </button>
            <button
              className="text-xs shadow-lg bg-gray-500 text-white hover:bg-gray-400 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none"
              onClick={handleLater}
            >
              Mais Tarde
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookieBanner;
