"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import { Star, Menu } from "lucide-react";

interface FilterProps {
  onFilter: (filters: {
    rating?: number;
    price?: string;
    duration?: string;
    category?: string;
  }) => void;
}

const FilterCourses: React.FC<FilterProps> = ({ onFilter }) => {
  const [rating, setRating] = useState<number | undefined>();
  const [durations, setDurations] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true); 


  const [showAllCategories, setShowAllCategories] = useState(false);

  const categories = [
    { label: "Development", count: 3200 },
    { label: "Business", count: 1500 },
    { label: "IT & Software", count: 2100 },
    { label: "Design", count: 1200 },
    { label: "Marketing", count: 980 },
    { label: "Photography", count: 600 },
  ];
  

  const handleRatingChange = (value: number) => {
    setRating(value);
    onFilter({ rating: value });
  };

  const handleDurationChange = (value: string) => {
    const updated = durations.includes(value)
      ? durations.filter((d) => d !== value)
      : [...durations, value];
    setDurations(updated);
    onFilter({ rating, duration: updated[0] });
  };

  return (
    <div className="w-64 space-y-6 text-sm text-gray-900 dark:text-white ">
      {/* Filter Header */}
      <div className="flex items-center justify-between">
        <div className="flex border px-3 py-1 rounded text-sm font-medium cursor-pointer">
        <Menu /> 
        <button
          onClick={() => setIsVisible((prev) => !prev)} >
        Filter
        </button> 
        </div>
        <select className="border rounded px-2 py-1 text-sm cursor-pointer">
          <option>Highest Rated</option>
          <option>Newest</option>
        </select>
      </div>

      {/* Filter Sidebar - Conditional Rendering */}
      {isVisible && (
        <Accordion type="multiple" className="space-y-2">
          {/* Ratings */}
          <AccordionItem value="ratings">
            <AccordionTrigger className=" text-gray-900 dark:text-white">Ratings</AccordionTrigger>
            <AccordionContent>
              {[4.5, 4.0, 3.5, 3.0].map((rate) => (
                <label key={rate} className="flex items-center gap-2 py-1">
                  <input
                    type="radio"
                    name="rating"
                    checked={rating === rate}
                    onChange={() => handleRatingChange(rate)}
                  />
                  <span className="flex items-center gap-1">
                    {Array(5).fill(0).map((_, i) => (
                      <span key={i}>
                        <Star className={i < Math.floor(rate) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
                      </span>
                    ))}
                    &nbsp; {rate} & up
                  </span>
                </label>
              ))}
            </AccordionContent>
          </AccordionItem>

          {/* Duration */}
          <AccordionItem value="duration">
            <AccordionTrigger className=" text-gray-900 dark:text-white">Video Duration</AccordionTrigger>
            <AccordionContent>
              {["0-1 Hour", "1-3 Hours", "3-6 Hours", "6-17 Hours"].map((d) => (
                <label key={d} className="flex items-center gap-2 py-1">
                  <input
                    type="checkbox"
                    checked={durations.includes(d)}
                    onChange={() => handleDurationChange(d)}
                  />
                  {d}
                </label>
              ))}
              <button className="mt-2 text-purple-600 font-semibold text-sm">Show more</button>
            </AccordionContent>
          </AccordionItem>

{/* Price */}
<AccordionItem value="price">
  <AccordionTrigger className="text-gray-900 dark:text-white">Price</AccordionTrigger>
  <AccordionContent className="space-y-2">
    {[
      { label: "Paid", count: 10000 },
      { label: "Free", count: 1536 },
    ].map((item) => (
      <label key={item.label} className="flex items-center gap-2 py-1">
        <input type="checkbox" />
        {item.label} <span className="text-muted-foreground">({item.count.toLocaleString()})</span>
      </label>
    ))}
  </AccordionContent>
</AccordionItem>

{/* Language */}
<AccordionItem value="language">
  <AccordionTrigger className="text-gray-900 dark:text-white">Language</AccordionTrigger>
  <AccordionContent className="space-y-2">
    {[
      { label: "English", count: 6578 },
      { label: "Arabic", count: 1228 },
      { label: "French", count: 1047},
    ].map((item) => (
      <label
        key={item.label}
        className={'flex items-center gap-2 py-1'}
      >
        <input type="checkbox" />
        {item.label} <span className="text-muted-foreground">({item.count.toLocaleString()})</span>
      </label>
    ))}
  </AccordionContent>
</AccordionItem>

{/* Level */}
<AccordionItem value="level">
  <AccordionTrigger className="text-gray-900 dark:text-white">Level</AccordionTrigger>
  <AccordionContent className="space-y-2">
    {[
      { label: "All Levels", count: 5601 },
      { label: "Beginner", count: 4569 },
      { label: "Intermediate", count: 1852 },
      { label: "Expert", count: 158 },
    ].map((item) => (
      <label key={item.label} className="flex items-center gap-2 py-1">
        <input type="checkbox" />
        {item.label} <span className="text-muted-foreground">({item.count.toLocaleString()})</span>
      </label>
    ))}
  </AccordionContent>
</AccordionItem>

{/* Category */}
<AccordionItem value="category">
  <AccordionTrigger className="text-gray-900 dark:text-white">Category</AccordionTrigger>
  <AccordionContent className="space-y-2">
    {(showAllCategories ? categories : categories.slice(0, 3)).map((item) => (
      <label key={item.label} className="flex items-center gap-2 py-1">
        <input type="checkbox" />
        {item.label} <span className="text-muted-foreground">({item.count.toLocaleString()})</span>
      </label>
    ))}
    <button
      className="mt-2 text-purple-600 font-semibold text-sm"
      onClick={() => setShowAllCategories((prev) => !prev)}
    >
      {showAllCategories ? "Show less" : "Show more"}
    </button>
  </AccordionContent>
</AccordionItem>



        </Accordion>
      )}
    </div>
  );
};

export default FilterCourses;
