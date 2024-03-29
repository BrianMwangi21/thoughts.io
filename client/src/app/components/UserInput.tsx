"use client"

import { useEffect, useState } from 'react';
import { animated } from 'react-spring';
import useSlideInAnimation from '../utils/useSlideInAnimation';
import { emitter } from '../utils/emitter';

export default function UserInput() {
  const { slideInAnimation, setSlideInAnimation } = useSlideInAnimation(200);
  const [input, setInput] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key == 'Enter') {
      emitter.emit('create_balloon', input);
      setInput('');

      // For mobile, blur the keyboard to see the full screen
      const target = event.target as HTMLInputElement;
      target.blur();

      // Then scroll to top
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    setSlideInAnimation({ opacity: 1, transform: 'translateY(0px)' });
  }, [setSlideInAnimation]);

  return (
    <animated.div style={slideInAnimation} className="z-20 bg-white rounded-t-2xl absolute bottom-0 shadow-2xl h-30 w-9/12 md:w-4/12 flex items-center flex-col gap-4 p-6">
      <p className="text-black text-md">What is on your mind ?</p>
      <input
        type="text"
        value={input}
        className="rounded-md text-black text-center p-2 w-full ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xl"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </animated.div>
  )
}
