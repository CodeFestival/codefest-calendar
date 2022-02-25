import { render, screen } from '@testing-library/react';
import App from './App';

test('it shows a header', () => {
  render(<App />);
  expect(screen.getByText('ScheduleFest')).toBeInTheDocument();
});
