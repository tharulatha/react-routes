import { useNavigate } from "react-router-dom"

export const OrderSummary = () => {
   const navigator = useNavigate();
    return (
        <>
            <h1>Order Placed!</h1>
            <button onClick={() => navigator(-1)}>Go back</button>
        </>
    )
}