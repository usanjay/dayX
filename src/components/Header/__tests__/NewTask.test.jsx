import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import NewTask from '../NewTask';

const renderNewTask = (overrides = {}) => {
    const defaults = {
        createTask: vi.fn(),
        createTaskVisibility: true,
        toggleVisibility: vi.fn(),
    };
    const props = { ...defaults, ...overrides };
    return {
        ...render(
            <MemoryRouter>
                <NewTask {...props} />
            </MemoryRouter>
        ),
        props,
    };
};

describe('NewTask', () => {
    it('renders the form when createTaskVisibility is true', () => {
        renderNewTask();
        expect(screen.getByPlaceholderText('Enter task name')).toBeInTheDocument();
        expect(screen.getByLabelText('Start Date')).toBeInTheDocument();
        expect(screen.getByLabelText('Deadline Date')).toBeInTheDocument();
    });

    it('returns null when createTaskVisibility is false', () => {
        const { container } = renderNewTask({ createTaskVisibility: false });
        expect(container.innerHTML).toBe('');
    });

    it('shows validation error for a task name shorter than 3 characters', async () => {
        const user = userEvent.setup();
        renderNewTask();

        await user.type(screen.getByPlaceholderText('Enter task name'), 'AB');
        await user.type(screen.getByLabelText('Start Date'), '2025-07-01');
        await user.type(screen.getByLabelText('Deadline Date'), '2025-07-10');

        await user.click(screen.getByRole('button', { name: /create task/i }));

        expect(await screen.findByText(/task name must be at least 3 characters/i)).toBeInTheDocument();
    });

    it('calls createTask and toggleVisibility on valid submit', async () => {
        const user = userEvent.setup();
        const { props } = renderNewTask();

        await user.type(screen.getByPlaceholderText('Enter task name'), 'Valid Task');
        await user.type(screen.getByLabelText('Start Date'), '2025-07-01');
        await user.type(screen.getByLabelText('Deadline Date'), '2025-07-15');

        await user.click(screen.getByRole('button', { name: /create task/i }));

        expect(props.createTask).toHaveBeenCalledOnce();
        expect(props.createTask).toHaveBeenCalledWith(
            expect.objectContaining({
                taskName: 'Valid Task',
                startDate: '2025-07-01',
                endDate: '2025-07-15',
            })
        );
        expect(props.toggleVisibility).toHaveBeenCalled();
    });

    it('clicking Cancel calls toggleVisibility', async () => {
        const user = userEvent.setup();
        const { props } = renderNewTask();

        await user.click(screen.getByRole('button', { name: /cancel/i }));

        expect(props.toggleVisibility).toHaveBeenCalledOnce();
    });

    it('shows validation error when end date is before start date', async () => {
        const user = userEvent.setup();
        renderNewTask();

        await user.type(screen.getByPlaceholderText('Enter task name'), 'Bad Dates');
        await user.type(screen.getByLabelText('Start Date'), '2025-07-15');
        await user.type(screen.getByLabelText('Deadline Date'), '2025-07-01');

        await user.click(screen.getByRole('button', { name: /create task/i }));

        expect(await screen.findByText(/end date cannot be before start date/i)).toBeInTheDocument();
    });
});
