import { render } from '@testing-library/react';
import { Badge } from '../Badge';


describe('Badge Component', () => {
  test('renders text properly', () => {
    const { getByText } = render(<Badge text="Test Text" />);
    expect(getByText('Test Text')).toBeInTheDocument();
  });

});
