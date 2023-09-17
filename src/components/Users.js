import { Link, useSearchParams } from "react-router-dom"

export const Users = () => {
    const array = [1, 2, 3];
    const [searchParam, setSearchParam] = useSearchParams();

    const showFilter = searchParam.get("filter") === "active";

    return (
        <>
            {
                array.map(ele => (
                    <nav key={ele}>
                        <Link to={"userId" + ele}><h2>User {ele}</h2></Link>
                    </nav>
                ))
            }
            <div>
                <button onClick={() => setSearchParam({filter : "active"})}>Set Filter</button>
                <button onClick={() => setSearchParam({})}>Reset Filter</button>
                 {showFilter ? <h2>Show active Users</h2> : <h2>Show all users</h2>}
            </div>
        </>
    )
}