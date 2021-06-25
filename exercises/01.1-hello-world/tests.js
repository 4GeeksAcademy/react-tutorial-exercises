import ReactDOM from "react-dom";
import file from "./index";
import renderer from "react-test-renderer";
//import jsxToString from 'jsx-to-string';

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM.render needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("The output variable needs to be set to <span> James is <strong>12</strong> years old </span>", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  console.log(tree);
  expect(tree).toMatchInlineSnapshot(`
<span>
  James is 
  <strong>
    12
  </strong>
   years old
</span>
`);
});
