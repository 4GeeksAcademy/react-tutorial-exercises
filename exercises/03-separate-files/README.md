# `03` Separate Files

Thanks to WebPack, we can split our code in several files using the [***import*** statement](https://breatheco.de/en/lesson/importing-and-exporting-javascript-modules/) like this:

```js
// file1.js


const sum = (a,b) => {
  return a+b;
}
export default sum; //export
```

```js
// file2.js


                //relative path to the file1.js
import sum from './file1.js';

console.log(sum(2,2)); //will output 4
```

The best usage for this feature is to separate each component in a different file to keep the code organized.

## Instructions

Right now, there is a componented declared on the file whatToRender.js and it is being exported as default.

Open the index.js file and import as default the WhatToRender function, keep the same variable name __WhatToRender__

If you imported correctly you will see the "hello world" on the screen.