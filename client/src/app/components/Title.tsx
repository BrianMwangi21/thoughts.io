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
    <animated.div style={slideInAnimation} className="w-[200px] h-[100px] md:w-[300px] md:h-[150px]">
      <Image
        src="/assets/title.png"
        alt="Thoughts.io"
        fill
        className="object-contain"
      />
    </animated.div>
  )
}
