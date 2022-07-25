import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import file from "./app.jsx.js.js";
const fs = require('fs');
const path = require('path');

/*
Waiting for the new plugin's error to be fixed.
const rewire = require("rewire");
*/

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM.render needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("You have to use the ? conditional operator", () => {
  const file = fs.readFileSync(path.resolve(__dirname, './app.jsx'), 'utf8').toString();
  const regex = /\?/gm
  expect(regex.test(file)).toBeTruthy();
})

test("You have to use the : conditional operator", () => {
  const file = fs.readFileSync(path.resolve(__dirname, './app.jsx'), 'utf8').toString();
  const regex = /\:/
  expect(regex.test(file)).toBeTruthy();
})

/*
Waiting for the new plugin's error to be fixed.

test("The output variable needs to be the expected one", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  const file = rewire("./app.js");
  const age = file.__get__("age");
  expect(age).toBeTruthy();
  
  if (age >= 21){
    expect(tree).toMatchInlineSnapshot(`
<div
  className="col-3 mx-auto mt-5 rounded border"
>
  <img
    alt="Profile picture"
    className="w-100 img-fluid"
    src="../../.learn/assets/05.2-using-variables.jpg"
  />
  <h2>
    John Doe
  </h2>
  <p>
    Age:
    ${age}
  </p>
  <span>
    I can drink! Let's party tonight!
  </span>
</div>
`);
  } else {
    expect(tree).toMatchInlineSnapshot(`
<div
  className="col-3 mx-auto mt-5 rounded border"
>
  <img
    alt="Profile picture"
    className="w-100 img-fluid"
    src="../../.learn/assets/05.2-using-variables.jpg"
  />
  <h2>
    John Doe
  </h2>
  <p>
    Age:
    ${age}
  </p>
  <span>
    I can't drink, I'm still a kid :(
  </span>
</div>
`);
  }
});

*/