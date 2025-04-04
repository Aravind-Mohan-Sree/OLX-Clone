import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Post from "../pages/Post";
import Item from "../pages/Item";
import Error from "../components/Error";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "post",
        element: <ProtectedRoute />,
        children: [
          {
            path: "",
            element: <Post />,
          },
        ],
      },
      {
        path: "item/:id",
        element: <ProtectedRoute />,
        children: [
          {
            path: "",
            element: <Item />,
          },
        ],
      },
      { path: "*", element: <Error /> },
    ],
  },
]);
