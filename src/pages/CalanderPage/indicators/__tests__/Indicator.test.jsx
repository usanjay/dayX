import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Indicator from '../Indicator';

describe('Indicator', () => {
    it('renders the content text', () => {
        render(<Indicator color="green" content="Today" />);
        expect(screen.getByText('Today')).toBeInTheDocument();
    });

    it.each([
        ['green', 'bg-green-200'],
        ['blue', 'bg-blue-200'],
        ['purple', 'bg-purple-200'],
        ['red', 'bg-red-100'],
        ['yellow', 'bg-yellow-100'],
    ])('applies correct background class for color "%s"', (color, expectedClass) => {
        const { container } = render(<Indicator color={color} content="Test" />);
        const swatch = container.querySelector('span');
        expect(swatch.className).toContain(expectedClass);
    });

    it.each([
        ['green', 'border-green-600'],
        ['blue', 'border-blue-600'],
        ['purple', 'border-purple-600'],
        ['red', 'border-red-400'],
        ['yellow', 'border-yellow-400'],
    ])('applies correct border class for color "%s"', (color, expectedClass) => {
        const { container } = render(<Indicator color={color} content="Test" />);
        const swatch = container.querySelector('span');
        expect(swatch.className).toContain(expectedClass);
    });
});
