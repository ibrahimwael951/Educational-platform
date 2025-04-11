"use client";
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";

// Define a type for your user (adjust as needed)
interface User {
  id: string;
  email: string;
  name?: string;
}

// Define the shape of the context
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

// Create the context with an undefined default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component that wraps your app and makes auth object available via context
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const api = process.env.NEXT_PUBLIC_API_BASE_URL;

  // Login function: makes an API call to your login endpoint
  const login = async (email: string, password: string) => {
    try {
      const res = await fetch(`${api}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Login failed");
      }

      const data = await res.json();
   
      setUser(data.user);
    } catch (error) {
      throw error;
    }
  };

  // Logout function: makes an API call to your logout endpoint
  const logout = async () => {
    try {
      await fetch(`${api}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Optional: Check if a user session exists when the component mounts
  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await fetch(`${api}/auth/me`, {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        }
      } catch (error) {
        console.error("Not authenticated:", error);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, [api]);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
