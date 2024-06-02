import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', (): void => {
  it('renders learn react link', (): void => {
    render(<App />);
    const timeElement = screen.getByText(/current time/i);
    expect(timeElement).toBeInTheDocument();
  });
});
