import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputField from './InputField';

describe('InputField Component', () => {
  const defaultProps = {
    labelFor: 'test-id',
    labelText: 'Test Label',
    type: 'text',
    id: 'test-id',
    value: '',
    placeholder: 'Enter text',
    onChange: jest.fn(),
  };

  it('renders correctly with default props', () => {
    const { getByLabelText } = render(<InputField {...defaultProps} />);
    const inputElement = getByLabelText(/Test Label/i) as HTMLInputElement;

    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe('text');
    expect(inputElement.id).toBe('test-id');
    expect(inputElement.value).toBe('');
    expect(inputElement.placeholder).toBe('Enter text');
  });

  it('calls onChange callback when input value changes', () => {
    render(<InputField {...defaultProps} />);
    const input = screen.getByLabelText(/Test Label/i) as HTMLInputElement;
    fireEvent.change(input, {
      target: { value: 'test value' },
    });
    expect(defaultProps.onChange).toBeCalledTimes(1);
  });
});
