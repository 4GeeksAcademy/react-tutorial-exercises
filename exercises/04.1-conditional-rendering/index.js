/**
 * Don't update anything on this file
 * all your changes must be made on PersonCard.js
**/

import React from 'react';
import ReactDOM from 'react-dom';
import '~bootstrap/scss/bootstrap.scss';
//here is were we import the <PersonCard /> component from the ./PersonCard.js file
import PersonCard from './PersonCard.js';
//here is were we include the PersonCard output into the #myDiv dom element.
ReactDOM.render(<PersonCard />, document.querySelector('#myDiv'));