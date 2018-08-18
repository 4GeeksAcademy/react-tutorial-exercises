import React from 'react';
import ReactDOM from 'react-dom';

import Anchor from './Anchor.js';

/**
 * Another amazing thing about JSX is that it allows to create
 * fake <tags> like the typical that you use on HTML, the only
 * difference is that you have to start them in caps, for example:
 * 
 * insead of doing:
 * ReactDOM.render(WhatToRender(), document.querySelector('#myDiv'));
 * 
 * we can do:
 * ReactDOM.render(<WhatToRender />, document.querySelector('#myDiv'));
 * 
 */
               //fake html tag           //where
ReactDOM.render(<Anchor />, document.querySelector('#myDiv'));