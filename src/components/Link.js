import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const NavLink = (props) => {

    const [skew, setSkew] = useState(0);
    const [skewString, setSkewString] = useState(`skew(0deg)`);

    useEffect(() => {
        setSkewString(`skew(${skew}deg)`);
    }, [skew]);

    return (
        <Link onClick={() => props.updateAnimate(false)} to={props.text}>
            <h2 className="nav-item" style={{ transform: skewString }} onMouseEnter={() => setSkew(-10)} onMouseLeave={() => setSkew(0)} onTouchStart={() => setSkew(-10)} onTouchEnd={() => setSkew(0)}>
                {props.text}
            </h2>
        </Link >
    )
}

export default NavLink;