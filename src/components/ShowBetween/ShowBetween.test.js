import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ShowBetween from './ShowBetween';

describe('ShowBetween', () => {
    it('works', () => {
        const start = moment()
            .subtract(30, 'minutes')
            .toISOString();
        const end = moment()
            .add(90, 'minutes')
            .toISOString();

        expect(
            shallow(
                <ShowBetween
                    startTime={start}
                    endTime={end}
                    startBuffer={15}
                    endDelay={15}
                >
                    Test
                </ShowBetween>,
            ).text(),
        ).toBe('Test');
    });

    describe.each`
        target     | start      | end        | startBuffer | endDelay | isBetween
        ${'13:45'} | ${'13:10'} | ${'14:00'} | ${15}       | ${15}    | ${true}
        ${'13:10'} | ${'13:10'} | ${'14:00'} | ${15}       | ${15}    | ${true}
        ${'12:55'} | ${'13:10'} | ${'14:00'} | ${15}       | ${15}    | ${true}
        ${'14:00'} | ${'13:10'} | ${'14:00'} | ${15}       | ${15}    | ${true}
        ${'14:15'} | ${'13:10'} | ${'14:00'} | ${15}       | ${15}    | ${true}
        ${'12:30'} | ${'13:10'} | ${'14:00'} | ${15}       | ${15}    | ${false}
        ${'14:30'} | ${'13:10'} | ${'14:00'} | ${15}       | ${15}    | ${false}
    `(
        'before/after cases',
        ({ target, start, end, startBuffer, endDelay, isBetween }) => {
            const is = isBetween ? 'is' : 'is not';
            const label = `${target} ${is} between ${start} (- ${startBuffer}min) and ${end} (+ ${endDelay}min)`;

            test(label, () => {
                const targetTime = moment(`2019-07-03T${target}`)
                    .startOf('minute')
                    .add(30, 'seconds');
                const startTime = moment(`2019-07-03T${start}`).toISOString();
                const endTime = moment(`2019-07-03T${end}`).toISOString();

                expect(
                    shallow(
                        <ShowBetween
                            targetTime={targetTime}
                            startTime={startTime}
                            endTime={endTime}
                            startBuffer={startBuffer}
                            endDelay={endDelay}
                        >
                            Test
                        </ShowBetween>,
                    ).text(),
                ).toBe(isBetween ? 'Test' : '');
            });
        },
    );

    it('recomputes at periodic intervals', () => {
        const now = moment();
        const dateNow = jest
            .spyOn(Date, 'now')
            .mockImplementation(() => now.valueOf());

        jest.useFakeTimers();

        const start = now
            .clone()
            .subtract(1, 'minutes')
            .toISOString();
        const end = now
            .clone()
            .add(2, 'minutes')
            .toISOString();

        expect(
            shallow(
                <ShowBetween
                    startTime={start}
                    endTime={end}
                    startBuffer={0}
                    endDelay={0}
                >
                    Test
                </ShowBetween>,
            ).text(),
        ).toBe('Test');

        dateNow.mockImplementation(() =>
            now
                .clone()
                .add(1, 'hour')
                .valueOf(),
        );

        expect(
            shallow(
                <ShowBetween
                    startTime={start}
                    endTime={end}
                    startBuffer={0}
                    endDelay={0}
                >
                    Test
                </ShowBetween>,
            )
                .update()
                .text(),
        ).toBe('');

        dateNow.mockRestore();
    });

    it('#forceHide', () => {
        const start = moment()
            .subtract(30, 'minutes')
            .toISOString();
        const end = moment()
            .add(90, 'minutes')
            .toISOString();

        expect(
            shallow(
                <ShowBetween
                    startTime={start}
                    endTime={end}
                    startBuffer={15}
                    endDelay={15}
                    forceHide
                >
                    Test
                </ShowBetween>,
            ).text(),
        ).toBe('');
    });
});
