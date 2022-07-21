import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import file from "./app.jsx";

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM.render needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("The output variable needs to be the expected one", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div>
  <h1>
    Hello World!
  </h1>
  <p>
    This is the second element
  </p>
  <strong>
    This is the last element
  </strong>
</div>
`);
});