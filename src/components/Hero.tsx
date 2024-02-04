import React from 'react';
import image from './images/bg.png';
import footer from './images/footer.png';

const Component: React.FC = () => {
  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight + 10000, behavior: 'smooth' });
  };

  return (
    <section className="relative w-screen h-[120vh] flex items-center justify-center bg-gradient-to-b from-pink-200 via-[#f294be] to-pink-200">
      <img
        src={footer}
        alt="border"
        className="absolute bottom-40 left-0 object-cover"
        style={{ opacity: 0.75 }}
      />
      <div className="container px-4 md:px-6 flex flex-col items-center space-y-4 text-center -mt-[60vh] relative z-10">
        <div className="space-y-5">
          <h1 className="text-3xl font-bold tracking-tighter text-pink-700 dark:text-violet-200 sm:text-4xl md:text-5xl lg:text-6xl/none">
            Welcome to ELLIS!
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
            Moving from another country as a female immigrant? Figure out what you need to know.
          </p>
        </div>
        <div className="space-x-4">
          <button
            onClick={handleScrollDown}
            className="inline-flex h-9 items-center justify-center rounded-md bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-pink-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pink-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-violet-500 dark:hover:bg-violet-600 dark:focus-visible:ring-violet-600"
          >
            Learn more
          </button>
        </div>
      </div>
      <div className="absolute bottom-1/3 -translate-y-1/4 left-0 right-0 z-0 flex justify-center overflow-hidden">
        <img
          src={image}
          alt="bg"
          className="object-cover w-1/3"
          style={{ opacity: 0.2 }}
        />
      </div>
    </section>
  );
};

export default Component;