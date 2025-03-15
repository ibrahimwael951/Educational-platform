import Image from "next/image";
import { BsPlayFill } from "react-icons/bs";

const PlayButton = () => {
  return (
    <div className="fixed right-[2rem] bottom-[-2rem] flex flex-col items-center z-50">
      <div className="relative w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] bg-white rounded-full flex justify-center items-center shadow-lg">
        <Image
          src="/home/symbol3.png"
          alt="symbol"
          width={25}
          height={25}
          className="absolute left-[30%] top-[20%] w-8 h-8 object-contain"
        />
        <a href="#">
          <BsPlayFill className="text-[#704FE6] text-3xl bg-[#fff] rounded-full p-2" />
        </a>
      </div>
      <p className="mt-1 text-xs sm:text-sm text-[#fff]">Watch Now</p>
    </div>
  );
};

export default PlayButton;
