import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { ChevronLeft, ChevronRight, Heart, Share2 } from "lucide-react";

const ItemDetail = () => {
  interface Item {
    id: string;
    userId: string;
    adTitle: string;
    description: string;
    location: string;
    price: number;
    image: string;
    name: string;
    postedOn: Timestamp;
  }

  const { id } = useParams();
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      if (!id) return;

      try {
        const itemRef = doc(db, "items", id);
        const itemSnap = await getDoc(itemRef);

        if (itemSnap.exists()) {
          setItem({ ...(itemSnap.data() as Item), id });
        } else {
          console.log("No such post!");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchItems();
  }, [id]);

  return (
    <div className="bg-gray-100 pt-6">
      <div className="container mx-auto p-4 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3 bg-white rounded-sm border border-[#0000002e]">
            <div className="relative">
              <img
                src={item?.image}
                alt=""
                className="w-full h-[400px] object-cover rounded-t-sm"
              />

              <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 rounded-full p-2 shadow-md">
                <ChevronLeft className="text-white" />
              </button>
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 bg-opacity-70 rounded-full p-2 shadow-md">
                <ChevronRight className="text-white" />
              </button>

              <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                1/1
              </div>
            </div>

            <div className="relative p-2 border-gray-200">
              <div className="flex overflow-x-auto gap-2 py-2 px-8">
                <div className="w-[60px] h-[60px] border-2 border-gray-900 rounded-sm">
                  <img
                    src={item?.image}
                    alt="Thumbnail 8"
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
              </div>

              <button className="absolute left-1 top-1/2 -translate-y-1/2 bg-white">
                <ChevronLeft />
              </button>
              <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-white">
                <ChevronRight />
              </button>
            </div>

            <div className="p-4 border-t border-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Description
              </h2>
              <p className="text-gray-700 mb-2">{item?.description}</p>
            </div>
          </div>

          <div className="w-full md:w-1/3 space-y-4">
            <div className="bg-white rounded-sm border border-[#0000002e] p-4">
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-3xl font-bold">
                  ₹ {item?.price.toLocaleString("en-IN")}
                </h1>
                <div className="flex gap-4">
                  <button className="text-gray-600 hover:text-gray-800">
                    <Share2 />
                  </button>
                  <button className="text-gray-600 hover:text-red-500">
                    <Heart />
                  </button>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{item?.adTitle}</p>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <small>{item?.location}</small>
                <small>
                  {item?.postedOn.toDate().toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </small>
              </div>
            </div>

            <div className="bg-white rounded-sm border border-[#0000002e] p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-800 text-xl">
                      {item?.name[0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-xl">
                      {item?.name}
                    </h3>
                  </div>
                </div>
                <ChevronRight />
              </div>
            </div>

            <div className="bg-white rounded-sm border border-[#0000002e] p-4">
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                Posted in
              </h3>
              <small className="text-gray-700">{item?.location}</small>
            </div>

            <div className="flex justify-between items-center text-sm">
              <div className="font-bold">AD ID {item?.id}</div>
              <a href="#" className="font-bold text-xs uppercase">
                Report this ad
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
