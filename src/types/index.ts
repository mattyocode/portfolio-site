export type IconObject = {
  src: string;
  label: string;
};

export type ProjectDataObject = {
  title: string;
  linkToSite: string | null;
  img: string;
  description: string;
  icons: IconObject[];
  githubRepo: string;
};

export type SectionNavRef = {
  navRef: React.RefObject<any> | ((node?: Element | null) => void);
};
