import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import Reviews from "../pages/Reviews/Reviews";
import ServiceCompare from "../pages/Service/ServiceCompare";
import Services from "../pages/Service/Services";
import SignUp from "../pages/SignUp/SignUp";

export const pageRoutes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "servicesCompare",
        element: <ServiceCompare />,
      },
      {
        path: "reviews",
        element: <Reviews />,
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
