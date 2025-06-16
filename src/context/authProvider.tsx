"use client";
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";

// Define a type for your user (adjust as needed)
interface User {
  profile: string;
  firstName: string;
  lastName: string;
  _id: string;
  email: string;
  createdAt: string;
  isActive: boolean;
  fullName: string;
  myCourses: Array<1>;
  enrolledCourses: Array<0>;
  bio: string;
  title: string;
  role: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    facebook?: string;
  };
}

// Define the shape of the context
interface AuthContextType {
  user: User | null;
  loading: boolean;
  apiAvailable: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => Promise<void>;
  becomeInstructor: (data: {
    title: string;
    bio: string;
    socialLinks: {
      linkedin?: string;
      twitter?: string;
      github?: string;
      facebook?: string;
    };
  }) => Promise<void>;
  updateInstructor: (data: {
    title?: string;
    bio?: string;
    socialLinks?: {
      linkedin?: string;
      twitter?: string;
      github?: string;
      facebook?: string;
    };
  }) => Promise<void>;
}

// Create the context with an undefined default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component that wraps your app and makes auth object available via context
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [apiAvailable, setApiAvailable] = useState(true);
  const api = process.env.NEXT_PUBLIC_API_BASE_URL;

  // axios instance with default credentials
  const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Register function
  const register = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    try {
      const res = await apiClient.post("/auth/register", {
        firstName,
        lastName,
        email,
        password,
      });
      setUser(res.data.user);
    } catch (error) {
      console.error("Logout failed:", error);
      throw new Error("Registration failed");
    }
  };

  // Login function
  const login = async (email: string, password: string) => {
    try {
      const res = await apiClient.post(`/auth/login`, { email, password });
      setUser(res.data.user);
    } catch (error) {
      console.error("Logout failed:", error);
      throw new Error("Login failed");
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await axios.post(`${api}/auth/logout`);
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Become instructor function
  const becomeInstructor = async (data: {
    title: string;
    bio: string;
    socialLinks: {
      linkedin?: string;
      twitter?: string;
      github?: string;
      facebook?: string;
    };
  }) => {
    try {
      const res = await apiClient.post(`/instructors/become-instructor`, data);
      setUser((prevUser) => {
        if (!prevUser) return null;
        return {
          ...prevUser,
          ...res.data.user,
          role: "instructor",
          socialLinks: {
            ...prevUser.socialLinks,
            ...res.data.user?.socialLinks,
          },
        };
      });

      return res.data;
    } catch (error) {
      console.error("Become instructor error:", error);
      throw new Error("Failed to submit instructor application");
    }
  };

  // Update instructor profile function
  const updateInstructor = async (data: {
    title?: string;
    bio?: string;
    socialLinks?: {
      linkedin?: string;
      twitter?: string;
      github?: string;
      facebook?: string;
    };
  }) => {
    try {
      const res = await apiClient.patch(`/instructors/update-profile`, data);
      setUser((prev) => ({
        ...prev,
        ...res.data.user,
        socialLinks: {
          ...prev?.socialLinks,
          ...res.data.user?.socialLinks,
        },
      }));
      return res.data;
    } catch (error) {
      console.error("Update instructor error:", error);
      throw new Error("Failed to update instructor profile");
    }
  };

  // Check for existing session on mount
  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await axios.get(`${api}/users/profile`, {
          withCredentials: true,
        });
        setUser(res.data.user);
        setApiAvailable(true); 
      } catch (error) {
        console.error("API unavailable, using fallback mode:", error);
        setApiAvailable(false); // API is NOT working

        // Optional: set dummy fallback user
        setUser({
          profile: "",
          firstName: "Guest",
          lastName: "User",
          fullName: "Guest User",
          _id: "offline-mode",
          email: "guest@example.com",
          createdAt: new Date().toISOString(),
          isActive: false,
          myCourses: [],
          enrolledCourses: [],
          bio: "Offline mode user",
          title: "Guest",
          role: "student",
          socialLinks: {},
        });
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, [api]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        apiAvailable,
        login,
        logout,
        register,
        becomeInstructor,
        updateInstructor,
      }}
    >
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
