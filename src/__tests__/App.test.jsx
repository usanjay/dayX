import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import App from '../App';

// Helper to render App within a router
const renderApp = (initialEntries = ['/']) => {
    return render(
        <MemoryRouter initialEntries={initialEntries}>
            <App />
        </MemoryRouter>
    );
};

describe('App', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('renders without crashing', () => {
        renderApp();
        expect(screen.getByText('DayX')).toBeInTheDocument();
    });

    it('shows "No tasks yet" when localStorage is empty', () => {
        renderApp();
        expect(screen.getByText('No tasks yet')).toBeInTheDocument();
    });

    it('loads tasks from localStorage on mount', () => {
        const tasks = [
            {
                id: 'test-id-1',
                taskName: 'Test Task',
                startDate: new Date(2025, 5, 10).toISOString(),
                endDate: new Date(2025, 5, 20).toISOString(),
            },
        ];
        localStorage.setItem('tasks', JSON.stringify(tasks));

        renderApp();
        expect(screen.getByText('Test Task')).toBeInTheDocument();
    });

    it('creates a task via the form and shows it in the list', async () => {
        const user = userEvent.setup();
        renderApp();

        // Open the create-task modal
        await user.click(screen.getByText('Create New Task'));

        // Fill out the form
        await user.type(screen.getByPlaceholderText('Enter task name'), 'My New Task');
        await user.type(screen.getByLabelText('Start Date'), '2025-07-01');
        await user.type(screen.getByLabelText('Deadline Date'), '2025-07-15');

        // Submit
        await user.click(screen.getByRole('button', { name: /create task/i }));

        // The task should now appear
        expect(screen.getByText('My New Task')).toBeInTheDocument();

        // And it should be persisted in localStorage
        const stored = JSON.parse(localStorage.getItem('tasks'));
        expect(stored).toHaveLength(1);
        expect(stored[0].taskName).toBe('My New Task');
    });

    it('deletes a task when the trash button is clicked', async () => {
        const user = userEvent.setup();
        const tasks = [
            {
                id: 'del-1',
                taskName: 'Delete Me',
                startDate: new Date(2025, 5, 1).toISOString(),
                endDate: new Date(2025, 5, 5).toISOString(),
            },
        ];
        localStorage.setItem('tasks', JSON.stringify(tasks));

        renderApp();
        expect(screen.getByText('Delete Me')).toBeInTheDocument();

        // Click the delete (trash) button — it's the second button in the task row
        const deleteButtons = screen.getAllByRole('button');
        // The trash button has an SVG icon; find by closest button with the trash action
        const trashBtn = deleteButtons.find(btn =>
            btn.querySelector('.fa-trash') || btn.querySelector('[data-icon="trash"]') || btn.closest('[class*="red"]') || btn.className.includes('red')
        );

        if (trashBtn) {
            await user.click(trashBtn);
        } else {
            // Fallback: click the last button in the task row (trash is always last)
            const allButtons = screen.getAllByRole('button');
            await user.click(allButtons[allButtons.length - 1]);
        }

        expect(screen.queryByText('Delete Me')).not.toBeInTheDocument();
        expect(screen.getByText('No tasks yet')).toBeInTheDocument();
    });
});
