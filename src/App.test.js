import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pedro Osorio name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Pedro Osorio/i);
  expect(linkElement).toBeInTheDocument();
});

test ('renders Name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Name/i);
  expect(linkElement).toBeInTheDocument();
})
