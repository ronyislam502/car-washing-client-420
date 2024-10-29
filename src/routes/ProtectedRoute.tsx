import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import {
  logout,
  selectCurrentUser,
  TUser,
  useCurrentToken,
} from "../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { isTokenExpired } from "../utils/verifyToken";
import { toast } from "sonner";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  const user = useAppSelector(selectCurrentUser) as TUser;
  const isUserValid = pathname === user?.role;
  console.log("isUserValid", isUserValid);

  const token = useAppSelector(useCurrentToken);
  const isExpired = token ? isTokenExpired(token) : true;

  if (!token || isExpired || !isUserValid) {
    toast.error("Please sign in", { duration: 2000 });
    dispatch(logout());
    return <Navigate to="/logIn" replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
