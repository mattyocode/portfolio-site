import type { NextPage } from 'next';
import Head from 'next/head';

import { PageWrapper } from '../components/sections';
import { PageTitle } from '../components/heading';
import NavbarContainer from '../containers/navbar';
import AboutSection from '../containers/about';
import HomeSection from '../containers/landing';
import ProjectsSection from '../containers/projects';
import ContactSection from '../containers/contact';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Matt Oliver Developer Portfolio</title>
        <meta name='description' content='' />
      </Head>

      <main>
        <NavbarContainer />
        <PageWrapper id='pagewrapper'>
          <HomeSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </PageWrapper>
      </main>
    </div>
  );
};

export default Home;
