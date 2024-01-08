"use client"

import Image from "next/image";
import { useEffect } from "react";
import { useSpring, animated } from 'react-spring';

export default function Title() {
  const [fadeBounceAnimation, setFadeBounceAnimation] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 120, friction: 14, duration: 5000 },
  }));

  useEffect(() => {
    setFadeBounceAnimation({ opacity: 1, transform: 'translateY(0px)' });
  }, [setFadeBounceAnimation]);

  return (
    <animated.div style={fadeBounceAnimation}>
      <Image
        src="/assets/title.png"
        alt="Thoughts.io"
        width={300}
        height={300}
      />
    </animated.div>
  )
}
