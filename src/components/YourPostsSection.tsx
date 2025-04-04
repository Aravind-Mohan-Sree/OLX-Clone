import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  Timestamp,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import heart from "../assets/images/asset 5.svg";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

const YourPostsSection = () => {
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

  const [items, setItems] = useState<Item[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsRef = collection(db, "items");
        const q = query(
          itemsRef,
          where("userId", "==", user?.uid),
          orderBy("postedOn", "desc")
        );
        const querySnapshot = await getDocs(q);
        const usersList = querySnapshot.docs.map((doc) => ({
          ...(doc.data() as Item),
          id: doc.id,
        }));

        setItems(usersList);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchItems();
  }, [user]);

  return !items.length ? null : (
    <div className="px-[10rem] pb-12">
      <h1 className="text-2xl mb-4">Your Posts</h1>
      <div className="grid grid-cols-4 gap-4">
        {items.map(({ id, adTitle, location, price, image, postedOn }) => (
          <Link to={"/item/" + id} key={id}>
            <div className="group relative overflow-hidden rounded-lg border bg-white cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image}
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
                      ₹ {price.toLocaleString("en-IN")}
                    </h3>
                  </div>
                </div>

                <p className="text-sm font-medium">{adTitle}</p>

                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      {location}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500">
                    {postedOn.toDate().toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default YourPostsSection;
