import { Link } from "react-router-dom";

const Navigation = () => {
    return ( 

    <div className="navbar">
        <Link to="/">
            <h2>Home</h2>
        </Link>

        <Link to="/new">
            <h2>New</h2>
        </Link>
    </div>

     );
}
 
export default Navigation;