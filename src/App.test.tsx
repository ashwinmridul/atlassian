import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders Home component on root path', () => {
    render(<App />);

    expect(screen.getByText(/current time/i)).toBeInTheDocument();
  });
});