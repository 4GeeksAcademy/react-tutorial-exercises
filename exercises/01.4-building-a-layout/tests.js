
import ReactDOM from 'react-dom';
import { WhatToRender } from './index';
import renderer from 'react-test-renderer';

jest.mock('react-dom', () => ({ render: jest.fn() }));

test('ReactDOM.render needs to be called once', () => {
    expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test('The component should return return the exact HTML', () => {
    const tree = renderer
        .create(ReactDOM.render.mock.calls[0][0])
        .toJSON();
        console.log(tree);
    expect(tree).toMatchInlineSnapshot(`
<div
  className="card m-5"
>
  <img
    alt="Card image cap"
    className="card-img-top"
    src="https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/"
  />
  <div
    className="card-body"
  >
    <h5
      className="card-title"
    >
      Bob Dylan
    </h5>
    <p
      className="card-text"
    >
      Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.
    </p>
    <a
      className="btn btn-primary"
      href="https://en.wikipedia.org/wiki/Bob_Dylan"
    >
      Go to wikipedia
    </a>
  </div>
</div>
`);
});