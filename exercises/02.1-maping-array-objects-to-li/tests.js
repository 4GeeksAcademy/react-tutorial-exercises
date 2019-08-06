import ReactDOM from "react-dom";
import { WhatToRender } from "./index";
import renderer from "react-test-renderer";

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM.render needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("The component should return return the exact HTML", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<ul>
  <li>
    Horse
  </li>
  <li>
    Turtle
  </li>
  <li>
    Elephant
  </li>
  <li>
    Monkey
  </li>
</ul>
`);
});
