import './MenuList.css'
import { NavLink } from 'react-router-dom'

const MenuList = ({ section, route }) => {
    return (
        <li style={{ listStyle: "none", padding: "20px 15px" }} >
            <NavLink className="linkCategory" to={route}> {section} </NavLink>
        </li>
    );
};

export default MenuList;