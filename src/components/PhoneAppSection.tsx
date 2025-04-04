import React from "react";
import phoneApp from "../assets/images/phone-app.webp";
import appStore from "../assets/images/appstore_2x.webp";
import playStore from "../assets/images/playstore_2x.webp";

const PhoneAppSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pb-20">
      <div className="flex flex-wrap -mx-4 justify-center items-center">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4">
          <img src={phoneApp} alt="" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1xl px-12 border-r-2 border-r-gray-300">
          <h1 className="text-4xl uppercase mb-4">Try the olx app</h1>
          <p className="text-[1.25rem]">
            Buy, sell and find just about anything using the app on your mobile.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-8 uppercase">
          <h3>Get your app today</h3>
          <div className="flex gap-4 w-65 mt-4">
            <img src={appStore} alt="" className="w-1/2" />
            <img src={playStore} alt="" className="w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneAppSection;
