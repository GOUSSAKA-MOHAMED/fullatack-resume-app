import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter , RouterProvider , Outlet,} from "react-router-dom";

// import components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// import routes
import Home from "./routes/Home";
import Edit from "./routes/Edit";
import Resume from "./routes/Resume";
import Sign from "./routes/Sign";
import Signup from "./routes/Signup";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <Edit />,
      },
      {
        path: "contact",
        element: <Resume />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "sign",
        element: <Sign />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

