import React from "react";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section className="container mx-auto my-10 px-6 mt-3">
      <div className="flex flex-col-2 md:flex-col-2 sm:flex-col-1 gap-8">
        {/* Section Left */}
        <div className="relative w-full lg:w-1/2 md:w-1/2 flex flex-col gap-4 md:items-start">
          <div className="flex gap-4">
            <Image
              src="/home/about.png"
              width={150}
              height={150}
              alt="about"
              className="rounded-lg w-[50%] sm:w-[60%] md:w-[90%] lg:w-[80%]"
            />
          </div>
        </div>

        {/* Section Right */}
        <div className="w-full lg:w-1/2 md:w-1/2  md:text-left">
          <p className="bg-[#E9E2FF] text-[#704FE6] px-4 py-2 rounded-md font-medium inline-block">
            Our About Us
          </p>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">
            Learn & Grow Your{" "}
            <span className="relative inline-block">
              <span className="absolute -z-10 w-full h-full rounded-full px-3 py-1"></span>
              Skills
            </span>
            <br />
            From Anywhere
          </h1>

          <p className="text-[#333931] mt-3 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br />
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, <br />
            quis nostrud exercitation ullamco laboris..
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-col-1 gap-6 mt-6">
            <div>
              <h6>Flexible classNamees</h6>
              <p className="text-[#0E2A46]">
                Suspendisse ultrice gravida dictum <br />
                fusce placerat ultricies integer quis
                <br />
                auctor elit sed vulputate mi sit.
              </p>
            </div>
            <div>
              <h6>Flexible classNamees</h6>
              <p className="text-[#0E2A46]">
                Suspendisse ultrice gravida dictum <br />
                fusce placerat ultricies integer quis
                <br />
                auctor elit sed vulputate mi sit.
              </p>
            </div>
          </div>

          {/* Button */}
          <a href="#" className="button2">
            Load More →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
