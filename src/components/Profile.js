import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth"


export const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logout();
        navigate('/')
    }

    return (
        <>
            <h2> Welcome {auth.user}</h2>
            <button onClick={handleLogout} >Logout</button>
        </>
    )
}

