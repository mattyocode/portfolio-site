import type { NextPage } from 'next';
import Head from 'next/head';

import { Section, PageWrapper } from '../components/sections';
import { PageTitle } from '../components/heading';
import { NavbarContainer } from '../containers/navbar';
import AboutSection from '../containers/about';
import HomeSection from '../containers/landing';

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
          <Section
            id='projects'
            color={'#373F51'}
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, #222 1px, transparent 0)',
              backgroundSize: '50px 50px',
            }}
          >
            <PageTitle>Projects</PageTitle>
          </Section>
          <Section id='contact' color={'#59A7BB'}>
            <PageTitle>Contact</PageTitle>
          </Section>
        </PageWrapper>
      </main>
    </div>
  );
};

export default Home;
