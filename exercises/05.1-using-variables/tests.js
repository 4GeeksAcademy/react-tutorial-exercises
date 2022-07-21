import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import file from "./app.jsx";
const fs = require('fs');
const path = require('path');

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM.render needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("You have to use the variables to get the expected value", () => {
  const file = fs.readFileSync(path.resolve(__dirname, './app.jsx'), 'utf8').toString();
  const regex = /Hello\s{\s*name\s*}\s{\s*lastname\s*}!/gm
  expect(regex.test(file)).toBeTruthy();
})

test("The output variable needs to be the expected one", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<h1
  className="col-2 mx-auto mt-5"
>
  Hello 
  John
   
  Doe
  !
</h1>
`);
});