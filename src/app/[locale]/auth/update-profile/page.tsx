"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/authProvider";
import { Link } from "@/i18n/navigation";
import Loading from "@/components/loading";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function UpdateInstructorProfile() {
  const router = useRouter();
  const { user, loading, updateInstructor } = useAuth();
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
    if (!loading && !user) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user?.role === "instructor") {
      // Set form data from user context if available
      setFormData({
        title: user.title || "",
        bio: user.bio || "",
        linkedin: user.socialLinks?.linkedin || "",
        twitter: user.socialLinks?.twitter || "",
        github: user.socialLinks?.github || "",
        facebook: user.socialLinks?.facebook || "",
      }); 
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
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
      setError("");
      await updateInstructor({
        title: formData.title,
        bio: formData.bio,
        socialLinks,
      });

      setSuccess(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to update profile. Please try again."
      );
      setSuccess(false);
    }
  };

  if ((loading && !user) ) return <Loading />;
  return (
    <section className="mt-20 max-w-2xl mx-auto p-6 rounded-2xl">
      <AnimatePresence>
        {success && (
          <div className="fixed top-0 left-0 w-full h-screen">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              className="absolute top-0 left-0 w-full h-screen  bg-white  dark:bg-black "
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute top-2/4 left-2/4 -translate-2/4 bg-neutral-100 dark:bg-neutral-900 p-5 rounded-2xl  border border-purple-500 "
            >
              <h1 className="text-2xl">
                Your instructor profile has been updated
                <span className="text-purple-500"> Successfully </span>!
              </h1>
              <div className="mt-10 flex flex-wrap gap-7 items-center gap-x-6">
                <Link
                  href="/dashboard"
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition"
                >
                  Go to Dashboard
                </Link>
                <button
                  onClick={() => setSuccess(false)}
                  className=" font-bold text-purple-500 dark:text-white border-2 py-3 px-6 rounded-lg border-purple-600 hover:text-white hover:bg-purple-600 duration-150"
                >
                  Continue Edit
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <h1 className="text-3xl text-neutral-900 dark:text-white font-bold mb-6 text-center">
        Update <span className="text-purple-500"> Profile </span> 
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-semibold text-2xl">
            Job Title
          </label>
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-3 border border-purple-500 focus:border-purple-500 outline-none rounded-xl"
          >
            {[
              "Select your role",
              "Web Developer",
              "Data Scientist",
              "UX Designer",
              "Mobile Developer",
              "DevOps Engineer",
              "AI/ML Engineer",
              "Other",
            ].map((item, i) => (
              <option className="bg-white text-black dark:bg-neutral-900 dark:text-white" key={i} value={item === "Select your role" ? "" : item}>
                {item}
              </option> 
            ))}
             
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold  text-2xl">
            Bio
          </label>
          <motion.textarea
            required
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={4}
            maxLength={500}
            className="w-full p-3 border border-purple-500 focus:border-purple-500 outline-none rounded-xl"
            placeholder="Tell us about yourself..."
          />
        </div>

        <div className="border-t pt-4">
          <h1 className=" block mb-1 font-semibold  text-2xl">
            Social Media Links (at least one required)
          </h1>

          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full p-3 border border-purple-500 focus:border-purple-500 outline-none rounded-xl my-2"
            placeholder="LinkedIn"
          />

          <input
            type="url"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
            className="w-full p-3 border border-purple-500 focus:border-purple-500 outline-none rounded-xl my-2"
            placeholder="Twitter"
          />

          <input
            type="url"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="w-full p-3 border border-purple-500 focus:border-purple-500 outline-none rounded-xl my-2"
            placeholder="GitHub"
          />

          <input
            type="url"
            name="facebook"
            value={formData.facebook}
            onChange={handleChange}
            className="w-full p-3 border border-purple-500 focus:border-purple-500 outline-none rounded-xl my-2"
            placeholder="Facebook"
          />
        </div>

        {error && <p className="text-red-600 font-semibold">{error}</p>}

        <button
            type="submit"
            className="w-full py-4 font-semibold text-white bg-purple-500 rounded-2xl outline-none px-7 cursor-pointer"
          >
             Update Profile
          </button>
      </form>
    </section>
  );
}
