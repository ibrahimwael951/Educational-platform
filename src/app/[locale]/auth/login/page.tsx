"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/authProvider";
import { useRouter } from "next/navigation";
import { Link } from "@/i18n/navigation";
import Loading from "@/components/loading";

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function LoginPage() {
  const router = useRouter();
  const { login, user, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);

  // Clear messages after 3 seconds
  const clearMessages = () => {
    setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 3000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please fill in both fields.");
      clearMessages();
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      clearMessages();
      return;
    }

    try {
      await login(email, password);
      setSuccessMessage("Login successful! 🎉");
      setErrorMessage("");
      clearMessages();
      setEmail("");
      setPassword("");
      router.push("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error during login:", error.message);
        setErrorMessage("Login failed. Please check your credentials.");
      } else {
        console.error("An unknown error occurred", error);
        setErrorMessage("An unknown error occurred.");
      }
      setSuccessMessage("");
      clearMessages();
    }
  };
  if (loading) return <Loading />;
  else if (user) return null;
  return (
    <section className="px-5 min-h-screen max-w-2xl m-auto flex flex-col gap-10 justify-center items-center">
      <div className="text-center">
        <h1 className="text-neutral-950 dark:text-white mb-2">Login Form</h1>
        <p className="text-neutral-950 dark:text-white opacity-75">
          Enter your email and password to login
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
        <input
          type="email"
          placeholder="Email"
          className="p-2 focus:ring-1 ring-neutral-900 dark:ring-white rounded-xl dark:bg-neutral-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 focus:ring-1 ring-neutral-900 dark:ring-white rounded-xl dark:bg-neutral-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="p-2 outline-none rounded-xl bg-purple-600 hover:bg-purple-700 cursor-pointer"
        >
          Login
        </button>
      </form>

      {/* Success message */}
      {successMessage && (
        <p className="text-green-600 dark:text-green-400">{successMessage}</p>
      )}

      {/* Error message */}
      {errorMessage && (
        <p className="text-red-600 dark:text-red-400">{errorMessage}</p>
      )}

      <div className="text-neutral-900 dark:text-white mt-4">
        Dont have an account?
        <Link href="/auth/register" className="text-purple-500">
          Register
        </Link>
      </div>
    </section>
  );
}