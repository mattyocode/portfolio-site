import Image from 'next/image';
import dynamic from 'next/dynamic';
import {
  FullBleedWrapper,
  Section,
  LandingContent,
  ProfilePicWrapper,
} from '../components/layout';
import ContactIcons from '../components/contact-icons';
import { LandingCopy } from '../components/heading';

import { SectionNavRef } from '../types';
import { ContactLinks } from '../data/contact-links';

const CanvasContainer = dynamic(() => import('../components/canvas'));

export default function LandingSection({ navRef }: SectionNavRef): JSX.Element {
  return (
    <Section
      id='home'
      ref={navRef}
      color={'linear-gradient(to bottom, #4E6DCA, #7E88C3 70%, #5371CB 90%)'}
    >
      <FullBleedWrapper>
        <CanvasContainer />
        <LandingContent>
          <ProfilePicWrapper>
            <Image
              src='/img/profilepic.svg'
              alt='illustration of site author'
              width='250'
              height='250'
              layout='responsive'
              objectFit='contain'
              priority
            />
          </ProfilePicWrapper>
          <LandingCopy>
            <h2>
              <span className='coral'>Hi, I&apos;m Matt</span>
            </h2>
            <h2>
              <span className='black'>A User-Centered</span>
            </h2>
            <h2>
              <span className='coral'>Full Stack Developer</span>
            </h2>
          </LandingCopy>
        </LandingContent>
        <ContactIcons links={ContactLinks} />
      </FullBleedWrapper>
    </Section>
  );
}
