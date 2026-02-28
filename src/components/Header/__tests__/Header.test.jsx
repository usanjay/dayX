import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import Header from '../Header';

// Wrap in MemoryRouter because Header uses useParams, useNavigate, Link
const renderHeader = (props = {}, route = '/') => {
    return render(
        <MemoryRouter initialEntries={[route]}>
            <Header createTask={() => { }} {...props} />
        </MemoryRouter>
    );
};

describe('Header', () => {
    it('renders the DayX branding', () => {
        renderHeader();
        expect(screen.getByText('DayX')).toBeInTheDocument();
    });

    it('shows "Create New Task" button on the home route (no :id param)', () => {
        renderHeader();
        expect(screen.getByText(/create new task/i)).toBeInTheDocument();
    });

    it('clicking "Create New Task" opens the NewTask modal', async () => {
        const user = userEvent.setup();
        renderHeader();

        await user.click(screen.getByText(/create new task/i));

        // The NewTask modal heading should now be visible
        expect(screen.getByText('Add a new task to your calendar with start and end dates.')).toBeInTheDocument();
    });
});
