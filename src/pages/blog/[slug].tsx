import { useRouter } from 'next/router';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Centered } from '../../components/layout';
import { Links, Navbar, ScrollLink } from '../../components/navbar';
import { PageWrapper, PostPageWrapper } from '../../components/blog/layout';
import { PageBack } from '../../components/nav-icons';

import ContactForm from '../../components/form';
import ContactIcons from '../../components/icon-links';
import sendContactRequest from '../../helpers/sendContactRequest';
import { ContactLinks } from '../../data/contact-links';

type PostProps = {
  frontMatter: { title: string; date: string; thumbnailUrl: string };
  mdxSource: MDXRemoteSerializeResult;
};

export default function BlogPost({
  frontMatter: { title, date, thumbnailUrl },
  mdxSource,
}: PostProps) {
  const router = useRouter();
  console.log('router >', router.query.slug);
  return (
    <PostPageWrapper>
      <Navbar>
        <Links>
          <ScrollLink href='/blog' scroll={false}>
            Blog Home
          </ScrollLink>
          <ScrollLink href='/' scroll={false}>
            Portfolio
          </ScrollLink>
        </Links>
      </Navbar>
      <h1>
        <span className='purple'>{title}</span>
      </h1>
      <Image
        src={thumbnailUrl}
        alt='blog image'
        width='25'
        height='20'
        layout='responsive'
        objectFit='contain'
        priority
      />
      <p>{date}</p>
      <MDXRemote {...mdxSource} />
      <PageBack
        src='/icons/back-button.svg'
        href='/blog/'
        borderColor='#6d7ec5'
      >
        Back to blog home
      </PageBack>
      <Centered column={true} style={{ width: '100%', padding: '0' }}>
        <ContactForm submitFn={sendContactRequest} dark={true} />
        <ContactIcons links={ContactLinks} centered={true} margin={true} />
      </Centered>
    </PostPageWrapper>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const markdownWithMetaData = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMetaData);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};
