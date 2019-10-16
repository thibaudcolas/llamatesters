import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { useInterval } from './useInterval';

const CHECK_TIME_EVERY_MS = 100 * 1000;

const useTimeBetween = (
    targetTime,
    startTime,
    endTime,
    startBuffer,
    endDelay,
    forceOutside,
) => {
    let target = targetTime || moment();
    const start = useMemo(
        () =>
            moment(startTime)
                .subtract(startBuffer, 'minutes')
                .startOf('minute'),
        [startTime, startBuffer],
    );
    const end = useMemo(
        () =>
            moment(endTime)
                .add(endDelay, 'minutes')
                .endOf('minute'),
        [endTime, endDelay],
    );
    const isPastTime = target.isAfter(end);

    const [isBetween, setIsBetween] = useState(
        isPastTime ? false : target.isBetween(start, end),
    );

    // Never start the interval if we are already past the end time, including buffer.
    const shouldStartInterval = !isPastTime && !forceOutside;
    useInterval(
        () => {
            target = targetTime || moment();
            setIsBetween(target.isBetween(start, end));
        },
        CHECK_TIME_EVERY_MS,
        shouldStartInterval,
    );

    return isBetween && !forceOutside;
};

/**
 * Conditionally show a part of the UI over a predetermined period of time (start, end), with extra padding.
 */
const ShowBetween = ({
    targetTime,
    startTime,
    endTime,
    startBuffer,
    endDelay,
    forceHide,
    children,
}) => {
    const isBetween = useTimeBetween(
        targetTime,
        startTime,
        endTime,
        startBuffer,
        endDelay,
        forceHide,
    );

    return isBetween ? children : null;
};

ShowBetween.propTypes = {
    targetTime: PropTypes.object,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    startBuffer: PropTypes.number.isRequired,
    endDelay: PropTypes.number.isRequired,
    forceHide: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

ShowBetween.defaultProps = {
    targetTime: null,
    forceHide: false,
};

export default ShowBetween;
