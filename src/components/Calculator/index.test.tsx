// import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Calculator from './';

describe('Calculator component', () => {
  it('renders the display input with initial value of ""', () => {
    render(<Calculator />);
    const displayInput = screen.getByRole('textbox');
    expect(displayInput).toHaveValue('');
  });

  it('does nothing when the equals button is clicked', async () => {
    render(<Calculator />);
    const displayInput = screen.getByRole('textbox');
    const equalsButton = screen.getByText('=');
    fireEvent.click(equalsButton);
    await waitFor(() => expect(displayInput).toHaveValue(''));
  });

  it('updates the display value when a number button is clicked', () => {
    render(<Calculator />);
    const displayInput = screen.getByRole('textbox');
    const numButton = screen.getByText('1');
    fireEvent.click(numButton);
    expect(displayInput).toHaveValue('1');
  });

  it('updates the display value when the comma button is clicked', () => {
    render(<Calculator />);
    const displayInput = screen.getByRole('textbox');
    const numButton = screen.getByText('1');
    fireEvent.click(numButton);
    const commaButton = screen.getByText('.');
    fireEvent.click(commaButton);
    expect(displayInput).toHaveValue('1.');
  });

  it('does not updates the display value when the comma button is clicked twice', () => {
    render(<Calculator />);
    const displayInput = screen.getByRole('textbox');
    const numButton = screen.getByText('1');
    fireEvent.click(numButton);
    const commaButton = screen.getByText('.');
    fireEvent.click(commaButton);
    expect(displayInput).toHaveValue('1.');
    fireEvent.click(commaButton);
    expect(displayInput).toHaveValue('1.');
  });

  it('updates the display value when a sign button is clicked', () => {
    render(<Calculator />);
    const displayInput = screen.getByRole('textbox');
    const numButton = screen.getByText('1');
    fireEvent.click(numButton);
    const signButton = screen.getByText('+');
    fireEvent.click(signButton);
    expect(displayInput).toHaveValue('');
  });

  it('add the values when the equals button is clicked', async () => {
    render(<Calculator />);
    const displayInput = screen.getByRole('textbox');
    const numButton = screen.getByText('1');
    fireEvent.click(numButton);
    const signButton = screen.getByText('+');
    fireEvent.click(signButton);
    const numButton2 = screen.getByText('2');
    fireEvent.click(numButton2);
    const equalsButton = screen.getByText('=');
    fireEvent.click(equalsButton);
    await waitFor(() => expect(displayInput).toHaveValue('3'));
  });

  it('subtract the values when the equals button is clicked', async () => {
    render(<Calculator />);
    const displayInput = screen.getByRole('textbox');
    const numButton = screen.getByText('2');
    fireEvent.click(numButton);
    const signButton = screen.getByText('-');
    fireEvent.click(signButton);
    const numButton2 = screen.getByText('1');
    fireEvent.click(numButton2);
    const equalsButton = screen.getByText('=');
    fireEvent.click(equalsButton);
    await waitFor(() => expect(displayInput).toHaveValue('1'));
  });

  it('multiply the values when the equals button is clicked', async () => {
    render(<Calculator />);
    const displayInput = screen.getByRole('textbox');
    const numButton = screen.getByText('2');
    fireEvent.click(numButton);
    const signButton = screen.getByText('*');
    fireEvent.click(signButton);
    const numButton2 = screen.getByText('3');
    fireEvent.click(numButton2);
    const equalsButton = screen.getByText('=');
    fireEvent.click(equalsButton);
    await waitFor(() => expect(displayInput).toHaveValue('6'));
  });

  it('divide the values when the equals button is clicked', async () => {
    render(<Calculator />);
    const displayInput = screen.getByRole('textbox');
    const numButton = screen.getByText('5');
    fireEvent.click(numButton);
    const signButton = screen.getByText('/');
    fireEvent.click(signButton);
    const numButton2 = screen.getByText('3');
    fireEvent.click(numButton2);
    const equalsButton = screen.getByText('=');
    fireEvent.click(equalsButton);
    await waitFor(() => expect(displayInput).toHaveValue('1.6666666666666667'));
  });

  it('resets the display value when the clear button is clicked', () => {
    render(<Calculator />);
    const displayInput = screen.getByRole('textbox');
    const numButton = screen.getByText('1');
    fireEvent.click(numButton);
    const clearButton = screen.getByText('C');
    fireEvent.click(clearButton);
    expect(displayInput).toHaveValue('');
  });
});