import React from 'react';

const WorkLink = (props) => {
    return (
        <a href={props.link} className="work-link" target="_blank" rel="noreferrer">{props.text}</a>)
}

export default WorkLink;