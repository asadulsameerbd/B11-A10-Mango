import { Outlet } from "react-router";
import Header from "../Component/Header";

const RootLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;