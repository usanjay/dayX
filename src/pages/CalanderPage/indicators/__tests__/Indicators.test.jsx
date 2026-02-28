import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Indicators from '../Indicators';

describe('Indicators', () => {
    it('renders all 5 indicator labels', () => {
        render(<Indicators />);
        expect(screen.getByText('Today')).toBeInTheDocument();
        expect(screen.getByText('Start')).toBeInTheDocument();
        expect(screen.getByText('End')).toBeInTheDocument();
        expect(screen.getByText('Past')).toBeInTheDocument();
        expect(screen.getByText('Future')).toBeInTheDocument();
    });

    it('renders exactly 5 color swatches', () => {
        const { container } = render(<Indicators />);
        const swatches = container.querySelectorAll('span');
        expect(swatches).toHaveLength(5);
    });
});
