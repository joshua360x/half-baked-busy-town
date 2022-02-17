import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
// import TrafficLight from './TrafficLight';

test('renders learn react link', () => {
  render(<App />);
  // const inputElement = screen.getByRole('traffic-light');
  const yellowBtn = screen.getByRole('yellow-btn');
  const yellowLight = screen.getByRole('yellowLight');
  
  const redBtn = screen.getByRole('red-btn');
  const redLightEl = screen.getByRole('redLight');
  
  
  const greenBtn = screen.getByRole('green-btn');
  const greenightEl = screen.getByRole('greenLight');

  if (fireEvent.click(yellowBtn)) {
    expect(yellowLight.classList.contains('on')).toBe(true);
  }
  if (fireEvent.click(redBtn)) {
    expect(redLightEl.classList.contains('on')).toBe(true);
  }
  if (fireEvent.click(greenBtn)) {
    expect(greenightEl.classList.contains('on')).toBe(true);
  }
});
