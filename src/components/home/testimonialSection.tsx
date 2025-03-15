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
    className="flex flex-col items-center justify-center text-center py-16 bg-cover bg-center"
    style={{ backgroundImage: "url('/home/testimonial.png')" }}>
    <div className="w-full max-w-4xl">
        <p className="bg-[#E9E2FF] text-[#704FE6] px-4 py-2 font-medium inline-block uppercase">
        Testimonial
        </p>
        <h1 className="text-center">
        Creating A Community Of <br /> Life Long Learners.
        </h1>

        <div className="grid max-[600px]:grid-cols-1 max-[769px]:grid-cols-3 max-[4000px]:grid-cols-3  gap-6 ">
        {testimonials.map((testimonial, index) => (
            <div
            key={index}
            className="bg-white shadow-lg border border-[#17254E] rounded-[10px] relative text-left p-[10px] m-[5px]"
            >
            <span className="absolute -top-[20px] -left-[5px] z-10">
                <Image
                src={testimonial.image}
                alt="quote icon"
                width={50}
                height={30}
                />
              </span>
              <p className="text-[#333931] mt-6 text-lg leading-relaxed">
                {testimonial.text}
              </p>
              <h2>
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
