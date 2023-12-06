import ReactDOM from "react-dom";
import content from "./app.jsx";
import renderer from "react-test-renderer";

const fs = require('fs');
const path = require('path');

const app_content = fs.readFileSync(path.resolve(__dirname, './app.jsx'), 'utf8');

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM.render needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("The component should exactly match the requested output", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div>
  <h1>
    My name is 
    Bob
  </h1>
  <h2>
    My last name is 
    Dylan
  </h2>
</div>
`);
});

test("You should use the values of the customer object", () => {
    expect(app_content).toMatch("customer.first_name");
    expect(app_content).toMatch("customer.last_name");
})
