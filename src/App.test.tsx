import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', (): void => {
  it('renders date component', (): void => {
    render(<App />);
    const timeElement = screen.getByTestId('date');
    expect(timeElement).toBeInTheDocument();
  });
});
