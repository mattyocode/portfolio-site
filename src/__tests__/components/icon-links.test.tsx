import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ContactIcons from '../../components/contact-icons';

const testContactLinks = [
  {
    name: 'github',
    destination: 'https://github.com/test',
  },
  {
    name: 'linkedin',
    destination: 'https://www.linkedin.com/in/test',
  },
];

describe('<ContactIcons /> tests', () => {
  test('renders <ContactIcons />', () => {
    render(<ContactIcons links={testContactLinks} />);
    expect(
      screen.getByAltText(`${testContactLinks[0].name} link`).closest('a')
    ).toHaveAttribute('href', testContactLinks[0].destination);
    expect(
      screen.getByAltText(`${testContactLinks[1].name} link`).closest('a')
    ).toHaveAttribute('href', testContactLinks[1].destination);
  });
});
