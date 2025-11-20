import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

test("Counter renders 0 by default", () => {
    render(<App />);
    const val = screen.getByText('Count: 0');
    expect(val).toBeInTheDocument();
});

test("Counter increments and decrements correctly", () => {
    render(<App />);

    const increment = screen.getByText('+');
    const decrement = screen.getByText('-');
    const counterValue = screen.getByText('Count: 0');

    // Initial value should be 0
    expect(counterValue).toHaveTextContent('Count: 0');

    // Click increment
    fireEvent.click(increment);
    expect(counterValue).toHaveTextContent('Count: 1');
});