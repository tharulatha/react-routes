import { useNavigate } from "react-router-dom"
export const Home = () => {
   const navigate = useNavigate();
    return (
        <>
            <h1>Home Page</h1>
            <button onClick={() => navigate("order-summary")} >Place Order</button>
        </>
     )
 } 