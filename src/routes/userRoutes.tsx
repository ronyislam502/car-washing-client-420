import PastBookings from "../pages/dashboard/user/PastBookings";
import Profile from "../pages/dashboard/user/Profile";
import UpcomingBookings from "../pages/dashboard/user/UpcomingBookings";

export const userRoutes = [
  {
    path: "dashboard",
    element: <Profile />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "past-bookings",
        element: <PastBookings />,
      },
      {
        path: "upcoming-bookings",
        element: <UpcomingBookings />,
      },
    ],
  },
];
