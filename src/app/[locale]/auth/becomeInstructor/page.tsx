"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/authProvider";
import { Link } from "@/i18n/navigation";
import Loading from "@/components/loading";
import { useRouter } from "next/navigation";

export default function BecomeInstructorForm() {
  const router = useRouter();
  const { user, loading ,becomeInstructor } = useAuth();
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
      user?.role == "instructor" ||
      user?.role == "admin"
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
      socialLinks
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
    user?.role == "instructor" ||
    user?.role == "admin"
  )
    return <Loading />;
  else if (success === true)
    return (
      <section className="min-h-screen w-full p-6 flex flex-col justify-center items-center text-center  rounded-2xl ">
        <h1 className=" text-neutral-900 dark:text-white">
          congratulations you are now an instructor
        </h1>
        <p className="text-neutral-900 dark:text-white opacity-50">
          now u can make courses and earn money
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
            className="text-sm font-semibold text-gray-900 dark:text-white border-2 py-3 px-6 rounded-lg  border-purple-600 hover:text-white hover:bg-purple-600 duration-150"
          >
            Contact support
          </Link>
        </div>
      </section>
    );
  else if (user?.role == "student")
    return (
      <section className="mt-20 max-w-2xl mx-auto p-6  rounded-2xl ">
        <h1 className="text-3xl text-neutral-900 dark:text-white font-bold mb-6 text-center">
          Become an Instructor
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-semibold">Job Title</label>
            <select
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
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
            </select>
          </div>

          {formData.title === "Other" && (
            <input
              type="text"
              name="customTitle"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full mt-3 p-3 border border-gray-300 rounded-xl"
              placeholder="Enter your job title"
            />
          )}

          <div>
            <label className="block mb-1 font-semibold">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              required
              className="w-full p-3 border border-gray-300 rounded-xl"
              placeholder="Tell us about yourself..."
            />
          </div>

          <div className="border-t pt-4">
            <p className="font-semibold mb-2">
              Social Media Links (at least one required)
            </p>

            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full mb-3 p-3 border border-gray-300 rounded-xl"
              placeholder="LinkedIn"
            />

            <input
              type="url"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
              className="w-full mb-3 p-3 border border-gray-300 rounded-xl"
              placeholder="Twitter"
            />

            <input
              type="url"
              name="github"
              value={formData.github}
              onChange={handleChange}
              className="w-full mb-3 p-3 border border-gray-300 rounded-xl"
              placeholder="GitHub"
            />

            <input
              type="url"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
              className="w-full mb-3 p-3 border border-gray-300 rounded-xl"
              placeholder="Facebook"
            />
          </div>

          {error && <p className="text-red-600 font-semibold">{error}</p>}
          {success && (
            <p className="text-green-600 font-semibold">
              Submitted successfully!
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
        </form>
      </section>
    );
}
