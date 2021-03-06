import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PageWrapper } from '../components/layout';
import NavbarContainer from '../containers/navbar';
import HomeSection from '../containers/landing';
import { PageTop } from '../components/nav-icons';

import { projectData } from '../data/project-data';

const ProjectsSection = dynamic(() => import('../containers/projects'));
const ContactSection = dynamic(() => import('../containers/contact'));
const AboutSection = dynamic(() => import('../containers/about'));

const pageTopVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.6 },
  enter: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -50, scale: 0.6 },
};

const Home: NextPage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const {
    ref: landingRef,
    inView: landingInView,
    entry: landingEntry,
  } = useInView({ threshold: 0.8 });

  const {
    ref: aboutRef,
    inView: aboutInView,
    entry: aboutEntry,
  } = useInView({ threshold: 0.8 });

  const {
    ref: projectsRef,
    inView: projectsInView,
    entry: projectsEntry,
  } = useInView({ threshold: 0.8 });

  const {
    ref: contactRef,
    inView: contactInView,
    entry: contactEntry,
  } = useInView({ threshold: 0.8 });

  useEffect(() => {
    if (landingInView) {
      setActiveSection('home');
    } else if (aboutInView) {
      setActiveSection('about');
    } else if (projectsInView) {
      setActiveSection('projects');
    } else if (contactInView) {
      setActiveSection('contact');
    }
  }, [landingInView, aboutInView, projectsInView, contactInView]);

  return (
    <div>
      <Head>
        <title>Matt Oliver Developer Portfolio</title>
        <meta name='description' content='Matt Oliver Developer Portfolio' />
        <meta property='og:url' content='https://www.mattoliver.dev/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Matt Oliver Developer Portfolio' />
        <meta property='og:image' content='/img/social-img.png' />
      </Head>

      <main>
        <NavbarContainer activeSection={activeSection} />
        <PageTop
          href='#home'
          src='/icons/up-arrow.svg'
          show={activeSection !== 'home'}
        >
          Back to top
        </PageTop>
        <PageWrapper id='pagewrapper'>
          <HomeSection navRef={landingRef} />
          <AboutSection
            navRef={aboutRef}
            isActive={activeSection === 'about'}
          />
          <ProjectsSection projectData={projectData} navRef={projectsRef} />
          <ContactSection navRef={contactRef} />
        </PageWrapper>
      </main>
    </div>
  );
};

export default Home;
