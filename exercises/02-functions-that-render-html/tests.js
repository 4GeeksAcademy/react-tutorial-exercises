
import ReactDOM from 'react-dom';
import { WhatToRender } from './index';

jest.mock('react-dom', () => ({ render: jest.fn() }));

test('ReactDOM needs to be called once', () => {
    expect(ReactDOM.render.mock.calls.length).toBe(1);
});

test('The return should be a string', () => {
    expect(typeof WhatToRender()).toBe('string');
});

test('It should return "I Love React"', () => {
    const output = WhatToRender().toLowerCase();
    expect(output).toBe('i love react');
    expect(ReactDOM.render.mock.calls[0][0].toLowerCase()).toBe('i love react');
});