import React from 'react';
import Image from 'next/image';
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
    img: string;
    date: string;
    desc: string;
    tags: string[];
  };
};

export default function BlogCard({ postData }: postDataProps) {
  return (
    <SWrapper>
      <SImageWrapper>
        <Image
          src='/img/nightsky.jpg'
          layout='intrinsic'
          height={250}
          width={250}
          objectFit='cover'
          objectPosition='center'
          alt='blog post image'
        />
      </SImageWrapper>
      <SContentWrapper>
        <SDate>5 February, 2022</SDate>
        <STitle>Switching on the dark</STitle>
        <SBodyCopy>
          At the time of writing, the tech press is buzzing about Google Search
          testing a dark mode...
        </SBodyCopy>
        <STags>
          <STag>Industry</STag>
          <STag>Culture</STag>
        </STags>
      </SContentWrapper>
    </SWrapper>
  );
}
