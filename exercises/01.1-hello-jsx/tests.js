import ReactDOM from "react-dom";
import jsxToString from "jsx-to-string";
import file from "./app.jsx";
import renderer from "react-test-renderer";
const fs = require("fs");
const path = require('path');

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM.render needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("You should concatenate the variables in the correct way", () => {
  const content = fs.readFileSync(path.resolve(__dirname, './app.jsx'), 'utf8');
  const regex = /\{\s*name\s*\}\s+is\s+\{\s*age\s*\}\s+years\s+old/gm
  expect(content).toMatch(regex)
})

test("The returned JSX statement should be exactly this: <span>{ name } is { age } years old</span>", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  console.log(tree);
  expect(tree).toMatchInlineSnapshot(`
<span>
  John
   is 
  12
   years old
</span>
`);
});
