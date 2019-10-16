import { useState, useRef, useEffect } from 'react';

/**
 * useInterval hook
 * Extracted from https://www.npmjs.com/package/@rooks/use-interval because of build issues
 *
 * Declaratively creates a setInterval to run a callback after a fixed
 * amount of time
 *
 *@param {funnction} callback - Callback to be fired
 *@param {number} intervalId - Interval duration in milliseconds after which the callback is to be fired
 *@param {boolean} startImmediate - Whether the interval should start immediately on initialise
 *@return {IntervalHandler}
 */
export function useInterval(
    callback,
    intervalDuration,
    startImmediate = false,
) {
    const [intervalId, setIntervalId] = useState(null);
    const [isRunning, setIsRunning] = useState(startImmediate);
    const savedCallback = useRef();
    function start() {
        if (!isRunning) {
            setIsRunning(true);
        }
    }
    function stop() {
        if (isRunning) {
            setIsRunning(false);
        }
    }
    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    });
    // Set up the interval.
    /* eslint-disable consistent-return */
    useEffect(() => {
        function tick() {
            if (savedCallback.current) {
                savedCallback.current();
            }
        }
        if (intervalDuration !== null && isRunning) {
            const id = setInterval(tick, intervalDuration);
            setIntervalId(id);
            return () => clearInterval(id);
        }
    }, [intervalDuration, isRunning]);
    const handler = {
        start,
        stop,
        intervalId,
    };
    return handler;
}
