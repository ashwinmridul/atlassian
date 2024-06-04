import { getCurrentTime } from './'

describe('getCurrentTime', () => {
    beforeEach(() => {
        jest
            .useFakeTimers()
            .setSystemTime(new Date('2022-07-25T14:30:00.000Z'));
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('returns the current time in HH:mm format', () => {
        expect(getCurrentTime()).toBe('14:30');
    });

    it('pads hours with leading zero if necessary', () => {
        // Mock the Date constructor to return a date with hours < 10
        jest
            .useFakeTimers()
            .setSystemTime(new Date('2022-07-25T08:30:00.000Z'));
        expect(getCurrentTime()).toBe('08:30');
    });

    it('pads minutes with leading zero if necessary', () => {
        // Mock the Date constructor to return a date with minutes < 10
        jest
            .useFakeTimers()
            .setSystemTime(new Date('2022-07-25T14:05:00.000Z'));
        expect(getCurrentTime()).toBe('14:05');
    });

    it('returns a string', () => {
        expect(typeof getCurrentTime()).toBe('string');
    });
});