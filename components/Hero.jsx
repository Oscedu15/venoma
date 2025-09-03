import { ArrowRight, Flame, PlayCircle } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section
      className="bg-grey-50 xl:h-[1064px] bg-[url(/assets/img/hero/bg.png)]
  bg-no-repeat bg-[60%] md:bg-right-bottom xl:bg-right"
    >
      <div className="container mx-auto flex items-center h-full">
        <div className="relative flex flex-col items-center w-full xl:flex-row">
          {/* text */}
          <div className="w-full max-w-[760px] mb-8 md:mb-0 flex flex-col items-center xl:items-start">
            {/* badge & text */}
            <div className="flex items-center gap-4 mb-12">
              <div className="bg-accent text-primary flex items-center gap-2 py-2 px-4 rounded-full">
                <Flame />
                <p className="font-semibold">New</p>
              </div>
              <p className="text-center">
                Premium Sports Apparel for Peak Performance
              </p>
            </div>
            {/* h1 */}
            <h1 className="h1 mb-[40px] text-center xl:text-left">
              Unleash <br /> Your Inner <br />
              Athlete
            </h1>
            {/* btns */}
            <div
              className="flex flex-col-reverse xl:flex-row gap-10
            mb-32 md:mb-0"
            >
              <button className="btn btn-accent">
                <div className="flex items-center gap-4">
                  <span className="">Explore Collection</span>
                  <ArrowRight />
                </div>
              </button>
              {/* play btn */}
              <button
                className="h-[56px] font-medium
               text-primary flex items-center
               justify-center cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="">Watch Video</span>
                  <div
                    className="bg-white text-primary rounded-full
                  border-10 border-accent p-2 animate-pulse"
                  >
                    <PlayCircle />
                  </div>
                </div>
              </button>
            </div>
          </div>
          {/* img */}
          <div className="relative xl:absolute xl:-right-[100px] xl:-top-7">
            <img src="assets/img/hero/running.png" alt="running" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
