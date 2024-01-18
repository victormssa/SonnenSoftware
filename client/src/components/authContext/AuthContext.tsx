"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';

interface AuthContextProps {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}


const verifyToken = (token: string) => {
  console.log('Token recebido:', token);

  try {
    const decoded = jwt.decode(token);
    return decoded;
  } catch (error) {
    console.error('Erro ao decodificar o token:', error);
    return null;
  }
};



export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Verifica se existe um token armazenado em cookies
    const storedSessionInfo = Cookies.get('session_info');

    if (storedSessionInfo) {
      try {
        const sessionInfo = JSON.parse(storedSessionInfo);

        // Verifica se o token 'tk' está presente e é válido
        if (sessionInfo && sessionInfo.tk) {
          const decodedToken = verifyToken(sessionInfo.tk);
          console.log('Token decodificado:', decodedToken);

          if (decodedToken && typeof decodedToken === 'object' && 'id' in decodedToken) {
            // Token válido, define o estado de isLoggedIn como true
            setIsLoggedIn(true);
            const userId = decodedToken.userId;
            router.push(`/perfil/${userId}`);
          }
        }
      } catch (error) {
        console.error('Erro ao analisar o cookie session_info:', error);
      }
    }
  }, []);

  const login = (token: string) => {
    console.log('Token recebido no Login:', token);
    const decodedToken = verifyToken(token);
    console.log('Token decodificado:', decodedToken);
    if (decodedToken && typeof decodedToken === 'object' && 'id' in decodedToken) {
      setIsLoggedIn(true);
      const userId = decodedToken.userId;

      var existingCookies = Cookies.get();
      if ('session_info' in existingCookies) {
        var sessionInfo = JSON.parse(existingCookies['session_info']);
        sessionInfo.tk = token;
        Cookies.set('session_info', JSON.stringify(sessionInfo), {  secure: true, httpOnly: true, sameSite: 'strict', });
      } else {
        Cookies.set('session_info', JSON.stringify({ tk: token }), {  secure: true, httpOnly: true, sameSite: 'strict', });
      }

      router.push(`/perfil/${userId}`);
    } else {
      console.error('Erro ao decodificar o token ou propriedade userId não encontrada.');
    }
  };

  const logout = () => {
    router.push(`/`);
    Cookies.remove('session_info');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
