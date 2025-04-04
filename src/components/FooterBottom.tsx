import olx from "../assets/images/asset 0.svg";
import carTradeTech from "../assets/images/cartrade_tech.svg";
import carwale from "../assets/images/carwale.svg";
import bikewale from "../assets/images/bikewale.svg";
import carTrade from "../assets/images/cartrade.svg";
import mobility from "../assets/images/mobility.svg";

const FooterBottom = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4 pb-6 py-12 px-40 bg-[#002f34] items-center">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 border-r-2 border-r-gray-300">
          <img src={carTradeTech} alt="" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 flex justify-center">
          <img src={olx} alt="" className="invert" width={65} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 flex justify-center">
          <img src={carwale} alt="" width={110} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 flex justify-center">
          <img src={bikewale} alt="" width={110} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 flex justify-center">
          <img src={carTrade} alt="" width={110} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 flex justify-center">
          <img src={mobility} alt="" width={110} />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-full px-4 flex justify-between mt-4 text-white text-[.75rem]">
          <span>Help - Sitemap</span>
          <span>All rights reserved © 2006-{new Date().getFullYear()} OLX</span>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
