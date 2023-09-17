import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../utils/auth";


export const RequiredAuth = ({ children }) => {
    const location = useLocation()
    const auth = useAuth();

    if (!auth.user) {
       return <Navigate to={"/login"}  state={{path: location.pathname}}/>
   }

    return children
}