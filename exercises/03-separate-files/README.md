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

The intended usage of this feature is the ability to separate each component in its own file, in order to keep the code organized. Divide and conquer.

## Instructions

You have two files now: index.js and whatToRender.js, in the former you'll find a Component which is being exported as default.

Open the index.js file and import the WhatToRender function (as default). Note: keep the same variable name __WhatToRender__.

If you imported correctly you will see the "hello world" on the screen.
