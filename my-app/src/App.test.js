import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const buttonElement = screen.getByTestId("button");
  fireEvent.click(buttonElement)
  expect(buttonElement.innerHTML).toBe('1'); 
});
