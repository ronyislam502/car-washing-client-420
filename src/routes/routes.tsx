import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routeGenerator } from "../utils/routesGenerator";
import { pageRoutes } from "./pageRoutes";
import Dashboard from "../layouts/Dashboard";
import { adminRoutes } from "./adminRoutes";
import ProtectedRoute from "./ProtectedRoute";
import { userRoutes } from "./userRoutes";
import NotFound from "../components/shared/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerator(pageRoutes),
  },
  {
    path: "/admin",
    element: <Dashboard />,
    children: routeGenerator(adminRoutes),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: routeGenerator(userRoutes),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
