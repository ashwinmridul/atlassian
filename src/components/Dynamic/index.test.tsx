import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Dynamic from './index';

describe('Dynamic', () => {
    test('renders common search', () => {
        render(
            <Router>
                <Dynamic />
            </Router>
        );
        expect(screen.getByText(/common search/i)).toBeInTheDocument();
        expect(screen.queryByText(/numeric search/i)).not.toBeInTheDocument();
        expect(screen.getByText(/go back/i)).toBeInTheDocument();
    });
    
    test('renders numeric search', () => {
        render(
            <Router>
                <Dynamic numeric />
            </Router>
        );
        expect(screen.getByText(/numeric search/i)).toBeInTheDocument();
        expect(screen.queryByText(/common search/i)).not.toBeInTheDocument();
        expect(screen.getByText(/go back/i)).toBeInTheDocument();
    });
});
