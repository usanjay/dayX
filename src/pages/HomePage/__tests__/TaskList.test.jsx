import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskList from '../TaskList';

const mockTasks = [
    {
        id: 'task-1',
        taskName: 'Design homepage',
        startDate: new Date(2025, 0, 15), // Jan 15, 2025
        endDate: new Date(2025, 1, 28),   // Feb 28, 2025
    },
    {
        id: 'task-2',
        taskName: 'Write tests',
        startDate: new Date(2025, 5, 1),  // Jun 1, 2025
        endDate: new Date(2025, 5, 30),   // Jun 30, 2025
    },
];

describe('TaskList', () => {
    it('renders a row for each task', () => {
        render(<TaskList tasks={mockTasks} deleteTask={() => { }} openTask={() => { }} />);
        expect(screen.getByText('Design homepage')).toBeInTheDocument();
        expect(screen.getByText('Write tests')).toBeInTheDocument();
    });

    it('displays the formatted start and end dates', () => {
        render(<TaskList tasks={mockTasks} deleteTask={() => { }} openTask={() => { }} />);
        // dateFormat(new Date(2025,0,15)) → "Jan 15, 2025"
        expect(screen.getByText('Jan 15, 2025')).toBeInTheDocument();
        expect(screen.getByText('Feb 28, 2025')).toBeInTheDocument();
    });

    it('displays serial numbers starting from 1', () => {
        render(<TaskList tasks={mockTasks} deleteTask={() => { }} openTask={() => { }} />);
        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
    });

    it('calls deleteTask with the task id when trash button is clicked', async () => {
        const user = userEvent.setup();
        const deleteFn = vi.fn();
        render(<TaskList tasks={[mockTasks[0]]} deleteTask={deleteFn} openTask={() => { }} />);

        // There are two action buttons per row: view and delete. Delete is the second.
        const buttons = screen.getAllByRole('button');
        await user.click(buttons[1]); // trash button

        expect(deleteFn).toHaveBeenCalledWith('task-1');
    });

    it('calls openTask with the task id when view button is clicked', async () => {
        const user = userEvent.setup();
        const openFn = vi.fn();
        render(<TaskList tasks={[mockTasks[0]]} deleteTask={() => { }} openTask={openFn} />);

        const buttons = screen.getAllByRole('button');
        await user.click(buttons[0]); // view button

        expect(openFn).toHaveBeenCalledWith('task-1');
    });
});
