import { getFormattedDateString } from './'

describe('getFormattedDateString', () => {
    it('returns a formatted date string in default locale', () => {
        expect(getFormattedDateString(new Date('2022-07-25 14:30:00'))).toBe('7/25/2022 2:30:00 PM');
    });
    
    it('does not throw an error with an invalid date', () => {
        const invalidDate: Date = new Date(' invalid date ');
        expect(() => getFormattedDateString(invalidDate)).not.toThrowError();
        expect(getFormattedDateString(invalidDate)).toBe('Invalid Date Invalid Date');
    });
});