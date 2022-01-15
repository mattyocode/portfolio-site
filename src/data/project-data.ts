export const projectData = [
  {
    title: 'MOVIECHOOSER',
    linkToSite: 'https://moviechooser.co.uk',
    img: '/img/mc-image.jpg',
    video: '/video/moviechooser.mp4',
    description:
      'React app with Redux that allows users to specify genre, runtime, and release decade, and returns matching movies with links to streaming services and the ability to share links to movies on social platforms. Users can login (authenticating via JWT) and add movies to a list.',
    icons: [
      { src: 'white/react-white', label: 'React' },
      { src: 'white/styled-components-white', label: 'Styled Components' },
      { src: 'white/jest-white', label: 'Jest' },
      { src: 'white/testing-library-white', label: 'Testing Library' },
    ],
    githubRepo: 'https://github.com/mattyocode/react-moviechooser',
  },
  {
    title: 'MOVIECHOOSER API',
    linkToSite: null,
    img: '/img/moviechooser-api.jpg',
    video: null,
    description:
      'An API built with Django REST Framework that handles requests for movie data, authentication, and CRUD functionality for movie lists. The app is Dockerised, served by Gunicorn, uses Nginx as a reverse proxy, and is hosted on an AWS instance. CI/CD pipeline uses Github Actions.',
    icons: [
      { src: 'white/django-white', label: 'Django REST Framework' },
      { src: 'white/pytest-white', label: 'Pytest' },
      { src: 'white/docker-white', label: 'Docker' },
      { src: 'white/postgresql-white', label: 'PostgreSQL' },
    ],
    githubRepo: 'https://github.com/mattyocode/moviechooser-api',
  },
  {
    title: 'NGRAM GENERATOR',
    linkToSite: 'https://pypi.org/project/excel-ngrams/',
    img: '/img/ngrams-img.png',
    video: '/video/ngrams-generator.mp4',
    description:
      'A language analysis command-line app avilable on PyPI that takes in text data and outputs the most common ngrams it contains. Data is returned as CSV, from bigrams up to a chosen phrase length. Words are tokenised with Spacy and ngrams are generated with NLTK.',
    icons: [
      { src: 'white/python-white', label: 'Python' },
      { src: 'white/pytest-white', label: 'Pytest' },
    ],
    githubRepo: 'https://github.com/mattyocode/excel-ngrams',
  },
  {
    title: 'PORTFOLIO & BLOG',
    linkToSite: null,
    img: '/img/mc-image.jpg',
    video: null,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    icons: [
      { src: 'white/next-js-white', label: 'Next JS' },
      { src: 'white/typescript-white', label: 'Typescript' },
      { src: 'white/styled-components-white', label: 'Styled Components' },
      { src: 'white/jest-white', label: 'Jest' },
      { src: 'white/three-js-white', label: 'Three JS' },
    ],
    githubRepo: 'https://github.com/mattyocode/moviechooser-api',
  },
];
