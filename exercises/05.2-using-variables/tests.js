import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import file from "./app.jsx";
const fs = require('fs');
const path = require('path');

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM.render needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("You have to use the variable to get the expected value", () => {
  const file = fs.readFileSync(path.resolve(__dirname, './app.jsx'), 'utf8').toString();
  const regex = /src\s*=\s*{\s*imageSrc\s*}/gm
  expect(regex.test(file)).toBeTruthy();
})

test("The output variable needs to be the expected one", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="col-2 border rounded mx-auto mt-5 p-3 bg-dark text-light"
>
  <img
    alt="That is not my image"
    className="w-100 img-fluid rounded mb-2"
    src="../../.learn/assets/05.2-using-variables.jpg"
  />
  <h3
    className="text-center"
  >
    Alfredo The Goat
  </h3>
  <strong>
    Age: 
  </strong>
  <p>
    23 years old
  </p>
  <strong>
    Job: 
  </strong>
  <p>
    Software Developer
  </p>
</div>
`);
});