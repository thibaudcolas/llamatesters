import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const LABELS = {
    'optional': {
        id: 'optional',
        defaultMessage: 'optional',
    },
    'receipt-guest-info-input-name': {
        id: 'receipt-guest-info-input-name',
        defaultMessage: "Guest's Name",
    },
    'receipt-guest-info-input-email': {
        id: 'receipt-guest-info-input-email',
        defaultMessage: 'E-mail',
    },
    'receipt-guest-info-input-phone': {
        id: 'receipt-guest-info-input-phone',
        defaultMessage: 'Telephone number',
    },
    'purchaser-details-label-first-name': {
        id: 'purchaser-details-label-first-name',
        defaultMessage: 'First name',
    },
    'purchaser-details-label-last-name': {
        id: 'purchaser-details-label-last-name',
        defaultMessage: 'Last name',
    },
    'purchaser-details-label-company-name': {
        id: 'purchaser-details-label-company-name',
        defaultMessage: 'Company name',
    },
    'purchaser-details-label-address': {
        id: 'purchaser-details-label-address',
        defaultMessage: 'Address',
    },
    'purchaser-details-label-company-code': {
        id: 'purchaser-details-label-company-code',
        defaultMessage: 'Company code',
    },
    'purchaser-details-label-zip': {
        id: 'purchaser-details-label-zip',
        defaultMessage: 'Postal code',
    },
    'purchaser-details-label-phone': {
        id: 'purchaser-details-label-phone',
        defaultMessage: 'Phone',
    },
    'purchaser-details-label-city': {
        id: 'purchaser-details-label-city',
        defaultMessage: 'City',
    },
    'purchaser-details-label-email': {
        id: 'purchaser-details-label-email',
        defaultMessage: 'Email',
    },
    'purchaser-details-label-ssn': {
        id: 'purchaser-details-label-ssn',
        defaultMessage: 'Social security nr. or passport nr.',
    },
    'purchaser-details-label-country': {
        id: 'purchaser-details-label-country',
        defaultMessage: 'Country',
    },
    'purchaser-details-label-nationality': {
        id: 'purchaser-details-label-nationality',
        defaultMessage: 'Nationality',
    },
    'purchaser-details-label-contact-name': {
        id: 'purchaser-details-label-contact-name',
        defaultMessage: 'Contact person',
    },
    'purchaser-details-label-contact-phone': {
        id: 'purchaser-details-label-contact-phone',
        defaultMessage: 'Phone',
    },
    'purchaser-details-label-contact-email': {
        id: 'purchaser-details-label-contact-email',
        defaultMessage: 'Email',
    },
    'purchaser-details-input-customer-reference': {
        id: 'purchaser-details-input-customer-reference',
        defaultMessage: 'Customer reference',
    },
};

/**
 * A form field built to be self-contained and accessible.
 * Supports i18n labels, error messages, and hint text.
 */
class Field extends PureComponent {
    static propTypes = {
        type: PropTypes.string,
        label: PropTypes.string.isRequired,
        name: PropTypes.string,
        value: PropTypes.string,
        values: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
            }),
        ),
        onBlur: PropTypes.func,
        onChange: PropTypes.func.isRequired,
        error: PropTypes.string,
        hint: PropTypes.string,
        optional: PropTypes.bool,
        disabled: PropTypes.bool,
        maxLength: PropTypes.number,
    };

    static defaultProps = {
        type: 'text',
        name: null,
        value: null,
        values: [],
        onBlur: null,
        error: null,
        hint: null,
        optional: false,
        disabled: false,
        maxLength: null,
    };

    render() {
        const {
            label,
            name,
            type,
            value,
            values,
            error,
            hint,
            optional,
            disabled,
            maxLength,
            onBlur,
            onChange,
        } = this.props;
        let input;
        const isDropdown = type === 'select';
        const hasError = !!error;
        const hasHint = !!hint;
        // Passing a null value should not break the field.
        const inputValue = value || '';
        const isEmpty = !inputValue;

        switch (type) {
            case 'textarea':
                input = (
                    <textarea
                        name={name}
                        value={inputValue}
                        disabled={disabled}
                        className="Field__textarea"
                        aria-invalid={hasError}
                        onBlur={onBlur}
                        onChange={onChange}
                        maxLength={maxLength}
                    />
                );
                break;
            case 'select':
                input = (
                    <select
                        name={name}
                        value={inputValue}
                        disabled={disabled}
                        className="Field__select"
                        aria-invalid={hasError}
                        onBlur={onBlur}
                        onChange={onChange}
                    >
                        {values.map((v) => (
                            <option key={v.label} value={v.value}>
                                {v.label}
                            </option>
                        ))}
                    </select>
                );
                break;
            default:
                input = (
                    <input
                        type={type}
                        name={name}
                        value={inputValue}
                        disabled={disabled}
                        className="Field__input"
                        aria-invalid={hasError}
                        onBlur={onBlur}
                        onChange={onChange}
                        maxLength={maxLength}
                    />
                );
        }

        return (
            <label
                className={cx('Field', {
                    'Field--error': hasError,
                    'Field--empty': isEmpty,
                    'Field--disabled': disabled,
                })}
            >
                <div className="Field__error" role="alert">
                    {hasError && error}
                </div>
                <div className="Field__input-wrapper">
                    {input}
                    <span className="Field__label">
                        {LABELS[label] ? LABELS[label].id : label}
                        {optional && ` (${LABELS.optional.defaultMessage})`}
                    </span>
                    {isDropdown && (
                        <i
                            className="Field__chevron fa fa-chevron-down"
                            aria-hidden
                        />
                    )}
                </div>
                {maxLength !== null && (
                    <em className="Field__hint Field__hint--maxlength">{`${inputValue.length} / ${maxLength}`}</em>
                )}
                {hasHint && <em className="Field__hint">{hint}</em>}
            </label>
        );
    }
}

export default Field;
