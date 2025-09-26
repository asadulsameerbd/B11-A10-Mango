import { createBrowserRouter } from "react-router";
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
    errorElement: <NoRoute404></NoRoute404>,
    children: [
      {
        index: true,
        Component: Homepage,
        loader: () => fetch("http://localhost:3000/clients"),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/addplant",
        element : (
            <PrivateRoute>
               <Addplant></Addplant>
            </PrivateRoute>
        )
      },
      {
        path: "/allplant",
        Component: Allplant,
        loader: () => fetch("http://localhost:3000/clients"),
      },
      {
        path: "/allplant/:id",
        Component: ViewPlant,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/clients/${params.id}`),
      },
      {
        path: "/updateplant/:id",
        Component: UpdatePlant,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/clients/${params.id}`),
      },
      {
        path: "/myplant",
        element : (
            <PrivateRoute>
               <MyPlant></MyPlant>
            </PrivateRoute>
        )
      },
    ],
  },
]);
