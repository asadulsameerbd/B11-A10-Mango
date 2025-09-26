import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Addplant from "../Page/Addplant";
import Allplant from "../Page/Allplant";
import Homepage from "../Page/Homepage";
import Login from "../Page/Login";
import MyPlant from "../Page/Myplant";
import NoRoute404 from "../Page/NoRoute404";
import Register from "../Page/Register";
import UpdatePlant from "../Page/UpdatePlant";
import ViewPlant from "../Page/ViewPlant";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <NoRoute404 />,
    children: [
      { index: true, Component: Homepage },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      { path: "/addplant", element: <PrivateRoute><Addplant /></PrivateRoute> },
      { path: "/allplant", Component: Allplant },
      { path: "/allplant/:id", Component: ViewPlant },
      { path: "/updateplant/:id", Component: UpdatePlant },
      { path: "/myplant", element: <PrivateRoute><MyPlant /></PrivateRoute> },
    ],
  },
]);
