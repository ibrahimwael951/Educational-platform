const NewsletterSection = () => {
  return (
    <section className="w-full   bg-cover bg-center items-center">
      <div className="relative   w-full h-[400px] md:h-[500px] lg:h-[600px] bg-purple-600 px-4 flex flex-col items-center justify-center gap-10">
       
          <h3 className="text-lg sm:text-2xl md:text-3xl font-bold leading-tight  ">
            Join Our Newsletter
          </h3>
          <p className="font-bold text-[#fff] text-sm sm:text-lg md:text-xl   ">
            Subscribe to our newsletter to get our latest updates & news.
          </p>
     

        <div className="flex  bg-[#fff] p-[10px] rounded-lg shadow-lg items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 text-lg border-none outline-none rounded-l-lg"
          />
          <button className="btn">Subscribe Now</button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
