import ReactDOM from "react-dom";
import content from "./index";
import renderer from "react-test-renderer";

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM.render needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("The component should return what LITERALLY what was asked", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  console.log(tree);
  expect(tree).toMatchInlineSnapshot(`
<div>
  <h1>
    My name is 
    Bob
  </h1>
  <h2>
    My las name is 
    Dylan
  </h2>
</div>
`);
});
