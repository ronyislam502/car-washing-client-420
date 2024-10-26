import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
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
