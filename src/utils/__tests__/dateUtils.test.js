import { describe, it, expect } from 'vitest';
import {
    isSameDay,
    isStartDate,
    isEndDate,
    isPreviousDay,
    isWithinTaskTime,
    weekCount,
    getMonthName,
} from '../dateUtils';

// ─── isSameDay ──────────────────────────────────────────────────────
describe('isSameDay', () => {
    it('returns true for the exact same date object', () => {
        const d = new Date(2025, 5, 15, 10, 30);
        expect(isSameDay(d, d)).toBe(true);
    });

    it('returns true for same calendar day but different times', () => {
        const a = new Date(2025, 5, 15, 0, 0, 0);
        const b = new Date(2025, 5, 15, 23, 59, 59);
        expect(isSameDay(a, b)).toBe(true);
    });

    it('returns false for different days', () => {
        const a = new Date(2025, 5, 15);
        const b = new Date(2025, 5, 16);
        expect(isSameDay(a, b)).toBe(false);
    });

    it('returns false when only the year differs', () => {
        const a = new Date(2024, 5, 15);
        const b = new Date(2025, 5, 15);
        expect(isSameDay(a, b)).toBe(false);
    });

    it('returns false when only the month differs', () => {
        const a = new Date(2025, 4, 15);
        const b = new Date(2025, 5, 15);
        expect(isSameDay(a, b)).toBe(false);
    });
});

// ─── isStartDate ────────────────────────────────────────────────────
describe('isStartDate', () => {
    it('returns true when date matches start date', () => {
        const d = new Date(2025, 3, 10);
        const start = new Date(2025, 3, 10, 14, 0);
        expect(isStartDate(d, start)).toBe(true);
    });

    it('returns false when date does not match', () => {
        const d = new Date(2025, 3, 11);
        const start = new Date(2025, 3, 10);
        expect(isStartDate(d, start)).toBe(false);
    });
});

// ─── isEndDate ──────────────────────────────────────────────────────
describe('isEndDate', () => {
    it('returns true when date matches end date', () => {
        const d = new Date(2025, 6, 20);
        const end = new Date(2025, 6, 20, 9, 30);
        expect(isEndDate(d, end)).toBe(true);
    });

    it('returns false when date does not match', () => {
        const d = new Date(2025, 6, 19);
        const end = new Date(2025, 6, 20);
        expect(isEndDate(d, end)).toBe(false);
    });
});

// ─── isPreviousDay ──────────────────────────────────────────────────
describe('isPreviousDay', () => {
    it('returns true when date timestamp is before today', () => {
        const yesterday = new Date(2025, 5, 14);
        const today = new Date(2025, 5, 15);
        expect(isPreviousDay(yesterday, today)).toBe(true);
    });

    it('returns false when date equals today (same timestamp)', () => {
        const t = new Date(2025, 5, 15, 0, 0, 0);
        expect(isPreviousDay(t, t)).toBe(false);
    });

    it('returns false when date is after today', () => {
        const tomorrow = new Date(2025, 5, 16);
        const today = new Date(2025, 5, 15);
        expect(isPreviousDay(tomorrow, today)).toBe(false);
    });
});

// ─── isWithinTaskTime ───────────────────────────────────────────────
describe('isWithinTaskTime', () => {
    const start = new Date(2025, 5, 10);
    const end = new Date(2025, 5, 20);

    it('returns true when date equals start date', () => {
        expect(isWithinTaskTime(new Date(2025, 5, 10), start, end)).toBe(true);
    });

    it('returns true when date equals end date', () => {
        expect(isWithinTaskTime(new Date(2025, 5, 20), start, end)).toBe(true);
    });

    it('returns true when date is strictly between start and end', () => {
        expect(isWithinTaskTime(new Date(2025, 5, 15), start, end)).toBe(true);
    });

    it('returns false when date is before start', () => {
        expect(isWithinTaskTime(new Date(2025, 5, 9), start, end)).toBe(false);
    });

    it('returns false when date is after end', () => {
        expect(isWithinTaskTime(new Date(2025, 5, 21), start, end)).toBe(false);
    });
});

// ─── weekCount ──────────────────────────────────────────────────────
describe('weekCount', () => {
    it('returns 5 for Jan 2025 (Wed start, 31 days)', () => {
        // Jan 1 2025 is Wednesday → index 3
        expect(weekCount(3, 31)).toBe(5);
    });

    it('returns 5 for Feb 2025 (Sat start, 28 days)', () => {
        // Feb 1 2025 is Saturday → index 6
        expect(weekCount(6, 28)).toBe(5);
    });

    it('returns 4 for Feb 2026 (Sun start, 28 days)', () => {
        // Feb 1 2026 is Sunday → index 0
        expect(weekCount(0, 28)).toBe(4);
    });

    it('returns 6 for a month that spans 6 weeks (e.g. March when starts on Saturday with 31 days)', () => {
        // if month starts on Saturday (6) with 31 days → ceil((6+31)/7) = ceil(37/7) = 6
        expect(weekCount(6, 31)).toBe(6);
    });
});

// ─── getMonthName ───────────────────────────────────────────────────
describe('getMonthName', () => {
    it('returns "January" for month index 0', () => {
        expect(getMonthName(new Date(2025, 0, 1))).toBe('January');
    });

    it('returns "June" for month index 5', () => {
        expect(getMonthName(new Date(2025, 5, 1))).toBe('June');
    });

    it('returns "December" for month index 11', () => {
        expect(getMonthName(new Date(2025, 11, 1))).toBe('December');
    });
});
