import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  console.log('router >', router.query.slug);
  return (
    <>
      <h1>Blog Post</h1>
      <p style={{ color: 'black' }}>Post id: {router.query.slug}</p>
    </>
  );
}
