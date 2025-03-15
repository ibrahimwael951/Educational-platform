import Image from "next/image";

const CareerSection = () => {
  return (
    <section className="container mx-auto text-center py-10"
    style={{ backgroundImage: "url('/home/career.png')" }}>

      <p className="bg-[#E9E2FF] text-[#704FE6] px-4 py-2 font-medium inline-block uppercase rounded-lg">
        Choose Your Career
      </p>
      <h1 >Discover Your Gain</h1>

      <div className="grid  max-[600px]:grid-cols-1 max-[769px]:grid-cols-1 max-[4000px]:grid-cols-2 gap-6 mt-8 items-center justify-center">
        
        {/* Card 1*/}
        <div className="relative m-[10px] ">
        <div className="relative rounded-xl flex  items-center justify-left p-[10px] overflow-hidden">
            <Image
              src="/home/person.png"
              alt="woman"
              className="w-full h-full object-cover rounded-xl"
              layout="intrinsic"
              width={400}
              height={400}
            />

            <div className="absolute flex flex-col justify-left items-left p-[20px]">
              <p className="text-lg text-[#FFFFFF] items-left text-left">Start From Today</p>
              <p className="text-xl text-[#FFFFFF] items-left text-left">Join Our Training Courses & <br/> Build Your Skill.</p>
              <a href="#" className="button2">
                Join Now →
              </a>
            </div>
          </div>
        </div>

        {/* Card2 */}
        <div className="relative m-[10px]">
          <div className="relative rounded-xl flex  items-center justify-left p-[10px]  overflow-hidden">

            <Image
              src="/home/person2.png"
              alt="man"
              className="w-full h-full object-cover rounded-xl"
              layout="intrinsic"
              width={400}
              height={400}
            />

            <div className="absolute flex flex-col justify-left items-left  p-[20px]">
              <p className="text-lg text-[#FFFFFF] items-left text-left">Start From Today</p>
              <p className="text-xl text-[#FFFFFF]  items-left text-left">Join Our Training Courses & <br/> Build Your Skill.</p>
              <a href="#" className="button1">
                Join Now →
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareerSection;
