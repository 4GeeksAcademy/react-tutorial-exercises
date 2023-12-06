import ReactDOM from "react-dom";
import { WhatToRender } from "./app.jsx";
import jsxToString from "jsx-to-string";
import renderer from "react-test-renderer";
const fs = require('fs');


jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test('Use an "if...else" conditional', function(){
  const data = fs.readFileSync('./exercises/04-conditional-rendering/app.jsx');
  const regex = /\s*if\s*/gm;
  expect(regex.exec(data)).toBeTruthy();

});

test("The component Alert should return the exact HTML", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div>
  <div
    className="alert alert-primary"
    role="alert"
  >
    This is a primary alert - check it out!
  </div>
</div>
`);
});

// test("The component should return return the exact HTML", () => {
//   const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
//   expect(tree).toMatchInlineSnapshot();
// });

