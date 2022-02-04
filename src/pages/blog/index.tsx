import Image from 'next/image';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { PageWrapper, BlogPostsWrapper } from '../../components/blog/layout';
import { Links, Navbar, ScrollLink } from '../../components/navbar';
import { LandingCopy, JumboTitle, SubHead } from '../../components/heading';
import {
  FullBleedWrapper,
  Section,
  LandingContent,
  ProfilePicWrapper,
} from '../../components/layout';
import ContactIcons from '../../components/icon-links';

import { ContactLinks } from '../../data/contact-links';

const CanvasContainer = dynamic(() => import('../../components/canvas'));

const Blog: NextPage = () => {
  return (
    <PageWrapper>
      <Navbar>
        <Links>
          <ScrollLink href='#home' scroll={false}>
            Contact
          </ScrollLink>
          <ScrollLink href='/' scroll={false}>
            Portfolio
          </ScrollLink>
        </Links>
      </Navbar>
      <Section
        id='home'
        backgroundImage='url("/img/withtrees.jpg")'
        cover={true}
      >
        <FullBleedWrapper>
          <CanvasContainer initialColorIdx={5} />
          <LandingContent>
            <ProfilePicWrapper>
              <Image
                src='/img/profilepiccoral.svg'
                alt='illustration of site author'
                width='250'
                height='250'
                layout='responsive'
                objectFit='contain'
                priority
              />
            </ProfilePicWrapper>
            <LandingCopy style={{ alignItems: 'center' }}>
              <JumboTitle>Blog</JumboTitle>
              <SubHead>
                Writing about tech, web development, and the joy of code.
              </SubHead>
            </LandingCopy>
          </LandingContent>
          <ContactIcons links={ContactLinks} margin={true} />
        </FullBleedWrapper>
      </Section>
      <BlogPostsWrapper>
        <h2>Latest Posts</h2>
      </BlogPostsWrapper>
    </PageWrapper>
  );
};

export default Blog;
