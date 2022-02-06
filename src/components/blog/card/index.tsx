import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  SWrapper,
  SImageWrapper,
  SContentWrapper,
  SDate,
  STitle,
  SBodyCopy,
  STags,
  STag,
} from './styles/blogcard';

type postDataProps = {
  postData: {
    title: string;
    thumbnailUrl: string;
    date: string;
    description: string;
    tags: string[];
    slug: string;
  };
};

export default function BlogCard({ postData }: postDataProps) {
  console.log('post data in card', postData);
  return (
    <Link href={'/blog/' + postData.slug} scroll={false} passHref>
      <SWrapper>
        <SImageWrapper>
          <Image
            src={postData.thumbnailUrl}
            layout='intrinsic'
            height={250}
            width={250}
            objectFit='cover'
            objectPosition='center'
            alt='blog post image'
          />
        </SImageWrapper>
        <SContentWrapper>
          <SDate>{postData.date}</SDate>
          <STitle>{postData.title}</STitle>
          <SBodyCopy>{postData.description}</SBodyCopy>
          <STags>
            {postData.tags &&
              postData.tags.map((tag, idx) => <STag key={idx}>{tag}</STag>)}
          </STags>
        </SContentWrapper>
      </SWrapper>
    </Link>
  );
}
