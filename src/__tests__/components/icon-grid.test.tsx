import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import IconGrid from '../../components/icon-grid';

const testIcons = [
  { src: '/icons/javascript.svg', label: 'JavaScript' },
  { src: '/icons/react.svg', label: 'React' },
  { src: '/icons/python.svg', label: 'Python' },
  { src: '/icons/django.svg', label: 'Django' },
  { src: '/icons/next-js.svg', label: 'NextJS' },
  { src: '/icons/styled-components.svg', label: 'Styled Components' },
  { src: '/icons/node-js.svg', label: 'Node' },
  { src: '/icons/aws.svg', label: 'AWS' },
  { src: '/icons/docker.svg', label: 'Docker' },
  { src: '/icons/postgresql.svg', label: 'PostgreSQL' },
  { src: '/icons/testing-library.svg', label: 'Testing Library' },
  { src: '/icons/jest.svg', label: 'Jest' },
  { src: '/icons/pytest.svg', label: 'Pytest' },
  { src: '/icons/html5.svg', label: 'HTML' },
  { src: '/icons/css3.svg', label: 'CSS' },
];

describe('<IconGrid /> tests', () => {
  test('renders <IconGrid />', () => {
    render(<IconGrid icons={testIcons} />);
    testIcons.forEach((icon) =>
      expect(screen.getByAltText(icon.label)).toBeInTheDocument()
    );
  });
});
