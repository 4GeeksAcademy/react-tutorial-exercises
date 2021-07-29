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
  className="btn btn-primary"
  style={
    Object {
      "background": "black",
      "border": "1px solid yellow",
      "fontSize": "16px",
    }
  }
  type="button"
>
  Notifications
  <span
    className="badge badge-light"
  >
    2
  </span>
</button>
`);
});
//<button type="button" class="btn btn-primary" style="font-size: 16px; background: black; border: 1px solid yellow;">Notifications <span class="badge badge-light">2</span></button>
// test("The component should return return the exact HTML", () => {
//   const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
//   expect(tree).toMatchInlineSnapshot();
// });
