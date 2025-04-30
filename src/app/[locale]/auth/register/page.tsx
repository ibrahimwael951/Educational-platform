"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Link } from "@/i18n/navigation";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const api = process.env.NEXT_PUBLIC_API_BASE_URL;
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      console.log("Registration successful:", data);
      setSuccessMessage("Registration successful! 🎉");
      setErrorMessage("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      router.push("/auth/login");
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Registration failed. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <section className="px-5 min-h-screen max-w-2xl m-auto flex flex-col gap-10 justify-center items-center">
      <div className="text-center">
        <h1 className="text-neutral-950 dark:text-white mb-2">Register</h1>
        <p className=" text-neutral-950 dark:text-white opacity-75">
          Create an account by filling the form below
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
        <input
          type="text"
          placeholder="First Name"
          className="p-2 focus:ring-1 ring-neutral-900 dark:ring-white rounded-xl dark:bg-neutral-800"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="p-2 focus:ring-1 ring-neutral-900 dark:ring-white rounded-xl dark:bg-neutral-800"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
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
          Register
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
      <div className="text-neutral-900 dark:text-white">
        Already have an account? 
        <Link href="/auth/login" className="text-purple-500 mx-1">
           Login
        </Link>
      </div>
    </section>
  );
}
