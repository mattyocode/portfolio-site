import Image from 'next/image';
import {
  FullBleedWrapper,
  Section,
  Centered,
  ProfilePicWrapper,
} from '../components/sections';
import { LandingCopy } from '../components/heading';

export default function LandingSection(): JSX.Element {
  return (
    <Section id={'home'} color={'#5371CB'}>
      <FullBleedWrapper>
        <Image
          src='/img/cloud.jpg'
          alt='single cloud in a blue sky'
          objectFit='cover'
          objectPosition='center'
          layout='fill'
        />
        <Centered>
          <ProfilePicWrapper>
            <Image
              src='/img/profilepic.png'
              alt='illustration of site author'
              width='250'
              height='250'
              layout='responsive'
              objectFit='contain'
            />
          </ProfilePicWrapper>
          <LandingCopy>
            <h2>
              {/* <span className='black'></span> */}
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
