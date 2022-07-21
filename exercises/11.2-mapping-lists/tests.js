import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import file from "./app.jsx";
const fs = require('fs');
const path = require('path');

jest.mock("react-dom", () => ({ render: jest.fn() }));

test("ReactDOM.render needs to be called once", () => {
  expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test("You have to call the component with right syntax", () => {
  const file = fs.readFileSync(path.resolve(__dirname, './app.jsx'), 'utf8').toString();
  const regex = /key\s*=\s*{\s*.+\s*}/gm
  expect(regex.test(file)).toBeTruthy();
})

test("The output variable needs to be the expected one", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="row mt-5"
>
  <div
    className="col-2 mx-3 rounded border"
  >
    <img
      alt="Wrong Image!"
      className="w-100 h-50"
      src="../../.learn/assets/06-accessing-object-values.webp"
      style={
        Object {
          "objectFit": "cover",
        }
      }
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
        Shoes
      </span>
      <p>
        $ 
        295
      </p>
    </div>
  </div>
  <div
    className="col-2 mx-3 rounded border"
  >
    <img
      alt="Wrong Image!"
      className="w-100 h-50"
      src="../../.learn/assets/09.2-components.jfif"
      style={
        Object {
          "objectFit": "cover",
        }
      }
    />
    <div
      className="col-12 p-3"
    >
      <h5>
        Tesla Model S
      </h5>
      <span
        className="text-secondary"
      >
        Car
      </span>
      <p>
        $ 
        65000
      </p>
    </div>
  </div>
  <div
    className="col-2 mx-3 rounded border"
  >
    <img
      alt="Wrong Image!"
      className="w-100 h-50"
      src="../../.learn/assets/11.2-mapping-lists.jfif"
      style={
        Object {
          "objectFit": "cover",
        }
      }
    />
    <div
      className="col-12 p-3"
    >
      <h5>
        16-inch MacBook Pro
      </h5>
      <span
        className="text-secondary"
      >
        Computer
      </span>
      <p>
        $ 
        2499
      </p>
    </div>
  </div>
</div>
`);
});