import React, { useEffect, useRef, useState } from 'react';

interface AnimatedBlockProps {
  children: React.ReactNode;
  addAnimeName: string;

}

export const AnimatedBlock: React.FC<AnimatedBlockProps> = ({ children, addAnimeName }) => {
  const blockRef = useRef<HTMLDivElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (blockRef.current) {
        const blockTop = blockRef.current.offsetTop;
        const blockHeight = blockRef.current.offsetHeight;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        if (scrollPosition > blockTop - windowHeight + blockHeight / 2) {
          setIsAnimated(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div
      ref={blockRef}
      className={`animated-block ${isAnimated ? `${addAnimeName}` : ''}`}
    >
      {children}
    </div>
  );
};
