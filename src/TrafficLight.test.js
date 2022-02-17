import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
// import TrafficLight from './TrafficLight';

test('renders learn react link', () => {
  render(<App />);
  // const inputElement = screen.getByRole('traffic-light');
  const buttonElement = screen.getByRole('yellow-btn');
  const yellowBtn = screen.getByRole('yellowLight');

  fireEvent.click(buttonElement);

  expect(yellowBtn.classList.contains('on')).toBe(true);
});
