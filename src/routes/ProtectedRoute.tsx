import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ProtectedRoute = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuthorization = async () => {
      if (!user) {
        setIsAuthorized(false);
        return;
      }

      if (!id) {
        setIsAuthorized(true);
        return;
      }

      const itemRef = doc(db, "items", id);
      const itemSnap = await getDoc(itemRef);

      if (itemSnap.exists() && itemSnap.data().userId === user.uid) {
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    };

    checkAuthorization();
  }, [user, id]);

  if (isAuthorized === null) return null;
  return isAuthorized ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
