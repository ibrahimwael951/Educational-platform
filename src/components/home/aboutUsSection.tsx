import React from "react";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section className="m-auto px-6 mt-3 flex flex-col lg:flex-row justify-center items-center gap-20 min-h-screen ">
     
        {/* Section Left */}
      
            <Image
              src="/home/about.png"
              width={500}
              height={500}
              alt="about"
              className="rounded-lg w-full   max-w-[300px] md:max-w-[400px]  lg:max-w-[600px]"
            />
          
        

        {/* Section Right */}
        <div className="w-full flex flex-col gap-10 items-center text-center">
          <p className="bg-[#E9E2FF] text-[#704FE6] w-fit px-4 py-2 rounded-md font-medium inline-block">
            Our About Us
          </p>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4">
            Learn & Grow Your 
            <span className="relative inline-block">
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
          <div className=" flex gap-4 mt-6 items-center w-fit">
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
          <a href="#" className="button2 w-fit ">
            Learn More →
          </a>
        </div>
 
    </section>
  );
};

export default AboutUsSection;
