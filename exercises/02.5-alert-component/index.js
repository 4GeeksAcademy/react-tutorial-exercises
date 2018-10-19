import React from 'react';
import ReactDOM from 'react-dom';

const Alert = (props) => {
    // here you have to return the alert html that bootstrap dictates
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understan what properties is the component using
ReactDOM.render(<Alert text="OMG! Something really bad has happended!" />, document.querySelector('#myDiv'));