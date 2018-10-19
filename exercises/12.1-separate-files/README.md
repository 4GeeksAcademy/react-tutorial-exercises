# `03` Separate Files

Thanks to WebPack, we can split our code in several files using the [***import*** statement](https://breatheco.de/en/lesson/importing-and-exporting-javascript-modules/) like this:

```js
import VariableName from 'path/to/file';
```

Note: This is not a react.js functionality only, all javascript projects will be able to use import/export because of Webpack.

## Here is an example:

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

One of the possible usages for this import feature, is to separate your code in several files. For example: You can have one file for each React Component that you create.

## Instructions

You have two files now: `index.js` and `whatToRender.js`, in the former you'll find a Component which is being exported as default.

Open the `index.js` file and **import** the **WhatToRender** function (as default). Note: keep the same variable name __WhatToRender__.

If you imported correctly you will see the `hello world` on the screen after compiling and running your website.
