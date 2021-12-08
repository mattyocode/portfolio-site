import type { NextPage } from 'next';
import Head from 'next/head';
// import Image from 'next/image'

import { Section, PageWrapper } from '../components/sections';
import { PageTitle } from '../components/heading';
import { NavbarContainer } from '../containers/navbar';
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
          <Section id='about' color={'#69BA7A'}>
            <PageTitle>About Me</PageTitle>
          </Section>
          <Section id='projects' color={'#373F51'}>
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
