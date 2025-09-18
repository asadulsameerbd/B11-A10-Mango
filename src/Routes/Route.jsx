import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../Page/Homepage";
import Login from "../Page/Login";
import Register from "../Page/Register";

export const router = createBrowserRouter([
    {
        path : "/",
        Component : RootLayout,
        children : ([
            {
                index : true, Component : Homepage,
            },
            {
                path : "/login", 
                Component : Login,
            },
            {
                path :"/register",
                Component : Register,
            }
        ])
    }
])