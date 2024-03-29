export const projectData = [
  {
    title: 'PixSorter',
    linkToSite: 'https://www.pixsorter.com/',
    img: '/img/project/pixsorter-image.png',
    video: '/video/pixsorter.mp4',
    description:
      'A Next.js app using TypeScript that applies classic sorting algorithms to images, rendering progress along the way. Images can be uploaded by the user, or requested from Unsplash via their API. Sorting can be done via combined RGB values or individually.',
    icons: [
      { src: 'white/next-js-white', label: 'Next JS' },
      { src: 'white/typescript-white', label: 'Typescript' },
      { src: 'white/sass', label: 'Sass' }
    ],
    githubRepo: 'https://github.com/mattyocode/pixsorter',
  },
  {
    title: 'MOVIECHOOSER',
    linkToSite: 'https://moviechooser.co.uk',
    img: '/img/project/mc-image.png',
    video: '/video/moviechooser.mp4',
    description:
      'A React app with Redux that allows users to specify genre, runtime, and release decade, and receive matching movies with links to streaming services and social media share buttons. Users can login (authenticating via JWT) and add movies to a list.',
    icons: [
      { src: 'white/react-white', label: 'React' },
      { src: 'white/styled-components-white', label: 'Styled Components' },
      { src: 'white/jest-white', label: 'Jest' }
    ],
    githubRepo: 'https://github.com/mattyocode/react-moviechooser',
  },
  {
    title: 'MOVIECHOOSER API',
    linkToSite: null,
    img: '/img/project/moviechooser-api.png',
    video: undefined,
    description:
      'API built with Django REST Framework with endpoints for movie data, authentication, and CRUD functionality for movie lists. App is Dockerised, served by Gunicorn, uses Nginx as a reverse proxy, and is hosted on an AWS instance. CI/CD pipeline uses Github Actions.',
    icons: [
      { src: 'white/django-white', label: 'Django REST Framework' },
      { src: 'white/docker-white', label: 'Docker' },
      { src: 'white/postgresql-white', label: 'PostgreSQL' },
    ],
    githubRepo: 'https://github.com/mattyocode/moviechooser-api',
  },
  {
    title: 'NGRAM GENERATOR',
    linkToSite: 'https://pypi.org/project/excel-ngrams/',
    img: '/img/project/ngrams-img.png',
    video: '/video/ngrams-generator.mp4',
    description:
      'Language analysis command-line app available on PyPI that takes in text data and outputs the most common phrases it contains. Data is returned as CSV, up to a chosen ngram length. Word tokenization uses Spacy, ngrams are generated with NLTK.',
    icons: [
      { src: 'white/python-white', label: 'Python' },
      { src: 'white/pytest-white', label: 'Pytest' },
    ],
    githubRepo: 'https://github.com/mattyocode/excel-ngrams',
  },
  {
    title: 'BLOG & PORTFOLIO',
    linkToSite: '/blog/',
    img: '/img/project/blog.jpg',
    video: '/video/blog.mp4',
    description:
      'Personal blog and portfolio site made with Next JS, Typescript and Styled Components. Landing section cloud object is rendered with Three JS, giving the page some visual dynamism and a (clickable) touch of randomness in cloud formation.',
    icons: [
      { src: 'white/next-js-white', label: 'Next JS' },
      { src: 'white/typescript-white', label: 'Typescript' },
      { src: 'white/three-js-white', label: 'Three JS' },
    ],
    githubRepo: 'https://github.com/mattyocode/portfolio-site',
  },
];
