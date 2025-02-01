import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken") || null);
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refreshToken") || null);

  const login = async (username, password) => {
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, expiresInMins: 30 }),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        setUser(data);
        setAccessToken(data.accessToken);
        setRefreshToken(data.refreshToken);

        // Store tokens in localStorage
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
      } else {
        throw new Error(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const fetchUser = async () => {
    if (!accessToken) return;

    try {
      const res = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
      });

      const data = await res.json();
      if (res.ok) {
        setUser(data);
      } else {
        console.error("Error fetching user data:", data.message);
      }
    } catch (error) {
      console.error("Fetch user error:", error);
    }
  };

  const refreshSession = async () => {
    if (!refreshToken) return;

    try {
      const res = await fetch("https://dummyjson.com/auth/refresh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
        credentials: "include",
      });

      const data = await res.json();
      if (res.ok) {
        setAccessToken(data.accessToken);
        setRefreshToken(data.refreshToken);
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
      } else {
        console.error("Failed to refresh token:", data.message);
      }
    } catch (error) {
      console.error("Refresh session error:", error);
    }
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  useEffect(() => {
    if (accessToken) fetchUser();
  }, [accessToken]);

  return (
    <AuthContext.Provider value={{ user, login, logout, refreshSession, accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};
