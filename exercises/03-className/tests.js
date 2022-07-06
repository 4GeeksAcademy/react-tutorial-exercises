import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import file from "./app.jsx";

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM.render needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("The output variable needs to be set to <span> James is <strong>12</strong> years old </span>", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="card col-3 mx-auto"
>
  <img
    alt="..."
    className="w-100"
    src="../../.learn/assets/rigo-baby.jpg"
  />
  <div
    className="card-body"
  >
    <h5
      className="card-title"
    >
      Rigo
    </h5>
    <p
      className="card-text"
    >
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <a
      className="btn btn-primary"
      href="#"
    >
      Go somewhere
    </a>
  </div>
</div>
`);
});