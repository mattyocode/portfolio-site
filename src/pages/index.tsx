import type { NextPage } from 'next';
import Head from 'next/head';
// import Image from 'next/image'

import { PanelBg, PanelWrapper } from '../components/background-panel';
import { PageTitle } from '../components/heading';
import { NavbarContainer } from '../containers/navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Matt Oliver Developer Portfolio</title>
        <meta name='description' content='' />
      </Head>

      <main>
        <NavbarContainer />
        <PanelWrapper>
          <PanelBg id='home' style={{ backgroundColor: '#5371CB' }}>
            {/* <PageTitle>One</PageTitle> */}
          </PanelBg>
          <PanelBg id='about' style={{ backgroundColor: '#69BA7A' }}>
            <PageTitle>About Me</PageTitle>
          </PanelBg>
          <PanelBg id='projects' style={{ backgroundColor: '#373F51' }}>
            <PageTitle>Projects</PageTitle>
          </PanelBg>
          <PanelBg id='contact' style={{ backgroundColor: '#59A7BB' }}>
            <PageTitle>Contact</PageTitle>
          </PanelBg>
        </PanelWrapper>
      </main>
    </div>
  );
};

export default Home;
