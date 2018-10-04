//we have to import react.js on every file that contains JSX
import React from 'react';

//the component is still a normal function
const WhatToRender = () => {
    return 'Hello World (if you see me on the website, it means you have imported me correctly';
};

// we have to export the variable to be used on any other file
export default WhatToRender;