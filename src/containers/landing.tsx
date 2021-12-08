import { Section, SectionImage } from '../components/sections';
import { LandingCopy } from '../components/heading';

export default function LandingSection() {
  return (
    <Section id={'home'} color={'#5371CB'}>
      <SectionImage
        src={'/img/cloud.jpg'}
        alt='single cloud in a blue sky'
        objectFit={'cover'}
      >
        <LandingCopy>
          <h2>Hi, I'm Matt</h2>
          <h2>Brand Strategist turned</h2>
          <h2>Full Stack Developer</h2>
        </LandingCopy>
      </SectionImage>
    </Section>
  );
}
