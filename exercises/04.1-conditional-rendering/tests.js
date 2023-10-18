import ReactDOM from "react-dom";
import { WhatToRender } from "./app.jsx";
import jsxToString from "jsx-to-string";
import renderer from "react-test-renderer";

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("The component Alert should return the exact HTML", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div>
  <div
    className="alert alert-danger"
    role="alert"
  >
    OMG! Something really bad has happened!
  </div>
  <div
    className="alert alert-warning"
    role="alert"
  >
    Well, it is not that bad after all!
  </div>
</div>
`);
});

// test("The component should return return the exact HTML", () => {
//   const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
//   expect(tree).toMatchInlineSnapshot();
// });
