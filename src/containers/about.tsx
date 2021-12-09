import Image from 'next/image';
import { Section, FullBleedWrapper } from '../components/sections';
import { PageTitle } from '../components/heading';

export default function AboutSection(): JSX.Element {
  return (
    <Section id='about' color={'#5580F3'}>
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
