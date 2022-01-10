import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

import ProjectsSection from '../../containers/projects';

describe('<ProjectsSection />', () => {
  const mockRef = jest.fn();
  const testProjectsData = [
    {
      title: 'TEST PROJECT 1',
      linkToSite: 'https://test-link-to-site.com',
      img: '/img/mc-image.jpg',
      description: 'Brief description of project.',
      icons: [
        { src: 'react', label: 'React' },
        { src: 'styled-components', label: 'Styled Components' },
        { src: 'jest', label: 'Jest' },
        { src: 'react-testing-library', label: 'React Testing Library' },
      ],
      githubRepo: 'https://github.com/mattyocode/moviechooser-api',
    },
  ];

  test('renders <ProjectsSection/>', () => {
    mockAllIsIntersecting(true);
    render(<ProjectsSection navRef={mockRef} projectData={testProjectsData} />);
    expect(screen.getByText(/projects/i)).toBeInTheDocument();
    expect(screen.getByText(/test project 1/i)).toBeInTheDocument();
    expect(
      screen.getByText(/brief description of project/i)
    ).toBeInTheDocument();
    expect(screen.getByAltText(/styled components/i)).toBeInTheDocument();
    expect(screen.getByAltText(/jest/i)).toBeInTheDocument();
    expect(screen.getByAltText(/testing library/i)).toBeInTheDocument();
    expect(
      screen.getByAltText(/link to test project 1 site/i)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(/link to test project 1 github repo/i)
    ).toBeInTheDocument();
  });
});
