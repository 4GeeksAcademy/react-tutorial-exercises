import ReactDOM from "react-dom";
import { WhatToRender } from "./app.jsx";
import jsxToString from "jsx-to-string";
import renderer from "react-test-renderer";

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("Component text has to be passed properly", () => {
  const component = ReactDOM.render.mock.calls[0][0];
  expect(component.props.text).toBe("OMG! Something really bad has happened!");
});

test("The component should return the exact HTML", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="alert alert-danger"
  role="alert"
>
  OMG! Something really bad has happened!
</div>
`);
});
