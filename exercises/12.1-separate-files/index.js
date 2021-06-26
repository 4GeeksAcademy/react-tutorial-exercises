import React from 'react';
import ReactDOM from 'react-dom';

/**
 * here you need to import the variable that was exported
 * by default on WhatToRender.js
 * 
 * Use this syntax:
 * import <variable_name> from '<path_to_file>';
 * 
 * You can pick any variable_name that you want, 
 * but you should stick to the original variable name that is being exported from the other file (best practice)
 * 
 * The path_to_file has to be wrapped in quotes and starting with a dot or double dots depending on the file path.
 * For example:
 * import MySuperVariable from './path/to/file.js';
 */

// YOUR CODE HERE

               //fake html tag           //where
ReactDOM.render(<WhatToRender />, document.querySelector('#myDiv'));