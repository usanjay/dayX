import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TaskDetails from '../TaskDetails';

const mockTask = {
    taskName: 'Launch product',
    startDate: new Date(2025, 2, 1),  // Mar 1, 2025
    endDate: new Date(2025, 3, 15),   // Apr 15, 2025
};

describe('TaskDetails', () => {
    it('displays the task name', () => {
        render(<TaskDetails task={mockTask} />);
        expect(screen.getByText('Launch product')).toBeInTheDocument();
    });

    it('displays the formatted start date', () => {
        render(<TaskDetails task={mockTask} />);
        expect(screen.getByText('Mar 1, 2025')).toBeInTheDocument();
    });

    it('displays the formatted end date', () => {
        render(<TaskDetails task={mockTask} />);
        expect(screen.getByText('Apr 15, 2025')).toBeInTheDocument();
    });

    it('displays the dash separator between dates', () => {
        render(<TaskDetails task={mockTask} />);
        expect(screen.getByText('-')).toBeInTheDocument();
    });
});
