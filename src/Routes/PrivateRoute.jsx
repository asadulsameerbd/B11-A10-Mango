import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import Loading from "../Component/Loading";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate state={{from : location}} to='/login' replace ></Navigate>
    }

  return children;
};

export default PrivateRoute;
