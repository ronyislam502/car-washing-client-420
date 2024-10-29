import { Link, useNavigate } from "react-router-dom";
import { MenuLinks } from "../../utils/list";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../../components/ui/Drawer";
import { IoMenu } from "react-icons/io5";
import { AiOutlineCloseSquare } from "react-icons/ai";
import {
  logout,
  selectCurrentUser,
  TUser,
} from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { useGetMyBookingsQuery } from "../../redux/features/booking/bookinApi";
// import { TBooking } from "../../types/booking.type";
// import { filterUpcomingBookings, getTargetDateTime } from "../../utils/utils";
// import CountdownTimer from "../../components/shared/CountdownTimer";

const NavBar = () => {
  const user = useAppSelector(selectCurrentUser) as TUser;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // upcoming booking
  // const { data, isLoading, error } = useGetMyBookingsQuery(undefined);
  // const bookingData = data?.data || [];

  // const latestBooking = filterUpcomingBookings(bookingData) as TBooking | null;

  // const latestDateAndTime = latestBooking
  //   ? getTargetDateTime(latestBooking.slot.date, latestBooking.slot.startTime)
  //   : null;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/logIn");
  };

  const conditionalLinks = (
    <>
      {!user && (
        <Link to={"/logIn"} className="primary-border-btn">
          Login
        </Link>
      )}
      {user && (
        <div className="flex lg:flex-row flex-col lg:items-center gap-3">
          <Link to={`/${user.role}/dashboard`}>Dashboard</Link>
          {/* {latestDateAndTime && !isLoading && !error && (
            <CountdownTimer targetDateTime={latestDateAndTime} />
          )} */}
          <button onClick={handleLogout} className="primary-border-btn">
            Logout
          </button>
        </div>
      )}
    </>
  );

  return (
    <div className="h-[60px] flex justify-between items-center bg-slate-100 lg:px-[60px] px-5 py-2 text-primary">
      <Link to={"/"} className="flex gap-x-2 items-center">
        <p className="text-3xl font-bold">
          <span className="text-green-500">Car</span>{" "}
          <span className="text-red-500">Wash</span>
        </p>
      </Link>
      <div className="md:flex items-center gap-x-3 font-medium hidden">
        {MenuLinks?.map((menu, idx) => (
          <Link key={idx} to={menu?.path}>
            {menu?.name}
          </Link>
        ))}
        {conditionalLinks}
      </div>
      <div className="md:hidden block">
        <Drawer direction="right">
          <DrawerTrigger>
            <IoMenu className="text-2xl" />{" "}
          </DrawerTrigger>
          <DrawerContent className="right-0 top-0 mt-0 ms-[200px] rounded-r-none">
            <DrawerClose className="flex justify-end m-2">
              <AiOutlineCloseSquare className=" text-3xl p-1" />
            </DrawerClose>
            <div className="flex flex-col w-[200px] gap-y-3 font-medium px-4 ">
              {MenuLinks?.map((menu, idx) => (
                <Link key={idx} to={menu?.path}>
                  {menu?.name}
                </Link>
              ))}
              {conditionalLinks}
              {/* {latestDateAndTime && !isLoading && !error && (
                <CountdownTimer targetDateTime={latestDateAndTime} />
              )} */}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default NavBar;
