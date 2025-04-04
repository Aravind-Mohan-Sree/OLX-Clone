import React from "react";
import bikeImg1 from "../assets/images/bike1jpeg.jpeg";
import bikeImg2 from "../assets/images/bike2jpeg.jpeg";
import bikeImg3 from "../assets/images/bike3jpeg.jpeg";
import bikeImg4 from "../assets/images/bike4jpeg.jpeg";
import heart from "../assets/images/asset 5.svg";

const ProductSection: React.FC = () => {
  interface Bike {
    img: string;
    price: number;
    year: number;
    distance: number;
    name: string;
    location: string;
    date: string;
  }

  const bike1: Bike = {
    img: bikeImg1,
    price: 46400,
    year: 1998,
    distance: 67000,
    name: "Yamaha RX 100",
    location: "Trivandrum",
    date: new Date(
      new Date().setDate(new Date().getDate() - 136)
    ).toLocaleDateString("en-US", { month: "short", day: "2-digit" }),
  };

  const bike2: Bike = {
    img: bikeImg2,
    price: 80000,
    year: 2021,
    distance: 40000,
    name: "Hero Honda Splendor",
    location: "Ernakulam",
    date: new Date(
      new Date().setDate(new Date().getDate() - 6)
    ).toLocaleDateString("en-US", { month: "short", day: "2-digit" }),
  };

  const bike3: Bike = {
    img: bikeImg3,
    price: 52100,
    year: 2004,
    distance: 25400,
    name: "Bajaj Pulsar NS200",
    location: "Kollam",
    date: new Date(
      new Date().setDate(new Date().getDate() - 35)
    ).toLocaleDateString("en-US", { month: "short", day: "2-digit" }),
  };

  const bike4: Bike = {
    img: bikeImg4,
    price: 24000,
    year: 2012,
    distance: 43000,
    name: "Bajaj Platina 100",
    location: "Kottayam",
    date: new Date(
      new Date().setDate(new Date().getDate() - 60)
    ).toLocaleDateString("en-US", { month: "short", day: "2-digit" }),
  };

  const bikes = [bike1, bike2, bike3, bike4];

  return (
    <div className="px-[10rem] pb-20">
      <h1 className="text-2xl mb-4">Fresh recommendations</h1>
      <div className="grid grid-cols-4 gap-4">
        {bikes.map((bike, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg border bg-white cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={bike.img}
                alt=""
                className="h-full w-full object-cover"
              />
              <button
                className="absolute right-3 top-3 rounded-full bg-white/90 p-2 backdrop-blur-sm active:scale-95 cursor-pointer"
                aria-label="Add to favorites"
              >
                <img src={heart} alt="" className="h-5 w-5 text-gray-700" />
              </button>
            </div>

            <div className="p-4">
              <div className="mb-3 flex items-baseline justify-between">
                <div className="space-y-1">
                  <h3 className="font-semibold text-2xl">
                    ₹ {bike.price.toLocaleString()}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{bike.year}</span>
                    <span>•</span>
                    <span>{bike.distance}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm font-medium">{bike.name}</p>

              <div className="mt-3 flex items-end justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    {bike.location}
                  </p>
                </div>
                <p className="text-xs text-gray-500">{bike.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
