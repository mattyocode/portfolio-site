import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ProjectCarousel from '../../components/carousel';

const testProjectData = [
  {
    title: 'TEST PROJECT',
    linkToSite: 'https://test-site-1.com',
    img: '/img/mc-image.jpg',
    description: 'Description of 1st proj.',
    icons: [
      { src: 'white/react-white', label: 'React' },
      { src: 'white/styled-components-white', label: 'Styled Components' },
      { src: 'white/jest-white', label: 'Jest' },
      { src: 'white/testing-library-white', label: 'Testing Library' },
    ],
    githubRepo: 'https://github.com/test/test1',
  },
  {
    title: 'TEST PROJECT 2',
    linkToSite: 'https://test-site-2.com',
    img: '/img/mc-image.jpg',
    description: 'Description of 2nd proj.',
    icons: [
      { src: 'white/django-white', label: 'Django REST Framework' },
      { src: 'white/pytest-white', label: 'Pytest' },
      { src: 'white/docker-white', label: 'Docker' },
      { src: 'white/postgresql-white', label: 'PostgreSQL' },
    ],
    githubRepo: 'https://github.com/test/test2',
  },
];

describe('<ProjectCarousel /> tests', () => {
  test('renders <ProjectCarousel /> with 2 cards', () => {
    render(<ProjectCarousel projectData={testProjectData} />);

    // first card
    expect(screen.getByText(`${testProjectData[0].title}`)).toBeInTheDocument();
    expect(
      screen.getByAltText(`${testProjectData[0].title} image`)
    ).toBeInTheDocument();
    expect(
      screen
        .getByAltText(`link to ${testProjectData[0].title} site`)
        .closest('a')
    ).toHaveAttribute('href', testProjectData[0].linkToSite);
    expect(
      screen.getByText(testProjectData[0].description)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(testProjectData[0].icons[0].label)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(testProjectData[0].icons[1].label)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(testProjectData[0].icons[2].label)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(testProjectData[0].icons[3].label)
    ).toBeInTheDocument();
    expect(
      screen
        .getByAltText(`link to ${testProjectData[0].title} github repo`)
        .closest('a')
    ).toHaveAttribute('href', testProjectData[0].githubRepo);

    // second card
    expect(screen.getByText(`${testProjectData[1].title}`)).toBeInTheDocument();
    expect(
      screen.getByAltText(`${testProjectData[1].title} image`)
    ).toBeInTheDocument();
    expect(
      screen
        .getByAltText(`link to ${testProjectData[1].title} site`)
        .closest('a')
    ).toHaveAttribute('href', testProjectData[1].linkToSite);
    expect(
      screen.getByText(testProjectData[1].description)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(testProjectData[1].icons[0].label)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(testProjectData[1].icons[1].label)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(testProjectData[1].icons[2].label)
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(testProjectData[1].icons[3].label)
    ).toBeInTheDocument();
    expect(
      screen
        .getByAltText(`link to ${testProjectData[1].title} github repo`)
        .closest('a')
    ).toHaveAttribute('href', testProjectData[1].githubRepo);
  });

  test('buttons are rendered', () => {
    render(<ProjectCarousel projectData={testProjectData} />);

    expect(screen.getByLabelText(/previous/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/next/i)).toBeInTheDocument();
  });
});
