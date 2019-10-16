import React from 'react';
import { mount } from 'enzyme';
import FizzBuzz from './FizzBuzz';

describe('FizzBuzz', () => {
    it('renders', () => {
        expect(mount(<FizzBuzz count={2} />).text()).toBe('potato');
    });

    test.skip('multiples of 3 is Fizz', () => {
        expect(mount(<FizzBuzz count={3} />).html()).toBe('Fizzzzzz');
    });

    it.todo('multiples of 5 is Buzz');

    it.todo('multiples of 3 and 5 is FizzBuzz');

    it.skip.each`
        count | result
        ${1}  | ${'1'}
        ${2}  | ${'2'}
        ${3}  | ${'Fizz'}
        ${4}  | ${'4'}
        ${5}  | ${'Buzz'}
        ${6}  | ${'Fizz'}
        ${7}  | ${'7'}
        ${8}  | ${'8'}
        ${9}  | ${'Fizz'}
        ${10} | ${'Buzz'}
        ${11} | ${'11'}
        ${12} | ${'Fizz'}
        ${13} | ${'13'}
        ${14} | ${'14'}
        ${15} | ${'FizzBuzz'}
        ${16} | ${'16'}
        ${17} | ${'17'}
        ${18} | ${'Fizz'}
    `('$count = $result', ({ count, result }) => {
        expect(mount(<FizzBuzz count={count} />).text()).toBe(result);
    });

    it.skip('prop type error', () => {
        expect(() => {
            // How can we make FizzBuzz throw a proptype error?
        }).toThrowError(/Failed prop type/);
    });
});
