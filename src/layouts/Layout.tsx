import FooterBottom from "../components/FooterBottom";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <>
      <Outlet />
      <FooterBottom />
      <ToastContainer />
    </>
  );
};

export default Layout;
