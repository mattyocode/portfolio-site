import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ProjectCard from '../../components/card';

const testProjectData = {
  title: 'TEST PROJECT',
  linkToSite: 'https://moviechooser.co.uk',
  img: '/img/mc-image.jpg',
  description: 'Description of proj.',
  icons: [
    { src: 'white/react-white', label: 'React' },
    { src: 'white/styled-components-white', label: 'Styled Components' },
    { src: 'white/jest-white', label: 'Jest' },
    { src: 'white/testing-library-white', label: 'Testing Library' },
  ],
  githubRepo: 'https://github.com/mattyocode/react-moviechooser',
};

describe('<ProjectCard /> tests', () => {
  test('renders <ProjectCard />', () => {
    render(<ProjectCard projectData={testProjectData} />);

    expect(screen.getByText(/test project/i)).toBeInTheDocument();
    expect(screen.getByAltText(/test project image/i)).toBeInTheDocument();
    expect(
      screen.getByAltText(/link to test project site/i).closest('a')
    ).toHaveAttribute('href', testProjectData.linkToSite);
    expect(screen.getByText(/description of proj/i)).toBeInTheDocument();
    expect(screen.getByAltText(/react/i)).toBeInTheDocument();
    expect(screen.getByAltText(/styled components/i)).toBeInTheDocument();
    expect(screen.getByAltText(/jest/i)).toBeInTheDocument();
    expect(screen.getByAltText(/testing library/i)).toBeInTheDocument();
    expect(
      screen.getByAltText(/link to test project github repo/i).closest('a')
    ).toHaveAttribute('href', testProjectData.githubRepo);
  });
});
