"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { IoIosTime } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const EventsPage = () => {
  const t = useTranslations("EventsPage");
  const router = useRouter();

  const events = [
    {
      id: 1,
      image: "/events/event.png",
      title: "Print, and publishing industries for previewing",
      time: "11 AM - 3 PM",
      location: "USA",
      text: t("eventText"),
    },
    {
      id: 2,
      image: "/events/event.png",
      title: "Print, and publishing industries for previewing",
      time: "21 April 2024",
      location: "USA",
      text: t("eventText"),
    },
    {
      id: 3,
      image: "/events/event.png",
      title: "Print, and publishing industries for previewing",
      time: "14 June 2023",
      location: "USA",
      text: t("eventText"),
    },
  ];


  const handleNavigate = (title: string) => {
    const id = encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"));
    router.push(`/events/${id}`);
  };

  return (
    <section className="max-w-7xl mt-30 mx-auto px-5 md:px-10 md:py-20 pt-32">
      <div className="flex flex-col md:flex-row gap-y-5 gap-x-10 justify-between items-center mt-4 m-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-white">
          {t("title")}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-items-center items-center my-8 mx-auto w-fit">
        {events.map((event) => (
          <div
            key={event.id}
            className="rounded-xl overflow-hidden shadow-md m-[10px] w-full max-w-96 cursor-pointer"
            onClick={() => handleNavigate(event.title)}
          >
            <Image
              src={event.image}
              alt={t("altImage")}
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />

            <div className="p-6">
              <h6 className="dark:text-purple-400">{event.title}</h6>

              <p className="text-sm font-semibold text-neutral-800 dark:text-white mt-10">
                {event.text}
              </p>

              <div className="flex items-center gap-4 text-[#4D5756] text-sm mb-4 mt-10">
                <div className="flex items-center gap-2">
                  <IoIosTime className="text-purple-500" />
                  <p className="text-neutral-800 dark:text-slate-400">
                    {event.time}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaLocationDot className="text-purple-500" />
                  <p className="text-neutral-800 dark:text-slate-400">
                    {event.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsPage;
