"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/authProvider";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading";
import { motion, AnimatePresence } from "framer-motion";

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function AuthPage() {
  const router = useRouter();
  const { login, register, user, loading } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);

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
      if (isLogin) {
        await login(email, password);
        setSuccessMessage("Login successful");
      } else {
        await register(firstName, lastName, email, password);
        setSuccessMessage("Registration successful");
      }
      setErrorMessage("");
      clearMessages();
      setEmail("");
      setPassword("");
      router.push("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Auth error:", error.message);
        setErrorMessage("Authentication failed. Check your credentials.");
      } else {
        console.error("Unknown error:", error);
        setErrorMessage("An unknown error occurred.");
      }
      setSuccessMessage("");
      clearMessages();
    }
  };

  if (loading || user) return <Loading />;

  return (
    <section className="px-5 min-h-screen max-w-2xl m-auto flex flex-col gap-10 justify-center items-center">
      <div className="text-center">
        <AnimatePresence mode="wait">
          <div className="text-3xl text-purple-500 dark:text-purple-500 mb-2">
            {isLogin ? (
              <motion.h1
                key={isLogin ? "login" : "register"}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
                className="inline mr-2 text-purple-500 dark:text-purple-500"
              >
                Login
              </motion.h1>
            ) : (
              <motion.h1
                key={isLogin ? "login" : "register"}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
                className="inline mr-2 text-purple-500 dark:text-purple-500"
              >
                Register
              </motion.h1>
            )}
            Form
          </div>
          <p className="text-neutral-950 dark:text-white opacity-75">
            {isLogin
              ? "Enter your email and password to login"
              : "Create your account by filling in the details"}
          </p>
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.form
          key={isLogin ? "login" : "register"}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4, stiffness: 300 }}
          className="flex flex-col gap-5 w-full"
        >
          {!isLogin && (
            <>
              <motion.input
                whileHover={{
                  scale: 1.02,
                }}
                whileFocus={{
                  rotate: 1,
                }}
                transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
                type="firstName"
                placeholder="your First Name"
                className="w-full px-4 py-3 outline-none border-2 focus:border-purple-400 rounded-xl dark:bg-neutral-800 dark:ring-0 ring-gray-100 focus:ring-4"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />

              <motion.input
                whileHover={{
                  scale: 1.02,
                }}
                whileFocus={{
                  rotate: 1,
                }}
                transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
                type="lastName"
                placeholder="your Last Name"
                className="w-full px-4 py-3 outline-none border-2 focus:border-purple-400 rounded-xl dark:bg-neutral-800 dark:ring-0 ring-gray-100 focus:ring-4"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </>
          )}
          <motion.input
            whileHover={{
              scale: 1.02,
            }}
            whileFocus={{
              rotate: 1,
            }}
            transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 outline-none border-2 focus:border-purple-400 rounded-xl dark:bg-neutral-800 dark:ring-0 ring-gray-100 focus:ring-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <motion.input
            whileHover={{
              scale: 1.02,
            }}
            whileFocus={{
              rotate: 1,
            }}
            transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 outline-none border-2 focus:border-purple-400 rounded-xl dark:bg-neutral-800 dark:ring-0 ring-gray-100 focus:ring-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <motion.button
            whileHover={{
              scale: 1.02,
              fontSize: "18px",
            }}
            whileTap={{
              scale: 0.9,
            }}
            transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
            type="submit"
            className="w-full py-4 font-semibold text-white bg-purple-500 rounded-2xl  outline-none px-7 cursor-pointer"
          >
            {isLogin ? "Login" : "Register"}
          </motion.button>
        </motion.form>
      </AnimatePresence>

      {successMessage && (
        <p className="text-green-600 dark:text-green-400">{successMessage}</p>
      )}

      {errorMessage && (
        <p className="text-red-600 dark:text-red-400">{errorMessage}</p>
      )}

      <div className="text-neutral-900 dark:text-white mt-4">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => setIsLogin((prev) => !prev)}
          className="text-purple-500 underline ml-1 select-none cursor-pointer"
        >
          {isLogin ? "Register" : "Login"}
        </button>
      </div>
    </section>
  );
}
