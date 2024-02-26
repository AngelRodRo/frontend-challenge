import "@testing-library/jest-dom";
import { render } from '@testing-library/react';
import { Card } from '../Card';

describe('Card Component', () => {
  test('renders children correctly', () => {
    const { getByText } = render(
      <Card>
        <span>Card Content</span>
      </Card>
    );
    expect(getByText('Card Content')).toBeInTheDocument();
  });

  test('renders with custom className', () => {
    const { container } = render(
      <Card className="custom-class">
        <span>Card Content</span>
      </Card>
    );
    const card = container.querySelector('.custom-class');
    expect(card).toBeInTheDocument();
  });


});
