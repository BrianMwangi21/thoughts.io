"use client"

import Image from "next/image";
import { useEffect } from "react";
import { useSpring, animated } from 'react-spring';

export default function Title() {
  const [slideInAnimation, setSlideInAnimation] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 120, friction: 14, duration: 15000 },
  }));

  useEffect(() => {
    setSlideInAnimation({ opacity: 1, transform: 'translateY(0px)' });
  }, [setSlideInAnimation]);

  return (
    <animated.div style={slideInAnimation}>
      <Image
        src="/assets/title.png"
        alt="Thoughts.io"
        width={300}
        height={300}
      />
    </animated.div>
  )
}
