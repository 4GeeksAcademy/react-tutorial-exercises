import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import file from "./app.jsx";
const fs = require('fs');
const path = require('path');

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM.render needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("You have to use the onClick property", () => {
  const file = fs.readFileSync(path.resolve(__dirname, './app.jsx'), 'utf8').toString();
  const regex = /onClick\s*=\s*{/gm
  expect(regex.test(file)).toBeTruthy();
})

test("You have to use the alert()", () => {
  const file = fs.readFileSync(path.resolve(__dirname, './app.jsx'), 'utf8').toString();
  const regex = /alert\s*\(/gm
  expect(regex.test(file)).toBeTruthy();
})

test("The output variable needs to be the expected one", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="col-3 mx-auto mt-5 rounded border"
>
  <button
    className="w-100 btn btn-success"
    onClick={[Function]}
  >
    Click Here!
  </button>
</div>
`);
});

/*
Waiting for the new plugin's error to be fixed.

There should be a test that checks for the alert to be displayed after onClick being triggered.
It should be done with "Testing Library"
*/