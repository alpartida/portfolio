import React, { useEffect, useState } from 'react';

const WorkLink = (props) => {
    const [skew, setSkew] = useState(0);
    const [skewString, setSkewString] = useState(`skew(0deg)`);

    useEffect(() => {
        setSkewString(`skew(${skew}deg)`);
    }, [skew]);


    return (
        <a href={props.link} className="work-link" target="_blank" rel="noreferrer" style={{ transform: skewString }} onMouseEnter={() => setSkew(-10)} onMouseLeave={() => setSkew(0)} onTouchStart={() => setSkew(-10)} onTouchEnd={() => setSkew(0)}>{props.text}</a>)
}

export default WorkLink;