//we have to import react.js on every file that contains JSX
import React from 'react';

//pleace make this function return the HTML needed to render a bootstrap component
const Link = (props) => {
    return <a href={props.href}>{props.children}</a>;
};

// we have to export the variable to be used on any other file
export default Link;