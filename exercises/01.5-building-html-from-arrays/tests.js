import ReactDOM from "react-dom";
import { WhatToRender } from "./index";
import renderer from "react-test-renderer";

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM.render needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("The component should return return the exact HTML", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  console.log(tree);
  expect(tree).toMatchInlineSnapshot(`
<ul
  className="nav"
>
  <li
    className="nav-item"
  >
    <a
      className="nav-link"
      href="#"
    >
      Link to google.com
    </a>
  </li>
  <li
    className="nav-item"
  >
    <a
      className="nav-link"
      href="#"
    >
      Link to facebook.com
    </a>
  </li>
  <li
    className="nav-item"
  >
    <a
      className="nav-link"
      href="#"
    >
      Link to amazon.com
    </a>
  </li>
</ul>
`);
});
