import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import file from "./app.jsx.js";

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM.render needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("The output variable needs to be set to <span> James is <strong>12</strong> years old </span>", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<form
  className="card col-3 mx-auto mt-5 p-4"
  onSubmit={[Function]}
>
  <h2>
    Login
  </h2>
  <input
    className="w-100 rounded form-control mt-3"
    placeholder="Enter your email"
    type="email"
  />
  <input
    className="w-100 rounded form-control my-2"
    placeholder="Enter your password"
    type="password"
  />
  <button
    className="btn btn-success w-100 mt-3"
    onClick={[Function]}
  >
    SUBMIT
  </button>
</form>
`);
});