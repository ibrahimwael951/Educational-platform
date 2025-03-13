import Image from "next/image";

const HeroSection = () => {
  return (
    <main
      className="w-full bg-cover bg-center py-12 md:py-16 relative"
      style={{ backgroundImage: "url('/images/home/Background.png')" }}>
      <div className="container flex flex-col md:flex-row justify-between px-8 relative">
      {/* Left Content (Text) */}
<div className="hero-text absolute md:w-1/2 text-left order-2 md:order-1 space-y-6">
  <p className="text-sm md:text-lg uppercase text-[#704FE6] font-semibold">
    Welcome Edunity Online Courses
  </p>
  <h1 className="text-[3rem] md:text-[3rem] font-bold text-[#17254E] leading-[1.2]">
    Achieving Your Dreams <br /> Through Education
  </h1>
  <p className="text-[#333931] max-w-lg">
    We are experienced in educational platform and skilled strategies <br />
    for the success of our online learning.
  </p>
  
  {/* Find Courses Button */}
  <a href="/courses"
    className="inline-flex items-center gap-3 bg-[#1e2a47] py-4 px-6 rounded-full hover:bg-[#0e1a3b] cursor-pointer transition">
    Find Courses 
    <span className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full">
      →
    </span>
  </a>
</div>


{/* Right Content (Image & Instructor Card) */}
        <div className="relative md:w-1/2 order-1 md:order-2 flex justify-end">
          <Image
            src="/images/home/hero.png"
            alt="Students in library"
            width={520}
            height={400}
            className="rounded-lg shadow-lg"
          />
          {/* Instructor Card */}
          <div className="absolute bg-white p-4 rounded-lg shadow-lg flex ">
            <div className="mb-2">
              <p className="text-lg font-medium text-black">
                <span className="text-[#704FE6] font-bold">200+ </span> Instructor
              </p>
            </div>
            <Image
              src="/images/home/heros.png"
              alt="Instructors"
              width={100}
              height={40}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
