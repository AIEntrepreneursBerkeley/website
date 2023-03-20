import { type FC, useState, useEffect, useRef } from 'react';
import Globe, { type GlobeMethods } from 'react-globe.gl';

const ReactGlobe: FC = () => {
  const checkWidth = (newWidth?: number) => {
    if (newWidth === undefined) {
      return 1000;
    }
    if (newWidth < 1000) {
      return newWidth;
    }
    if (newWidth < 1500) {
      return newWidth * 0.8;
    }
    if (newWidth < 2000) {
      return newWidth * 0.6;
    }
  };

  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const [width, setWidth] = useState(() =>
    checkWidth(typeof window !== 'undefined' ? window.innerWidth : 0)
  );

  useEffect(() => {
    const handleResize = () => setWidth(checkWidth(window.innerWidth));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  useEffect(() => {
    if (globeRef?.current) {
      globeRef.current.controls().enableZoom = false;
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 1;
    }
  }, []);

  return (
    <Globe
      globeImageUrl="/images/world.jpg"
      bumpImageUrl="/images/topology.png"
      ref={globeRef}
      backgroundColor="rgba(0,0,0,0)"
      width={width}
      height={width}
      animateIn
    />
  );
};

export default ReactGlobe;
