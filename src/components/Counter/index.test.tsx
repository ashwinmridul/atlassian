// import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Counter from './';
import store from 'store/store';

describe('Counter component', () => {
  it('renders the counter value', () => {
    render(
        <Provider store={store}>
            <Router>
                <Counter />
            </Router>
        </Provider>
    );

    expect(screen.getByText('Counter: 0')).toBeInTheDocument();
  });
});