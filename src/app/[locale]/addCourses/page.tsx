"use client";

import { useState } from "react";

export default function AddCourseForm() {
const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    duration: 0,
    thumbnail: "",
    tags: "",
    language: "",
    requirements: "",
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
};

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
    ...formData,
    price: parseFloat(formData.price.toString()),
    duration: parseInt(formData.duration.toString()),
    tags: formData.tags.split(",").map(tag => tag.trim()),
    language: formData.language.split(",").map(lang => lang.trim()),
    requirements: formData.requirements.split(",").map(r => r.trim()),
    };

    try {
    const res = await fetch("https://educational-platform-backend-production.up.railway.app/api/courses/", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer YOUR_TOKEN_HERE`,
        },
        body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (res.ok) {
        alert("Course Successfully Added");
        console.log("Response:", data);
    } else {
        alert("Error : " + data.message);
    }
    } catch (error) {
    console.error("Error:", error);
    alert(" Error Has Occured ");
    }
};

return (
    <form onSubmit={handleSubmit} className="max-w-xl mt-30 mx-auto items-center p-6 bg-white rounded-xl shadow space-y-4">
    <h2 className="text-2xl font-bold mb-4 text-center">Add New Course</h2>

<div className="flex gap-20 mt-10">
    <label>Course Title</label>
    <input type="text" name="title" placeholder="Add Your Course Title " onChange={handleChange}  className="border border-gray-400 rounded-2xl px-2"/>
    </div>

    <div className="flex gap-20 mt-10">
    <label>Course Description</label>
    <textarea name="description" placeholder="Add Description" onChange={handleChange}  className="border border-gray-400 rounded-2xl px-2"/>
    </div>   

    <div className="flex flex-col gap-2 mt-10">
<label htmlFor="category">Course Category</label>
<select
    name="category"
    id="category"
    onChange={handleChange}
    className="w-full px-4 py-2 border border-gray-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
    <option value=""> Choose Category</option>
    <option value="Web Development">Web Development</option>
    <option value="Mobile Development">Mobile Development</option>
    <option value="UI/UX Design">UI/UX Design</option>
    <option value="AI & Data Science">AI & Data Science</option>
    <option value="Marketing">Marketing</option>
    <option value="Business">Business</option>
</select>
</div>

<div className="flex gap-20 mt-10">
    <label>Course Price</label>
    <input type="number" name="price" placeholder="Price" onChange={handleChange}  className="border border-gray-400 rounded-2xl px-2"/>
    </div>
    
<div className="flex gap-20 mt-10">
    <label>Course Time</label>
    <input type="number" name="duration" placeholder="Time per hours " onChange={handleChange}  className="border border-gray-400 rounded-2xl  px-2"/>
    </div>

    <div className="flex gap-20 mt-10">
    <label>Course Photo</label>
    <input type="file" name="thumbnail" onChange={handleChange} className="border border-gray-400 rounded-2xl"/>
    </div>

    <div className="flex flex-col gap-2 mt-10">
<label htmlFor="language">Course Language</label>
<select
    name="language"
    id="language"
    onChange={handleChange}
    className="w-full px-4 py-2 border border-gray-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
    <option value=""> Choose Language</option>
    <option value="Web Development">Arabic</option>
    <option value="Mobile Development">English</option>
    <option value="UI/UX Design">French</option>
</select>
</div>
    
<div className="flex gap-20 mt-10">
    <label>Course Requirments</label>
    <input type="text" name="requirements" placeholder="Requirements (Ex: JavaScript,...)" onChange={handleChange}  className="border border-gray-400 rounded-2xl px-2" />
    </div>

    

    <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white py-2
    px-4 rounded justify-center cursor-pointer">
        Add Course
    </button>
    </form>
);
};
