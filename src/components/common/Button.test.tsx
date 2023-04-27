import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('should render children correctly', () => {
    const { getByText } = render(<Button>Hello</Button>);
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is true', () => {
    const { getByText } = render(<Button disabled>Click me</Button>);
    expect(getByText('Click me')).toBeDisabled();
  });
});
