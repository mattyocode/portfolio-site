import { useRouter } from 'next/router';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Centered } from '../../components/layout';
import BlogNavbarContainer from '../../containers/blog-navbar';
import { PostPageWrapper } from '../../components/blog/layout';
import { PageBack } from '../../components/nav-icons';

import ContactForm from '../../components/form';
import ContactIcons from '../../components/icon-links';
import sendContactRequest from '../../helpers/sendContactRequest';
import { ContactLinks } from '../../data/contact-links';

type PostProps = {
  frontMatter: { title: string; date: string; thumbnailUrl: string };
  mdxSource: MDXRemoteSerializeResult;
};

export const SyntaxHighlighterDark = ({
  style = nord,
  language = 'javascript',
  children,
  ...restProps
}: {
  style: any;
  language: string;
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <SyntaxHighlighter style={style} language={language} {...restProps}>
      {children}
    </SyntaxHighlighter>
  );
};

const components = { code: SyntaxHighlighterDark };

export default function BlogPost({
  frontMatter: { title, date, thumbnailUrl },
  mdxSource,
}: PostProps) {
  const router = useRouter();
  console.log('router >', router.query.slug);
  return (
    <>
      <PostPageWrapper>
        <BlogNavbarContainer activeSection='bloghome' />
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
        <MDXRemote {...mdxSource} components={components} />
        <PageBack
          src='/icons/back-button.svg'
          href='/blog/'
          borderColor='#6d7ec5'
        >
          Back to blog home
        </PageBack>
      </PostPageWrapper>
      <Centered column={true} style={{ marginTop: '0' }}>
        <ContactForm submitFn={sendContactRequest} dark={true} />
        <ContactIcons links={ContactLinks} centered={true} margin={true} />
      </Centered>
    </>
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
  const mdxSource = await serialize(content, {
    scope: frontMatter,
  });

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};
