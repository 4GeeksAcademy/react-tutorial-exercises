import ReactDOM from "react-dom";
import jsxToString from "jsx-to-string";
import file from "./index";
import renderer from "react-test-renderer";

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM.render needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("The returne JSX statement should be exactly this: <span>{ name } is { age } years old</span>", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  console.log(tree);
  expect(tree).toMatchInlineSnapshot(`
<span>
  Jhon
   is 
  12
   years old
</span>
`);
});
