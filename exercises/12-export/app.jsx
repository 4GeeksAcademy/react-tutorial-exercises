import React from 'react';
import ReactDOM from 'react-dom';

/**
 * This line #5 is importing "by default", but the WhatToRender was exported
 * on ./WhatToRender.js without the "default" statement.
 * 
 * Please change the code of this line number 9 to make it 
 * import the WhatToRender successfully.
 */
import { PersonCard, getFullName } from './WhatToRender.js';

ReactDOM.render(<PersonCard />, document.querySelector('#myDiv'));