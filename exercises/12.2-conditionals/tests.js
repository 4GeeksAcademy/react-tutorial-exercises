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
  const regex = /<Product\s*\/>/gm
  expect(regex.test(file)).toBeTruthy();
})

test("The output variable needs to be the expected one", () => {
  const tree = renderer.create(ReactDOM.render.mock.calls[0][0]).toJSON();
  expect(tree).toMatchInlineSnapshot(`
<div
  className="col-3 mx-auto mt-5 rounded border"
>
  <img
    alt="Wrong Image!"
    className="img-fluid w-100"
    src="https://tesla-cdn.thron.com/delivery/public/image/tesla/8a74d206-66dc-4386-8c7a-88ff32174e7d/bvlatuR/std/4096x2560/Model-S-Main-Hero-Desktop-LHD"
  />
  <div
    className="col-12 p-3"
  >
    <h5>
      Tesla Model S
    </h5>
    <p>
      Range (EPA est.): 396 mi
    </p>
    <p>
      0-60 mph: 1.99s
    </p>
    <p>
      Top Speed: 200 mph
    </p>
    <p>
      Peak Power: 1,020 hp
    </p>
    <a
      className="w-100 btn btn-dark"
      href="https://www.tesla.com/models/design#overview"
      target="_blank"
    >
      Order now
    </a>
  </div>
</div>
`);
});