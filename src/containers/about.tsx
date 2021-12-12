import Image from 'next/image';
import { Section, FullBleedWrapper } from '../components/sections';
import { PageTitle } from '../components/heading';

export default function AboutSection(): JSX.Element {
  return (
    <Section
      id='about'
      color={'linear-gradient(to bottom, #5371CB, #5580F3 50%, #373F51 50%)'}
    >
      <FullBleedWrapper centered={false}>
        <PageTitle>About Me</PageTitle>
        <Image
          src='/img/objectgn.png'
          alt='green angular structure'
          objectFit='cover'
          objectPosition='right'
          layout='fill'
        />
      </FullBleedWrapper>
    </Section>
  );
}
