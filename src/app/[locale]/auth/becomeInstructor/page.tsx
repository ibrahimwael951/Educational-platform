"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/authProvider";
import { Link } from "@/i18n/navigation";
import Loading from "@/components/loading";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BecomeInstructorForm() {
  const router = useRouter();
  const { user, loading, becomeInstructor } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    bio: "",
    linkedin: "",
    twitter: "",
    github: "",
    facebook: "",
  });

  useEffect(() => {
    if (
      (!loading && !user) ||
      user?.role === "instructor" ||
      user?.role === "admin"
    ) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    if (name === "bio" && value.length > 500) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const hasAtLeastOneSocialLink = () => {
    return (
      formData.linkedin.trim() ||
      formData.twitter.trim() ||
      formData.github.trim() ||
      formData.facebook.trim()
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!hasAtLeastOneSocialLink()) {
      setError("Please provide at least one social media link.");
      return;
    }

    const socialLinks: Record<string, string> = {};
    ["linkedin", "twitter", "github", "facebook"].forEach((platform) => {
      const value = formData[platform as keyof typeof formData];
      if (value.trim()) {
        socialLinks[platform] = value.trim();
      }
    });

    try {
      await becomeInstructor({
        title: formData.title,
        bio: formData.bio,
        socialLinks,
      });

      setSuccess(true);
      setError("");
      setFormData({
        title: "",
        bio: "",
        linkedin: "",
        twitter: "",
        github: "",
        facebook: "",
      });
    } catch (err) {
      setSuccess(false);
      setError(err instanceof Error ? err.message : "Submission failed");
    }
  };

  if (
    (loading && !user) ||
    !user?.role ||
    user?.role === "instructor" ||
    user?.role === "admin"
  )
    return <Loading />;
  else if (success)
    return (
      <section className="min-h-screen w-full p-6 flex flex-col justify-center items-center text-center rounded-2xl">
        <h1 className="text-neutral-900 dark:text-white">
          Congratulations! You are now an instructor
        </h1>
        <p className="text-neutral-900 dark:text-white opacity-50">
          Now you can create courses and earn money.
        </p>
        <div className="mt-10 flex flex-wrap gap-7 items-center gap-x-6">
          <Link
            href="/"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            Go back home
          </Link>
          <Link
            href="/support"
            className="text-sm font-semibold text-gray-900 dark:text-white border-2 py-3 px-6 rounded-lg border-purple-600 hover:text-white hover:bg-purple-600 duration-150"
          >
            Contact support
          </Link>
        </div>
      </section>
    );

  return (
    <main className="flex  flex-col lg:flex-row justify-between gap-10  items-center mt-20 max-w-7xl mx-auto p-6 rounded-2xl ">
      <motion.section
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, stiffness: 300 }}
        className="w-full lg:w-2/4 text-center text-sm max-w-2xl m-auto"
      >
        <Image
          src="/BecomeInstructor.png"
          alt="image"
          width={1000}
          height={1000}
          draggable={false}
          className="rounded-2xl select-none "
        />
        65% to 70% of instructors are women
      </motion.section>
      <section className="w-full lg:w-2/4  max-w-2xl m-auto">
        <h1 className="text-3xl text-purple-500 dark:text-purple-500 font-bold mb-6 text-center">
          Become an Instructor
        </h1>
        <motion.form
          key="instructor-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4, stiffness: 300 }}
          className="space-y-5"
        >
          <motion.select
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            whileHover={{ scale: 1.02 }}
            whileFocus={{ rotate: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
            className="w-full p-3 border bg-white dark:bg-neutral-900 border-gray-300 rounded-xl"
          >
            <option value="">Select your role</option>
            <option value="Web Developer">Web Developer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="UX Designer">UX Designer</option>
            <option value="Mobile Developer">Mobile Developer</option>
            <option value="DevOps Engineer">DevOps Engineer</option>
            <option value="AI/ML Engineer">AI/ML Engineer</option>
            <option value="Other">Other</option>
          </motion.select>

          {formData.title === "Other" && (
            <motion.input
              type="text"
              name="customTitle"
              value={formData.title}
              onChange={handleChange}
              required
              whileHover={{ scale: 1.02 }}
              whileFocus={{ rotate: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
              className="w-full mt-3 p-3 border border-gray-300 rounded-xl"
              placeholder="Enter your job title"
            />
          )}

          <motion.textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={4}
            required
            maxLength={500}
            whileHover={{ scale: 1.02 }}
            whileFocus={{ rotate: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
            className="w-full p-3 border border-gray-300 rounded-xl"
            placeholder="Tell us about yourself... (max 500 characters)"
          />

          {["linkedin", "twitter", "github", "facebook"].map((platform) => (
            <motion.input
              key={platform}
              type="url"
              name={platform}
              value={formData[platform as keyof typeof formData]}
              onChange={handleChange}
              whileHover={{ scale: 1.02 }}
              whileFocus={{ rotate: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
              className="w-full mb-3 p-3 border border-gray-300 rounded-xl"
              placeholder={platform.charAt(0).toUpperCase() + platform.slice(1)}
            />
          ))}

          {error && <p className="text-red-600 font-semibold">{error}</p>}
          {success && (
            <p className="text-green-600 font-semibold">
              Submitted successfully!
            </p>
          )}

          <motion.button
            whileHover={{ scale: 1.02, fontSize: "18px" }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
            type="submit"
            className="w-full py-4 font-semibold text-white bg-purple-500 rounded-2xl outline-none px-7 cursor-pointer"
          >
            Submit Application
          </motion.button>
        </motion.form>
      </section>
    </main>
  );
}
