import ReactDOM from "react-dom";
import { WhatToRender } from "./app.jsx";
import renderer from "react-test-renderer";

const fs = require('fs');
const path = require('path');

const app_content = fs.readFileSync(path.resolve(__dirname, './app.jsx'), 'utf8');

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM.render needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("The component should return the exact HTML", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  console.log(tree);
  expect(tree).toMatchInlineSnapshot(`
<ul
  className="list-group m-5"
>
  <li
    className="list-group-item"
  >
    Mars
  </li>
  <li
    className="list-group-item"
  >
    Venus
  </li>
  <li
    className="list-group-item"
  >
    Jupiter
  </li>
  <li
    className="list-group-item"
  >
    Earth
  </li>
  <li
    className="list-group-item"
  >
    Saturn
  </li>
  <li
    className="list-group-item"
  >
    Neptune
  </li>
</ul>
`);
});

test("You should use the map() method", () => {
    expect(app_content).toMatch(".map(");
})