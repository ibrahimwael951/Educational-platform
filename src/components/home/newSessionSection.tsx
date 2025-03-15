import Image from "next/image";
import PlayButton from "./playButton";

const CallToEnrollSection = () => {
  return (
    <section className="relative text-white my-5 overflow-hidden">
      <div className="relative w-full">
        <Image
          src="/home/new.png"
          alt="background"
          width={1920}
          height={1080}
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
        />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 flex flex-col items-center text-left sm:text-left">
          <div className="w-full sm:w-auto">
            <p className="font-bold text-[#FFD25D] text-sm sm:text-lg md:text-xl whitespace-nowrap">
              Join Our New Session
            </p>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold leading-tight">
              Call To Enroll Your Child <br /> (+91) 958423452
            </h3>
          </div>

          <div className="mt-4 sm:mt-0 md:absolute md:right-10 md:bottom-10">
            <PlayButton />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToEnrollSection;
