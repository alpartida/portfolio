import React from 'react';
import { Link } from "react-router-dom";

const NavLink = (props) => {
    return (
        <Link onClick={() => props.updateAnimate(false)} to={props.text}>
            <h2 className="nav-item">
                {props.text}
            </h2>
        </Link>
    )
}

export default NavLink;