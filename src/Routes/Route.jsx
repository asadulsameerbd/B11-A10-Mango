import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Addplant from "../Page/Addplant";
import Allplant from "../Page/Allplant";
import Homepage from "../Page/Homepage";
import Login from "../Page/Login";
import Myplant from "../Page/Myplant";
import Register from "../Page/Register";
import ViewPlant from "../Page/ViewPlant";

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
                path : "/register",
                Component : Register,
            },
            {
                path : "/addplant",
                Component : Addplant,
            },
            {
                path : "/allplant",
                Component : Allplant,
                loader : ()=>fetch("http://localhost:3000/clients")
            },
            {
                path : "/allplant/:id",
                Component : ViewPlant,
                loader : ({params})=>fetch(`http://localhost:3000/clients/${params.id}`)
            },
            {
                path : "/myplant",
                Component : Myplant
            }
        ])
    }
])