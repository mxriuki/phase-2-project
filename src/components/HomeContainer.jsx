import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full bg-gray-900 text-gray-100"
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6 sp3:pb-[6rem] sp3:pt-[0rem] ">
        <div className="flex items-center gap-2 justify-center bg-orange-600 px-4 py-1 rounded-full">
          <p className="text-base text-white font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-white">
          The Fastest Delivery in
          <span className="text-orange-500 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>

        <p className="text-base text-gray-300 text-center md:text-left md:w-[80%]">
          Welcome to Best Eats!
          At Best Eats, we're passionate about bringing you the finest dining experiences right at your fingertips. Whether you’re craving a quick bite or a gourmet feast, our curated menu showcases an array of delicious options designed to satisfy every palate. From farm-fresh ingredients to mouthwatering flavors, we are committed to offering you not just a meal, but a memorable culinary journey. Explore our diverse selection, discover new favorites, and let us turn your dining moments into extraordinary experiences. Join us at Best Eats and taste the difference that passion and quality make!
        </p>
        <a href="#menu">
          <button
            type="button"
            className="bg-gradient-to-br from-orange-500 to-orange-600 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          >
            Order Now
          </button>
        </a>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center 3xl:pl-[20rem] 3xl:pr-[11rem] sp2:pl-[16rem] sp2:pr-[7rem] sp1:pl-[5rem] sp1:pr-[7rem] py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="lg:w-190 p-4 bg-gray-800 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.img}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                  alt="Img"
                />
                <p className="text-base lg:text-xl font-semibold text-gray-100 mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-center text-[12px] lg:text-sm text-gray-400 font-semibold my-1 lg:my-3">
                  {n.desc}
                </p>

                <p className="text-sm font-semibold text-orange-400">
                  <span className="text-xs text-red-600">$</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
