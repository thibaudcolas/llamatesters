import React from 'react';
import { shallow } from 'enzyme';
import Icon from './Icon';

describe('Icon', () => {
    it('renders', () => {
        expect(shallow(<Icon name="rocket" />)).toMatchInlineSnapshot(`
            <svg
              aria-hidden="true"
              className="icon icon--rocket "
            >
              <use
                xlinkHref="#rocket"
              />
            </svg>
        `);
    });

    it.skip('#className', () => {
        expect(shallow(<Icon name="rocket" className="red" />))
            .toMatchInlineSnapshot(`
            <svg
              aria-hidden="true"
              className="icon icon--rocket red"
            >
              <use
                xlinkHref="#rocket"
              />
            </svg>
        `);
    });

    it.skip('#title', () => {
        expect(
            shallow(<Icon name="rocket" title="Fly with us" />).html(),
        ).toContain('Fly with us');
    });
});
