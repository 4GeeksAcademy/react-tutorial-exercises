
import { WhatToRender } from './index';

jest.mock('react-dom');

test('The return should be a string', () => {
  expect(typeof WhatToRender()).toBe('string');
})

test('It should return "I Love React"', () => {
    const str = WhatToRender();
    expect(str.toLowerCase()).toBe('i love react');
})