import ReactDOM from "react-dom";
import { WhatToRender } from "./app.jsx";
import jsxToString from "jsx-to-string";
import renderer from "react-test-renderer";

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("The component Badge should return the exact HTML", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<button
  className="btn btn-success btn-lg"
  onClick={[Function]}
>
  Click Me
</button>
`);
});

// test("The component should return return the exact HTML", () => {
//   const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
//   expect(tree).toMatchInlineSnapshot();
// });
