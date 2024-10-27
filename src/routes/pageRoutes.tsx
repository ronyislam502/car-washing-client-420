import ServiceManagement from "../pages/Dashboard/Admin/ServiceManagement/ServiceManagement";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Reviews from "../pages/Reviews/Reviews";
import Service from "../pages/Service/Service";
import SignUp from "../pages/SignUp/SignUp";

export const pageRoutes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "services",
        element: <Service />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "serviceManagement",
        element: <ServiceManagement />,
      },
      {
        path: "logIn",
        element: <LogIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
    ],
  },
];
