const Hero = () => {
  return (
    <section className="bg-white pb-12">
      <div className="w-full px-8 py-12 md:py-20 flex flex-col items-center">
        <h1 className="text-center text-4xl md:text-6xl max-w-xl font-semibold">
          The easiest way to scale your analytics
        </h1>
        <p className="text-center max-w-xl my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          dolore vitae minus dolorum.
        </p>
        <button className="bg-indigo-600 text-white text-base md:text-lg font-medium px-8 py-2 shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
          Try it free
        </button>
      </div>

      <div className="flex  overflow-hidden">
      </div>
      <div className="flex overflow-hidden mt-4">
      </div>
    </section>
  );
};

export default Hero;