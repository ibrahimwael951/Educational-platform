import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUsSection = () => {
  const feature = [
    {
      title: "World Class Trainers",
      desc: "Gravida dictum fusce placerat ultricies integer",
    },
    {
      title: "Easy Learning",
      desc: "Gravida dictum fusce placerat ultricies integer",
    },
    {
      title: "Flexible",
      desc: "Gravida dictum fusce placerat ultricies integer",
    },
    {
      title: "Affordable Price",
      desc: "Gravida dictum fusce placerat ultricies integer",
    },
  ];
  return (
    <section className="mx-auto my-5  p-5 flex justify-between items-center">
      <div className="flex flex-col items-center lg:items-start gap-10">
        <div className="flex w-full justify-between items-center gap-3">
          <p className="bg-[#E9E2FF] text-[#704FE6] text-xs sm:text-sm font-bold uppercase px-4 py-2 rounded-md">
            Why Choose Us
          </p>
          <Image src="/home/design2.png" alt="design" width={50} height={10} />
        </div>
        <h1 className="text-neutral-800 dark:text-white text-3xl sm:text-4xl font-bold leading-tight mt-3">
          Creating A Community Of <br />
          Life Long Learners.
        </h1>
        <p className="px-10 text-neutral-800 dark:text-slate-300 text-base sm:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris..
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          {feature.map((item, index) => (
            <div key={index} className="bg-[#E9E2FF] p-5 rounded-lg w-72 ">
              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-[#704FE6] text-xl" />
                <h6 className="text-[#0E2A46] font-bold text-lg">
                  {item.title}
                </h6>
              </div>
              <p className="text-[#4D5756] text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Image
        src="/home/group.png"
        alt="group"
        width={400}
        height={600}
        className="max-w-md sm:max-w-lg hidden lg:inline"
      />
    </section>
  );
};

export default WhyChooseUsSection;
