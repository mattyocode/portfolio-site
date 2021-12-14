import Image from 'next/image';
import CanvasContainer from '../components/canvas';
import {
  FullBleedWrapper,
  Section,
  Centered,
  ProfilePicWrapper,
} from '../components/sections';
import { LandingCopy } from '../components/heading';

export default function LandingSection(): JSX.Element {
  return (
    <Section
      id={'home'}
      color={'linear-gradient(to bottom, #4E6DCA, #7E88C3 70%, #5371CB 90%)'}
    >
      <FullBleedWrapper>
        <CanvasContainer />
        <Centered>
          <ProfilePicWrapper>
            <Image
              src='/img/profilepic.png'
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
              <span className='coral'>Hi, I'm Matt</span>
            </h2>
            <h2>
              <span className='black'>Brand Strategist turned</span>
            </h2>
            <h2>
              <span className='coral'>Full Stack Developer</span>
            </h2>
          </LandingCopy>
        </Centered>
      </FullBleedWrapper>
    </Section>
  );
}
