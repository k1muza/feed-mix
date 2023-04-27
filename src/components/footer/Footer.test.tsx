import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders footer text', () => {
    render(<Footer />);
    const footerElement = screen.getByText(/copyright/i);
    expect(footerElement).toBeInTheDocument();
  });
});
