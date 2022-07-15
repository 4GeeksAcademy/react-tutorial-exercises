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
  className="col-2 mx-auto mt-5 rounded border"
>
  <img
    alt="Wrong Image!"
    className="img-fluid w-100"
    src="../../.learn/assets/06-accessing-object-values.webp"
  />
  <div
    className="col-12 p-3"
  >
    <h5>
      Nike Mercurial Superfly 8Max
    </h5>
    <span
      className="text-secondary"
    >
      Firm-Ground Soccer Cleats
    </span>
    <p>
      $ 
      295
    </p>
    <p>
      Reviews: 
      5
    </p>
    <a
      className="w-100 btn btn-dark"
      href="https://www.nike.com/t/mercurial-superfly-8-elite-fg-firm-ground-soccer-cleats-htj6pt/DN3779-375"
      target="_blank"
    >
      Shop Now
    </a>
  </div>
</div>
`);
});