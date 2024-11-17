import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <NavLink to='/'><button className="btn">Home</button></NavLink>
            <NavLink to='/login'><button className="btn btn-primary">Login</button></NavLink>
        </div>
    );
};

export default Header;