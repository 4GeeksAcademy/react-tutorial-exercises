// we have to import react.js on every file that contains JSX
import React from 'react';

//the component is still a normal function
const Clock = (props) => {
    return 'Today is '+props.currentDate.toString();
};

// we have to export the variable to be used on any other file
export default Clock;