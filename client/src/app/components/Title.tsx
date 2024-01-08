"use client"

import Image from "next/image";
import { useEffect } from "react";
import { animated } from 'react-spring';
import useSlideInAnimation from "../utils/useSlideInAnimation";

export default function Title() {
  const { slideInAnimation, setSlideInAnimation } = useSlideInAnimation(0);

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
