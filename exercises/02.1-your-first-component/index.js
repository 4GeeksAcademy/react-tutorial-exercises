import React from 'react';
import ReactDOM from 'react-dom';

export const WhatToRender = () => {
    return 'I Love React';
};

const myDiv = document.querySelector('#myDiv');

// change the syntaxt of the first parameter to make it <WhatToRender /> instead of WhatToRender()
ReactDOM.render(WhatToRender(), myDiv);