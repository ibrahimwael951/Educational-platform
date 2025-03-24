"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { IoIosTime } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const events = [
  {
    id: 1,
    image: "/events/event.png",
    title: "Print, and publishing industries for previewing",
    date:"Date: 3 / 12 / 2025",
    time: "Duration: 11 AM - 3 PM",
    location: "Location: USA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    activity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
},
  {
    id: 2,
    image: "/events/event.png",
    title: "Print, and publishing industries for previewing",
    date:"Date: 3 / 12 / 2025",
    time: "Duration: 11 AM - 3 PM",
    location: "Location: USA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    activity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",  
},
  {
    id: 3,
    image: "/events/event.png",
    title: "Print, and publishing industries for previewing",
    date:"Date: 3 / 12 / 2025",
    time: "Duration: 11 AM - 3 PM",
    location: "Location: USA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
    activity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
},
];

const EventDetails = () => {
  const params = useParams();
  const id = decodeURIComponent(params.id as string);

  console.log("Params:", params);
  console.log("Decoded ID:", id);

  const event = events.find(
    (eve) => eve.title.toLowerCase().replace(/\s+/g, "-") === id
  );

  if (!event) {
    return <div className="text-center text-red-500">Event not found!</div>;
  }

  return (
    <div className="max-w-5xl mx-auto my-10 p-6 mt-30 bg-white dark:bg-neutral-700 shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 text-center p-5 dark:text-white">
          <Image src={event.image} alt="Event image" width={400} height={400} className="mx-auto" />
          <h6 className="dark:text-purple-400 text-left">{event.title}</h6>

          <div className="flex text-center gap-4 mt-10">
            <SlCalender  className="text-purple-600 dark:text-purple-400" />
            <p className="text-sm text-gray-600 dark:text-gray-400">{event.date}</p>
          </div>

          <div className="flex text-center gap-4">
            <IoIosTime className="text-purple-600 dark:text-purple-400" />
            <p className="text-sm text-gray-600 dark:text-gray-400">{event.time}</p>
          </div>

          <div className="flex text-center gap-4">
            <FaLocationDot className="text-purple-600 dark:text-purple-400" />
            <p className="text-sm text-gray-600 dark:text-gray-400">{event.location}</p>
          </div>
        </div>

        <div className="md:w-2/3 p-5">
          <h1 className="text-2xl font-bold dark:text-white">Event Description</h1>
          <p className="mt-4 text-gray-700 dark:text-gray-400">{event.description}</p>
          <h1 className="text-2xl font-bold dark:text-white mt-10">Event Activities</h1>
          <p className="mt-4 text-gray-700 dark:text-gray-400">{event.activity}</p>
          <button className="p-3 bg-purple-500 text-white rounded-2xl mt-10 cursor-pointer hover:bg-purple-700">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
