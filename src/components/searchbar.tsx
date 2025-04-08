"use client";

import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchButton = () => {
const [showInput, setShowInput] = useState(false);

return (
    <div
    className={`bg-transparent border border-gray-900 rounded-full py-3 px-7 items-center gap-3 flex hover:bg-gray-100 focus-within:border-purple-500`}
    >
    <IoIosSearch
        className="text-gray-900 cursor-pointer"
        onClick={() => setShowInput(!showInput)}
    />

    
    <input
        type="text"
        placeholder="Search for anything"
        className={`outline-none bg-transparent w-full ${
        showInput ? "block" : "hidden"
        } sm:block`}
    />
    </div>
);
};

export default SearchButton;