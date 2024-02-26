import { render } from '@testing-library/react';
import { Button, ButtonVariants } from '../Button';

describe('Button Component', () => {
  test('renders primary button correctly', () => {
    const { getByText } = render(<Button variant={ButtonVariants.primary}>Primary Button</Button>);
    const button = getByText('Primary Button');
    expect(button).toBeInTheDocument();
  });

  test('renders secondary button correctly', () => {
    const { getByText } = render(<Button variant={ButtonVariants.secondary}>Secondary Button</Button>);
    const button = getByText('Secondary Button');
    expect(button).toBeInTheDocument();
  });
});
