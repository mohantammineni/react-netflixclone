import React from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";

const Landing = () => {
  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute inset-0">
        <img src={BG_URL} className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-white text-6xl font-bold text-center w-6/12">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-white text-center text-xl font-bold">
          Starts at ₹149. Cancel anytime.
        </p>
      </div>
    </div>
  );
};

export default Landing;
