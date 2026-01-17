import { createContext, useContext, useEffect, useState } from "react";

type User = {
  userId: string;
};

type AuthContextType = {
  user: User | null;
  login: (userId: string, token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // 🔁 Restore auth on refresh
  useEffect(() => {
    const stored = localStorage.getItem("auth");
    if (stored) {
      const { userId } = JSON.parse(stored);
      setUser({ userId });
    }
  }, []);

  const login = (userId: string, token: string) => {
    localStorage.setItem("auth", JSON.stringify({ userId, token }));
    setUser({ userId });
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);