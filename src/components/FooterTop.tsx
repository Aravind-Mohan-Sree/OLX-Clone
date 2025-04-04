import facebook from "../assets/images/asset 8.svg";
import instagram from "../assets/images/asset 9.svg";
import x from "../assets/images/asset 10.svg";
import youTube from "../assets/images/asset 11.svg";
import playStore from "../assets/images/playstore_2x.webp";
import appStore from "../assets/images/appstore_2x.webp";

const FooterTop = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4 bg-[#ebeeef] px-40">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4">
          <div className="text-gray-800 p-6 rounded-lg">
            <h3 className="uppercase mb-4">Popular Locations</h3>
            <ul className="text-[12px] space-y-1">
              <li>Kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4">
          <div className="text-gray-800 p-6 rounded-lg">
            <h3 className="uppercase mb-4">Trending Locations</h3>
            <ul className="text-[12px] space-y-1">
              <li>Bhubaneshwar</li>
              <li>Hyderabad</li>
              <li>Chandigarh</li>
              <li>Nashik</li>
            </ul>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4">
          <div className="text-gray-800 p-6 rounded-lg">
            <h3 className="uppercase mb-4">About Us</h3>
            <ul className="text-[12px] space-y-1">
              <li>Tech@OLX</li>
            </ul>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-2">
          <div className="text-gray-800 p-6 rounded-lg">
            <h3 className="uppercase mb-4">OLX</h3>
            <ul className="text-[12px] space-y-1">
              <li>Blog</li>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
              <li>Vulnerability Disclosure Program</li>
            </ul>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
          <div className="p-6 rounded-lg text-gray-800">
            <h3 className="uppercase">Follow Us</h3>
            <div className="flex gap-2 w-12 mt-4">
              <img
                src={facebook}
                alt=""
                className="w-1/2 [filter:brightness(0)_saturate(100%)_invert(45%)_sepia(14%)_saturate(663%)_hue-rotate(137deg)_brightness(90%)_contrast(89%)]"
              />
              <img
                src={instagram}
                alt=""
                className="w-1/2 [filter:brightness(0)_saturate(100%)_invert(45%)_sepia(14%)_saturate(663%)_hue-rotate(137deg)_brightness(90%)_contrast(89%)]"
              />
              <img
                src={x}
                alt=""
                className="w-1/2 [filter:brightness(0)_saturate(100%)_invert(45%)_sepia(14%)_saturate(663%)_hue-rotate(137deg)_brightness(90%)_contrast(89%)]"
              />
              <img
                src={youTube}
                alt=""
                className="w-1/2 [filter:brightness(0)_saturate(100%)_invert(45%)_sepia(14%)_saturate(663%)_hue-rotate(137deg)_brightness(90%)_contrast(89%)]"
              />
            </div>
            <div className="flex flex-col gap-2 w-35 mt-4">
              <img src={playStore} alt="" />
              <img src={appStore} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
