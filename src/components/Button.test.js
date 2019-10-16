import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './Button';

describe('Button', () => {
    it('renders', () => {
        expect(shallow(<Button />)).toMatchInlineSnapshot(`
            <button
              className="button button-rounded  "
              type="button"
            />
        `);
    });

    it('#iconBefore', () => {
        expect(
            mount(<Button iconBefore="rocket">Test</Button>),
        ).toMatchSnapshot();
    });

    it.todo('#iconAfter');

    it.skip('#icon', () => {
        expect(
            shallow(<Button icon="rocket" />)
                .find('Icon')
                .props().name,
        ).toBe('potato');
    });

    it.skip('can be clicked', () => {
        const onClick = jest.fn();

        onClick();
        // const wrapper = shallow(<Button onClick={onClick}>Test</Button>);
        // wrapper.find('button').simulate('click');

        expect(onClick).toHaveBeenCalled();
    });
});
