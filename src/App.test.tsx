import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from 'store/store';

describe('App', () => {
  it('renders Home component on root path', () => {
    render(<App />);

    expect(screen.getByText(/current time/i)).toBeInTheDocument();
  });

  it('goes back from Counter page when the go back button is clicked', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText('Counter')).toBeInTheDocument();

    const counterButton = screen.getByText('Counter');
    fireEvent.click(counterButton);

    const goBackButton = screen.getByText('Go back');

    expect(screen.queryByText('Counter')).not.toBeInTheDocument();
    expect(goBackButton).toBeInTheDocument();

    fireEvent.click(goBackButton);

    await waitFor(() => {
      expect(screen.queryByText('Go back')).not.toBeInTheDocument();
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(screen.getByText('Counter')).toBeInTheDocument();
    });
  });
});