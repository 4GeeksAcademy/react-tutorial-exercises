# `04` Exporting Default vs Non-default

In the past exercise we saw how to import `by default`, that is recomended when we like to export just one variable per file. But what is we want to export several variables to other files?

We can use the `export` statement without the `default` word and that will allow us to export several variables separatedly.

```js
// math.js

export const sum = (a,b) => {
  return a + b;
}
export const multiply = (a,b) => {
  return a * b;
}
```

```js
// index.js

                //relative path to the file1.js
import {sum, multiply} from './math.js';

console.log(sum(2,3)); //will output 5
console.log(multiply(2,3)); //will output 6
```

When to use export **without** default? It is a great tool if you want to group several react components or functions in just one file, for example in the previous example we have a `math.js` file that contains a couple of math functions.

## Instructions

Right now, there is a componented declared on the file **whatToRender.js** and it is being exported as default.

Open the `index.js` file and import as default the WhatToRender function, keep the same variable name __WhatToRender__

If you imported correctly you will see the "hello world" on the screen.