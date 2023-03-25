import { Navigate } from "react-router-dom";
import {AuthProvider, useAuth} from "./auth";

export const ProtectedRoute = ({isLoggedIn, children }) => {
    // const user  = useAuth();
    console.log("the user is", isLoggedIn);
    if (!isLoggedIn) {
        // user is not authenticated
        return <Navigate to="/login" />;
    }
    return children;
};