import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Home from '../Home';

const renderHome = (props = {}) => {
    const defaults = {
        tasks: [],
        createTask: vi.fn(),
        deleteTask: vi.fn(),
    };
    return render(
        <MemoryRouter>
            <Home {...defaults} {...props} />
        </MemoryRouter>
    );
};

describe('Home', () => {
    it('renders the empty state when there are no tasks', () => {
        renderHome({ tasks: [] });
        expect(screen.getByText('No tasks yet')).toBeInTheDocument();
        expect(screen.getByText('Create your first task to get started')).toBeInTheDocument();
    });

    it('shows "0 tasks in total" when no tasks exist', () => {
        renderHome({ tasks: [] });
        expect(screen.getByText('0 tasks in total')).toBeInTheDocument();
    });

    it('shows correct task count for multiple tasks', () => {
        const tasks = [
            { id: '1', taskName: 'A', startDate: new Date(), endDate: new Date() },
            { id: '2', taskName: 'B', startDate: new Date(), endDate: new Date() },
        ];
        renderHome({ tasks });
        expect(screen.getByText('2 tasks in total')).toBeInTheDocument();
    });

    it('shows singular "task" for exactly 1 task', () => {
        const tasks = [
            { id: '1', taskName: 'A', startDate: new Date(), endDate: new Date() },
        ];
        renderHome({ tasks });
        expect(screen.getByText('1 task in total')).toBeInTheDocument();
    });

    it('renders task names when tasks exist', () => {
        const tasks = [
            { id: '1', taskName: 'Buy groceries', startDate: new Date(2025, 5, 1), endDate: new Date(2025, 5, 5) },
        ];
        renderHome({ tasks });
        expect(screen.getByText('Buy groceries')).toBeInTheDocument();
    });
});
