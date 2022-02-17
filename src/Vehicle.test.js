import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders car emoji', () => {
  render(<App />);
  const carEL = screen.getByRole('carBtn');
  const carListEL = screen.getByText('🚗');

  if (fireEvent.click(carEL)) {
    expect(carListEL);
  }
});
