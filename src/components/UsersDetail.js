import { useParams } from "react-router-dom";

export const UsersDetail = () => {
   const {userId}  = useParams();
    return <div>Users Detail {userId}</div>
}