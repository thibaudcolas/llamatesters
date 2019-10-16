import React from 'react';
import Field from './Field';
import { mount } from 'enzyme';

describe('Field', () => {
    it('renders', () => {
        const wrapper = mount(
            <Field label="receipt-guest-info-input-name" onChange={() => {}} />,
        );

        expect(wrapper.text()).toContain('receipt-guest-info-input-name');
    });

    it('error', () => {
        const wrapper = mount(
            <Field
                label="receipt-guest-info-input-name"
                onChange={() => {}}
                error="invalid-email"
            />,
        );

        expect(wrapper.text()).toContain('invalid-email');
        expect(
            wrapper
                .find('input')
                .getDOMNode()
                .getAttribute('aria-invalid'),
        ).toBe('true');
    });

    it('optional', () => {
        const wrapper = mount(
            <Field
                label="receipt-guest-info-input-name"
                onChange={() => {}}
                optional
            />,
        );

        expect(wrapper.text()).toContain('optional');
    });

    it('hint', () => {
        const wrapper = mount(
            <Field
                label="receipt-guest-info-input-name"
                onChange={() => {}}
                hint="input-name-hint"
            />,
        );

        expect(wrapper.text()).toContain('input-name-hint');
    });

    it('disabled', () => {
        const wrapper = mount(
            <Field
                label="receipt-guest-info-input-name"
                onChange={() => {}}
                disabled
            />,
        );

        expect(
            wrapper
                .find('input')
                .getDOMNode()
                .hasAttribute('disabled'),
        ).toBe(true);
    });

    describe('type', () => {
        it('text', () => {
            const wrapper = mount(<Field label="test" onChange={() => {}} />);

            expect(
                wrapper
                    .find('input')
                    .getDOMNode()
                    .getAttribute('type'),
            ).toBe('text');
        });

        it('textarea', () => {
            const wrapper = mount(
                <Field label="test" type="textarea" onChange={() => {}} />,
            );

            expect(wrapper.find('textarea')).toHaveLength(1);
        });

        it('select', () => {
            const wrapper = mount(
                <Field
                    label="test"
                    type="select"
                    values={[{ value: '', label: '' }]}
                    onChange={() => {}}
                />,
            );

            expect(wrapper.find('option')).toHaveLength(1);
        });
    });

    it('maxLength', () => {
        const wrapper = mount(
            <Field label="test" onChange={() => {}} maxLength={500} />,
        );

        expect(
            wrapper
                .find('input')
                .getDOMNode()
                .getAttribute('maxLength'),
        ).toBe('500');
        expect(wrapper.text()).toContain('0 / 500');
    });
});
