import Image from 'next/image';
import CanvasContainer from '../components/canvas';
import {
  FullBleedWrapper,
  Section,
  LandingCentered,
  ProfilePicWrapper,
} from '../components/layout';
import ContactIcons from '../components/icon-links';
import { LandingCopy } from '../components/heading';

import { SectionNavRef } from '../types';
import { ContactLinks } from '../data/contact-links';

export default function LandingSection({ navRef }: SectionNavRef): JSX.Element {
  return (
    <Section
      id='home'
      ref={navRef}
      color={'linear-gradient(to bottom, #4E6DCA, #7E88C3 70%, #5371CB 90%)'}
    >
      <FullBleedWrapper>
        <CanvasContainer />
        <LandingCentered>
          <ProfilePicWrapper>
            <Image
              src='/img/profilepicgn.png'
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
              <span className='black'>Brand Strategist turned</span>
            </h2>
            <h2>
              <span className='coral'>Full Stack Developer</span>
            </h2>
          </LandingCopy>
        </LandingCentered>
        <ContactIcons links={ContactLinks} />
      </FullBleedWrapper>
    </Section>
  );
}
