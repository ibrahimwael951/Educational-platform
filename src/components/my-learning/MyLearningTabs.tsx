"use client";

import React from 'react';

interface MyLearningTabsProps {
activeTab: string;
setActiveTab: (tab: string) => void;
}

const TABS = ["All courses", "My Lists", "Wishlist", "Certifications"];

const MyLearningTabs: React.FC<MyLearningTabsProps> = ({ activeTab, setActiveTab }) => {
return (
    <nav className="mt-8 border-b border-gray-700">
    <div className="flex space-x-8 -mb-px">
        {TABS.map((tab) => (
        <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-4 px-1 text-sm font-medium transition-colors duration-200
            ${
                activeTab === tab
                ? 'border-b-2 border-white text-white'
                : 'border-b-2 border-transparent text-gray-400 hover:text-white hover:border-gray-500'
            }
            `}
        >
            {tab}
        </button>
        ))}
    </div>
    </nav>
);
};

export default MyLearningTabs;