import { useState, useEffect } from "react";
import { useUser } from "./useUser";

export const useAuth = () => {
  const { addUser, removeUser, user } = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);    
  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [user]);

  // login
  const login = (firstName: string, lastName: string, password: string, mobile: string) => {
    addUser({firstName, lastName,password, mobile });
  };

  const logout = () => {
    removeUser();
  };

  return { login, logout, user, isAuthenticated };
};