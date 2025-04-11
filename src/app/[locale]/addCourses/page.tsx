"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function AddCourseForm() {
    const t = useTranslations("addCoursePage");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [time, setTime] = useState("");
    const [photo, setPhoto] = useState<File | null>(null); 
    const [language, setLanguage] = useState("");
    const [requirements, setRequirements] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const api = process.env.NEXT_PUBLIC_API_BASE_URL;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("price", price);
        formData.append("time", time);
        if (photo) formData.append("thumbnail", photo);  
        formData.append("language", language);
        formData.append("requirements", requirements);

        try {
            const res = await fetch(`${api}/course/`, {
                method: "POST",
                body: formData,
            });

            if (!res.ok) {
                throw new Error("Add Course failed");
            }

            const data = await res.json();
            console.log("Course added successfully:", data);

            setSuccessMessage(t("successMessage"));
            setErrorMessage(""); 

        } catch (error) {
            console.error("Error:", error);
            setErrorMessage(t("errorMessage"));
            setSuccessMessage("");
        }
    };

    return (
    <form onSubmit={handleSubmit} className="max-w-xl mt-30 mx-auto items-center p-6 bg-white dark:bg-neutral-800  shadow space-y-4">
    <h2 className="text-2xl font-bold mb-4 text-center dark:text-white ">{t("title")}</h2>

    {/* Course Title */}
    <div className="flex gap-20 mt-10 dark:text-white">
        <label>{t("courseTitle")}</label>
        <input 
            type="text" 
            name="title" 
            placeholder="Add Your Course Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required 
            className="border border-gray-400 rounded-2xl px-2" 
        />
    </div>

    {/* Course Description */}
    <div className="flex gap-20 mt-10">
        <label>{t("courseDescription")}</label>
        <textarea 
            name="description" 
            placeholder="Add Your Course Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required 
            className="border border-gray-400 rounded-2xl px-2" 
        />
    </div>   

    {/* Course Category */}
    <div className="flex flex-col gap-2 mt-10">
        <label htmlFor="category">{t("courseCategory")}</label>
        <select
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full px-4 py-2 border border-gray-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
            <option value="" className=" dark:bg-neutral-500 "> {t("catOptions")}</option>
            <option value="Web Development" className=" dark:bg-neutral-500 ">{t("webOption")}</option>
            <option value="Mobile Development" className=" dark:bg-neutral-500 ">{t("mobOption")}</option>
            <option value="UI/UX Design" className=" dark:bg-neutral-500 ">{t("uiOption")}</option>
            <option value="AI & Data Science" className=" dark:bg-neutral-500 ">{t("aiOption")}</option>
            <option value="Marketing" className=" dark:bg-neutral-500 ">{t("marktOption")}</option>
            <option value="Business" className=" dark:bg-neutral-500 ">{t("bussinessOption")}</option>
        </select>
    </div>

    {/* Course Price */}
    <div className="flex gap-20 mt-10">
        <label>{t("coursePrice")}</label>
        <input  
            type="number" 
            name="price" 
            placeholder="Add Your Course Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required 
            className="border border-gray-400 rounded-2xl px-2"
        />
    </div>

    {/* Course Time */}
    <div className="flex gap-20 mt-10">
        <label>{t("courseTime")}</label>
        <input 
            type="number" 
            name="time" 
            placeholder="Time Per Hours"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required  
            className="border border-gray-400 rounded-2xl  px-2"
        />
    </div>

    {/* Course Photo */}
    <div className="flex gap-20 mt-10">
        <label>{t("coursePhoto")}</label>
        <input 
            type="file" 
            name="thumbnail" 
            onChange={(e) => {
                if (e.target.files) {
                    setPhoto(e.target.files[0]); 
                }
            }}
            className="border border-gray-400 rounded-2xl" 
        />
    </div>

    {/* Course Language */}
    <div className="flex flex-col gap-2 mt-10">
        <label htmlFor="language">{t("courseLanguage")}</label>
        <select
            name="language"
            id="language"
            onChange={(e) => setLanguage(e.target.value)}
            value={language}
            className="w-full px-4 py-2 border border-gray-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
            <option value="" className=" dark:bg-neutral-500 "> {t("chooseLanguage")}</option>
            <option value="Arabic" className=" dark:bg-neutral-500 ">{t("araicLanguage")}</option>
            <option value="English" className=" dark:bg-neutral-500 ">{t("englishLanguage")}</option>
            <option value="French" className=" dark:bg-neutral-500 ">{t("frenchLanguage")}</option>
        </select>
    </div>
    
    {/* Course Requirements */}
    <div className="flex gap-20 mt-10">
        <label>{t("courseRequirements")}</label>
        <textarea       
            name="requirements" 
            placeholder="Add Requirements"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            required  
            className="border border-gray-400 rounded-2xl px-2" 
        />
    </div>

    {/* Success and Error Messages */}
    {successMessage && <p className="text-green-500">{successMessage}</p>}
    {errorMessage && <p className="text-red-500">{errorMessage}</p>}

    {/* Submit Button */}
    <button 
        type="submit" 
        className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-5 justify-center items-center mt-10  rounded cursor-pointer">
        {t("addBtn")}
    </button>

    </form>
    );
}
