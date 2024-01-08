"use client"

import { useEffect } from 'react';
import { animated } from 'react-spring';
import useSlideInAnimation from '../utils/useSlideInAnimation';

export default function UserInput() {
  const { slideInAnimation, setSlideInAnimation } = useSlideInAnimation(200);

  useEffect(() => {
    setSlideInAnimation({ opacity: 1, transform: 'translateY(0px)' });
  }, [setSlideInAnimation]);

  return (
    <animated.div style={slideInAnimation} className="absolute bottom-0 shadow-2xl h-30 w-9/12 md:w-4/12 flex items-center flex-col gap-4 p-6">
      <p className="text-black text-md">What is on your mind ?</p>
      <input type="text" className="rounded-md text-black text-center p-2 w-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xl" />
    </animated.div>
  )
}
