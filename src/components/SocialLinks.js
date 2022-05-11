import React from 'react';

const SocialLink = (props) => {
    return (
        <a target="_blank" href={props.link} rel="noreferrer">
            <span className={props.class} />
        </a>
    )
}

export default SocialLink;