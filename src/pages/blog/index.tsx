import Image from 'next/image';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { PageWrapper, BlogPostsWrapper } from '../../components/blog/layout';
import { Links, Navbar, ScrollLink } from '../../components/navbar';
import { LandingCopy, JumboTitle, SubHead } from '../../components/heading';
import {
  FullBleedWrapper,
  Section,
  LandingContent,
  ProfilePicWrapper,
  Centered,
} from '../../components/layout';
import BlogCard from '../../components/blog/card';
import ContactForm from '../../components/form';
import ContactIcons from '../../components/icon-links';
import sendContactRequest from '../../helpers/sendContactRequest';
import { ContactLinks } from '../../data/contact-links';

const CanvasContainer = dynamic(() => import('../../components/canvas'));

type blogSnippetProps = {
  title: string;
  thumbnailUrl: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
};

type blogHomeProps = {
  posts: blogSnippetProps[];
};

const Blog: NextPage<blogHomeProps> = ({ posts }) => {
  posts.sort((a, b) => {
    return new Date(b.date).getDate() - new Date(a.date).getDate();
  });

  return (
    <PageWrapper>
      <Navbar>
        <Links>
          <ScrollLink href='/blog' scroll={true}>
            Blog Home
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
          <CanvasContainer initialColorIdx={5} opacity='0.4' />
          <LandingContent>
            <ProfilePicWrapper>
              <Image
                src='/img/profilepiccoral.svg'
                alt='illustration of site author'
                width='25'
                height='25'
                layout='responsive'
                objectFit='contain'
                priority
              />
            </ProfilePicWrapper>
            <LandingCopy>
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
        <h2 style={{ margin: '3rem 2rem 0rem 2rem', textAlign: 'center' }}>
          Latest Posts
        </h2>
        {posts.map((post: blogSnippetProps, idx: number) => (
          <BlogCard postData={post} key={idx} />
        ))}
      </BlogPostsWrapper>
      <Centered column={true}>
        <ContactForm submitFn={sendContactRequest} dark={true} />
        <ContactIcons links={ContactLinks} centered={true} margin={true} />
      </Centered>
    </PageWrapper>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((filename) => {
    const markdownWithMetaData = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );
    const { data: frontMatter } = matter(markdownWithMetaData);

    return {
      ...frontMatter,
      slug: filename.split('.')[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};
