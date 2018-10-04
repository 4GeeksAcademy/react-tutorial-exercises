
import React from 'react';
import ReactDOM from 'react-dom';
import index from './index';
import jsxToString from 'jsx-to-string';
import renderer from 'react-test-renderer';

jest.mock('react-dom', () => ({ render: jest.fn() }));

test('ReactDOM needs to be called once', () => {
    expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test('WhatToRender should be a react component created with JSX', () => {
    expect(typeof ReactDOM.render.mock.calls[0][0]).toBe('object');
    expect(ReactDOM.render.mock.calls[0][0].hasOwnProperty('$$typeof')).toBe(true);
});


test('The component needs to be called like a JSX tag: E.g: <WhatToRender />', () => {
    const jsxParam = jsxToString(ReactDOM.render.mock.calls[0][0]);
    expect(jsxParam).toBe('<PersonCard />');
});

test('The component should return the expected output LITERALY', () => {
    const tree = renderer
        .create(ReactDOM.render.mock.calls[0][0])
        .toJSON();
        console.log(tree);
    expect(tree).toMatchInlineSnapshot(`
<div>
  <p>
    My Name is 
    Harry
     
    Wane
  </p>
  <p>
    and I am is 
    12
     years old
  </p>
</div>
`);
});