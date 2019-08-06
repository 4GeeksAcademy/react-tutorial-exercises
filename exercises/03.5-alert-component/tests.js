import ReactDOM from "react-dom";
import { WhatToRender } from "./index";
import jsxToString from "jsx-to-string";
import renderer from "react-test-renderer";

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("Component text is being passed properly", () => {
  const component = ReactDOM.render.mock.calls[0][0];
  expect(component.props.text).toBe("OMG! Something really bad has happended!");
});

test("The component should return return the exact HTML", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="alert alert-danger"
  role="alert"
>
  OMG! Something really bad has happended!
</div>
`);
});
