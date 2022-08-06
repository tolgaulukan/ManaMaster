import { render, screen } from '@testing-library/react';
import App from './App';
import ManaClicker from '../src/components/ManaClicker'

test('renders learn react link', () => {
  render(<ManaClicker />);
  const linkElement = screen.getByText(/mana/i);
  expect(linkElement).toBeInTheDocument();
});
