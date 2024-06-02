import { getFormattedDateString } from './'

describe('utils', (): void => {
    it('getFormattedDateString', (): void => {
        const date: Date = new Date('2024-12-23 23:12:50');
        expect(getFormattedDateString(date)).toEqual('12/23/2024 11:12:50 PM');
    });
});