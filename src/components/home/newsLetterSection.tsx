import Image from "next/image";
 
const NewsletterSection = () => {
  return (
<section className="w-full min-h-screen bg-cover bg-center items-center">
<div className="relative w-full">
  <Image
    src="/home/news.png"
    alt="background"
    width={1000}
    height={800}
    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
  />

  <div className="absolute  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 flex flex-col items-center text-left sm:text-left">
    <div className="w-full sm:w-auto">
      <h3 className="text-lg sm:text-2xl md:text-3xl font-bold leading-tight p-[30px]">
      Join Our Newsletter
      </h3>
      <p className="font-bold text-[#fff] text-sm sm:text-lg md:text-xl  p-[30px]">
      Subscribe to our newsletter to get our latest updates & news.
      </p>
    </div>

    <div className="flex  bg-[#fff] p-[10px] rounded-lg shadow-lg items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-lg border-none outline-none rounded-l-lg"
            />
            <button className="btn">
              Subscribe Now
            </button>
          </div>

  </div>
</div>
</section>
  );
};

export default NewsletterSection;

