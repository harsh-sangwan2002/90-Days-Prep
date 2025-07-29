import { expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

test('Counter component renders correctly', () => {
    render(<App />);

    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);

    const value = screen.getByText(/Count is: 4/i);
    expect(value).toBeInTheDocument();
});
