import { fireEvent, render, screen } from "@testing-library/react"
import { expect } from 'vitest';
import App from "../App"

test("Counter renders 0 value by default", () => {
    render(<App />);
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
})

test("Counter increments the value when + button is clicked", () => {
    render(<App />);
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    expect(screen.getByText("Count: 1")).toBeInTheDocument();
});