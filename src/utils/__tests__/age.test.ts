import MockDate from 'mockdate';

import { calculateAge } from '../age';

describe('calculateAge function', () => {
    const realDate = Date;

    beforeEach(() => {
        MockDate.set('2024-02-25')
      });

    afterEach(() => {
        global.Date = realDate;
    });

    test('calculates age correctly for past dates', () => {
        expect(calculateAge('1990-01-01')).toBe(34);
        expect(calculateAge('1985-10-15')).toBe(38);
    });
});
