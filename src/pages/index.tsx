import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { PageWrapper } from '../components/layout';
import NavbarContainer from '../containers/navbar';
import AboutSection from '../containers/about';
import HomeSection from '../containers/landing';
import ProjectsSection from '../containers/projects';
import ContactSection from '../containers/contact';

const Home: NextPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const router = useRouter();
  const {
    ref: landingRef,
    inView: landingInView,
    entry: landingEntry,
  } = useInView({ threshold: 1 });

  const {
    ref: aboutRef,
    inView: aboutInView,
    entry: aboutEntry,
  } = useInView({ threshold: 1 });

  const {
    ref: projectsRef,
    inView: projectsInView,
    entry: projectsEntry,
  } = useInView({ threshold: 1 });

  const {
    ref: contactRef,
    inView: contactInView,
    entry: contactEntry,
  } = useInView({ threshold: 1 });

  console.log('pathname >', router);

  useEffect(() => {
    if (landingInView) {
      setActiveSection('home');
    }
    if (aboutInView) {
      setActiveSection('about');
    }
    if (projectsInView) {
      setActiveSection('projects');
    }
    if (contactInView) {
      setActiveSection('contact');
    }
  }, [router, landingInView, aboutInView, projectsInView, contactInView]);

  return (
    <div>
      <Head>
        <title>Matt Oliver Developer Portfolio</title>
        <meta name='description' content='' />
      </Head>

      <main>
        <NavbarContainer activeSection={activeSection} />
        <PageWrapper id='pagewrapper'>
          <HomeSection navRef={landingRef} />
          <AboutSection navRef={aboutRef} />
          <ProjectsSection navRef={projectsRef} />
          <ContactSection navRef={contactRef} />
        </PageWrapper>
      </main>
    </div>
  );
};

export default Home;
