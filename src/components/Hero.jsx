import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="max-w-7xl px-4 py-6 md:py-6 mx-auto">
      <section className="flex justify-between flex-wrap gap-y-6">
        <div className="self-center space-y-4 flex-1">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold font-SourceSans">Hundreds of jobs for you</h1>
            <h1 className="text-[#0188A6] text-5xl font-bold font-SourceSans">
              Verified by us.
            </h1>
          </div>

          <p className="text-lg text-gray-600 font-semibold font-Poppins">
            Here you can find your best job. Explore hundreds of jobs with us.
            Join with us and find your best dream jobs.
          </p>

          <form className="">
            <div className="flex justify-between bg-white max-w-sm rounded-l-md">
              <div>
                <input
                  type="text"
                  placeholder="e.g. Defense, Banking"
                  className="bg-white outline-none border-none rounded-md pl-2 py-2 placeholder:text-sm placeholder:font-Poppins w-60"
                />
              </div>
              <button className="font-SourceSans font-semibold text-white bg-[#0188A6] border-none text-sm px-3 rounded-r-md">
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="">
          <img src={hero} alt="hero" className="w-full h-full" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
