import type { NextPage } from 'next';
import Head from 'next/head';

import { Section, PageWrapper } from '../components/sections';
import { PageTitle } from '../components/heading';
import { NavbarContainer } from '../containers/navbar';
import AboutSection from '../containers/about';
import HomeSection from '../containers/landing';
import ProjectsSection from '../containers/projects';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Matt Oliver Developer Portfolio</title>
        <meta name='description' content='' />
      </Head>

      <main>
        <NavbarContainer />
        <PageWrapper>
          <HomeSection />
          <AboutSection />
          <ProjectsSection />

          <Section id='contact' color={'#59A7BB'}>
            <PageTitle>Contact</PageTitle>
          </Section>
        </PageWrapper>
      </main>
    </div>
  );
};

export default Home;
