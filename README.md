# Full Stack Developer Portfolio

This website is designed to provide an overview of personal projects and a way to get in touch with the author. The blog portion is currently in development.

## Tech stack

- Typescript
- Next JS
- Styled Components
- React Three Fiber / Drei
- Framer Motion
- Send Grid
- Formik
- Jest
- React Testing Library

## Deployment

Website is hosted on Vercel, and is available at [mattoliver.dev](https://mattoliver.dev)

## Key site features

### Landing section

![Landing section screengrab](https://github.com/mattyocode/images/blob/main/landing.png)

Landing section features particle-based cloud from the Drei library that changes colour (randomly selected) on click. It adds some interactivity and visual dynamism to as users first hit the site.

### Projects carousel

![Projects section screengrab](https://github.com/mattyocode/images/blob/main/projects.png)

The projects carousel is built on pure-react-carousel and includes autoplay videos for front-end projects.

Below is a code snippet illustrating the dynamic addition of video source that keeps the initial page load lean, only loading video content once the a card including video is visible in the viewport:

```tsx
import { useInView } from 'react-intersection-observer';

[...]

export default function ProjectCard({
  projectData,
}: {
  projectData: ProjectDataObject;
}): JSX.Element {
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { ref: cardRef, inView: cardInView } = useInView();

  useEffect(() => {
    if (cardInView && projectData.video && videoRef.current) {
      setVideoSrc(projectData.video);
      videoRef.current.play();
    }
  }, [cardInView, videoRef, projectData]);

  return (
    <Wrapper ref={cardRef}>
      <ContentWrapper>
        {projectData.video && (
          <Video
            ref={videoRef}
            loop
            muted
            playsInline
            poster={`${projectData.img}`}
          >
            {videoSrc && <source src={videoSrc} />}
          </Video>
        )}
        <ImageOpacity opacity={videoSrc ? '0' : '1'}>
          <Image
            src={`${projectData.img}`}
            alt={`${projectData.title} image`}
            layout='fill'
            objectFit='cover'
            priority
          />
        </ImageOpacity>
      </ContentWrapper>
      [...]
    </CardWrapper>
  );
}
```

## Challenges and Improvements

Working with a third-party carousel library was a consideration for efficiently building the site, but provided some constraints around styling (with some nested elements providing difficult to reach and style intuitively), and functionality (for example, fine-tuning of touch gesture interaction). Given more time, I intend to build a responsive carousel from scratch to fully get under the hood of this commonly used component.
