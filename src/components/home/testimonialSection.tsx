import Image from "next/image";

const testimonials = [
{
    name: "Kathy Sullivan",
    position: "CEO at Ordian IT",
    text: "“Lorem ipsum dolor sit amet, elit, sed \n do eiusmod tempor incididunt ut \n labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”",
    image: "/home/qoute icon.png",
},
{
    name: "Elsie Stroud",
    position: "CEO at Edwards",
    text: "“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”",
    image: "/home/qoute icon.png",
},
{
    name: "Kathy Sullivan",
    position: "CEO at Ordian IT",
    text: "“Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim. Amet consectetur adipiscing”",
    image: "/home/qoute icon.png",
},
];

const TestimonialSection = () => {
  return (
    <section
    className="flex flex-col gap-20 items-center justify-center text-center py-16 bg-cover bg-center"
    // style={{ backgroundImage: "url('/home/testimonial.png')" }}
    >
    <div className="w-full max-w-4xl flex flex-col gap-10 items-center justify-center">
        <p className="bg-[#E9E2FF] text-[#704FE6] px-4 py-2 font-medium inline-block uppercase">
        Testimonial
        </p>
        <h1 className="text-center text-neutral-800 dark:text-white">
        Creating A Community Of <br /> Life Long Learners.
        </h1>

        <div className="grid max-[600px]:grid-cols-1 max-[769px]:grid-cols-3 max-[4000px]:grid-cols-3  gap-6 ">
        {testimonials.map((testimonial, index) => (
            <div
            key={index}
            className="bg-slate-100 dark:bg-neutral-800 shadow-lg border border-neutral-700  rounded-xl relative text-left p-[10px] m-[5px]"
            >
            <span className="absolute -top-[20px] -left-[5px] z-10">
                <Image
                src={testimonial.image}
                alt="quote icon"
                width={50}
                height={30}
                />
              </span>
              <p className="text-neutral-500 dark:text-slate-300 mt-6 text-lg leading-relaxed">
                {testimonial.text}
              </p>
              <h2 className="text-neutral-800 dark:text-white">
                {testimonial.name}
              </h2>
              <a
                href="#"
                className="text-[#704FE6] text-sm font-medium "
              >
                {testimonial.position}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
