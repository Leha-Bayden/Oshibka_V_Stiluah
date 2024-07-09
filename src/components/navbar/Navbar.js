import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

    return (    
    <nav className="nav">
        <div className="container">
            <ul className="nav-list">
                <label className="nav-list__item">
                    <NavLink to="/">
                        Home
                    </NavLink>
                </label>
                <label className="nav-list__item">
                    <NavLink to="/forms">
                        Формы
                    </NavLink>
                    </label>
                <label className="nav-list__item">
                    <NavLink to="/films">
                        Фильмы
                    </NavLink>
                </label>
            </ul>
        </div>
    </nav>
    );
}
 
export default Navbar;