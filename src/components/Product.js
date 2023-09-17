import { Link, Outlet } from "react-router-dom"

export const Product = () => {
    return (
        <>
            <h1>Product</h1>
            <nav className="product-nav">
                <Link to="features">Feature Product</Link> 
                <Link to="new">New Product</Link>
            </nav>
            <Outlet/>
        </>
   ) 
}

