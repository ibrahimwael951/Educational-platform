"use client";
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

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
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (firstName: string, lastName: string, email: string, password: string) => Promise<void>;
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
  const api = process.env.NEXT_PUBLIC_API_BASE_URL;

  // register function: makes an API call to your register endpoint
  const register = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    try {
      const res = await fetch(`${api}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });
      if (!res.ok) {
        throw new Error("Registration failed");
      }
      const data = await res.json();
      setUser(data.user);
    } catch (error) {
      throw error;
    }
  };

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
      });
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
      const res = await fetch(`${api}/instructors/become-instructor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit instructor application");
      }

      const responseData = await res.json();
      setUser(responseData.user);
      return responseData;
    } catch (error) {
      console.error("Become instructor error:", error);
      throw error;
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
      const res = await fetch(`${api}/instructors/update-profile`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
  
      if (!res.ok) {
        throw new Error("Failed to update instructor profile");
      }
  
      const responseData = await res.json();
      
      // Update the user state while preserving all existing properties
      setUser(prev => ({
        ...prev,
        ...responseData.user,
        socialLinks: {
          ...prev?.socialLinks,
          ...responseData.user?.socialLinks
        }
      }));
      
      return responseData;
    } catch (error) {
      console.error("Update instructor error:", error);
      throw error;
    }
  };

  // Optional: Check if a user session exists when the component mounts
  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await fetch(`${api}/users/profile`, {
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
    <AuthContext.Provider
      value={{
        user,
        loading,
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