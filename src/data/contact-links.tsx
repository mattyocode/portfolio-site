export const ContactLinks = [
  {
    name: 'github',
    destination: 'https://github.com/mattyocode',
  },
  {
    name: 'linkedin',
    destination: 'https://www.linkedin.com/in/matthew--oliver/',
  },
];

export type ContactLinkObj = {
  name: string;
  destination: string;
};

export type ContactLinksArr = {
  [key: string]: ContactLinkObj;
};
