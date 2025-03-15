import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUsSection = () => {
  return (
    <section className="container mx-auto px-5 py-5 mt-2 grid grid-cols-2 max-[600px]:grid-cols-1 max-[769px]:grid-cols-2 max-[4000px]:grid-cols-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="flex justify-between items-center gap-3">
            <p className="bg-[#E9E2FF] text-[#704FE6] text-xs sm:text-sm font-bold uppercase px-4 py-2 rounded-md">
              Why Choose Us
            </p>
            <Image src="/home/design2.png" alt="design" width={50} height={10} />
          </div>
          <h1 className="text-[#0E2A46] text-3xl sm:text-4xl font-bold leading-tight mt-3">
            Creating A Community Of <br />
            Life Long Learners.
          </h1>
          <p className="text-[#333931] text-base sm:text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris..
          </p>



          <div className="grid grid-cols-2 max-[600px]:grid-cols-1 max-[769px]:grid-cols-2 max-[4000px]:grid-cols-2">
            {[
              { title: "World Class Trainers", desc: "Gravida dictum fusce placerat ultricies integer" },
              { title: "Easy Learning", desc: "Gravida dictum fusce placerat ultricies integer" },
              { title: "Flexible", desc: "Gravida dictum fusce placerat ultricies integer" },
              { title: "Affordable Price", desc: "Gravida dictum fusce placerat ultricies integer" },
            ].map((feature, index) => (
              <div key={index} className="bg-[#E9E2FF] p-5 rounded-lg  m-[10px] p-[20px]">
                <div className="flex items-center gap-4">
                  <FaCheckCircle className="text-[#704FE6] text-xl" />
                  <h6 className="text-[#0E2A46] font-bold text-lg">{feature.title}</h6>
                </div>
                <p className="text-[#4D5756] text-sm mt-2">{feature.desc}</p>
              </div>
            ))}
            
          </div>
        </div>
      </div>
      <div className="flex justify-center">
          <Image src="/home/group.png" alt="group" width={400} height={600} className="max-w-md sm:max-w-lg" />
        </div>
    </section>
  );
};

export default WhyChooseUsSection;
