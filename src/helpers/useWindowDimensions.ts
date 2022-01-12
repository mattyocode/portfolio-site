import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
  let width: number, height: number;
  if (typeof window !== 'undefined') {
    width = window.innerWidth;
    height = window.innerHeight;
  }
  return {
    width,
    height,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState<{
    width: number;
    height: number;
  }>(getWindowDimensions());

  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
};

export default useWindowDimensions;
