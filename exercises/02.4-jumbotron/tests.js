import ReactDOM from "react-dom";
import { WhatToRender } from "./index";
import jsxToString from "jsx-to-string";
import renderer from "react-test-renderer";

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("Component title is being passed properly", () => {
  const component = ReactDOM.render.mock.calls[0][0];
  expect(component.props.title).toBe("Welcome to react");
});

test("Component description is being passed properly", () => {
  const component = ReactDOM.render.mock.calls[0][0];
  expect(component.props.description).toBe(
    "React is the most popular rendering library in the world"
  );
});

test("Component buttonLabel is being passed properly", () => {
  const component = ReactDOM.render.mock.calls[0][0];
  expect(component.props.buttonLabel).toBe("Go to the official website");
});

test("Component buttonURL is being passed properly", () => {
  const component = ReactDOM.render.mock.calls[0][0];
  expect(component.props.buttonURL).toBe("https://reactjs.org/");
});

test("The component should return return the exact HTML", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="jumbotron m-5"
>
  <h1
    className="display-4"
  >
    Welcome to react
  </h1>
  <p
    className="lead"
  >
    React is the most popular rendering library in the world
  </p>
  <a
    className="btn btn-primary btn-lg"
    href="https://reactjs.org/"
    role="button"
  >
    Go to the official website
  </a>
</div>
`);
});
