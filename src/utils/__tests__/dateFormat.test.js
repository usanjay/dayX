import { describe, it, expect } from 'vitest';
import dateFormat from '../dateFormat';

describe('dateFormat', () => {
    it('formats a normal date correctly', () => {
        const date = new Date(2025, 0, 15); // Jan 15, 2025
        expect(dateFormat(date)).toBe('Jan 15, 2025');
    });

    it('formats a single-digit day', () => {
        const date = new Date(2025, 5, 3); // Jun 3, 2025
        expect(dateFormat(date)).toBe('Jun 3, 2025');
    });

    it('formats Dec 31 (year boundary)', () => {
        const date = new Date(2025, 11, 31);
        expect(dateFormat(date)).toBe('Dec 31, 2025');
    });

    it('formats Feb 29 on a leap year', () => {
        const date = new Date(2024, 1, 29);
        expect(dateFormat(date)).toBe('Feb 29, 2024');
    });

    it('formats the first day of the year', () => {
        const date = new Date(2025, 0, 1);
        expect(dateFormat(date)).toBe('Jan 1, 2025');
    });
});
