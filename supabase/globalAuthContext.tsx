import { createContext } from 'react';

export interface AuthContextType {
  isAuthenticated: boolean;
  user: any;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
});

export const AuthProvider = AuthContext.Provider;
