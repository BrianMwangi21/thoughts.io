"use client"

import Image from "next/image";
import { useEffect, useState } from 'react';
import { emitter } from '../utils/emitter';
import { animated, useSpring } from 'react-spring';
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: '400',
  subsets: ["latin"]
});

const Balloon = ({ input }: { input: string }) => {
  const images = ["/assets/ballon1.png", "/assets/ballon2.png", "/assets/ballon3.png"];
  const offset = window.innerWidth - 400;
  const startX = Math.random() * offset;
  const endX = offset - startX;

  const [flyAwayAnimation, setFlyAwayAnimation] = useSpring(() => ({
    from: { transform: `translate3d(${startX}px, 100vh, 0)` },
  }));

  useEffect(() => {
    setFlyAwayAnimation({
      transform: `translate3d(${endX}px, -100vh, 0)`,
      config: { tension: 120, friction: 14, duration: 10000 },
    });
  }, [setFlyAwayAnimation, endX]);


  return (
    <animated.div style={{ ...flyAwayAnimation, position: 'fixed', left: 0, top: 0 }}>
      <div className="relative w-[400px] h-[600px]">
        <Image
          src={images[Math.floor(Math.random() * images.length)]}
          alt={input}
          width={400}
          height={600}
        />
        <div className="absolute text-center top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-white text-5xl font-extra">
          <span className={pacifico.className}>{input.toUpperCase()}</span>
        </div>
      </div>
    </animated.div>
  )
}

export default function Canvas() {
  const [balloons, setBalloons] = useState<React.ReactNode[]>([]);

  const handleCreateBallon = (input: string) => {
    setBalloons(prevBalloons => [...prevBalloons, <Balloon key={prevBalloons.length} input={input} />])
  }

  useEffect(() => {
    emitter.on('create_balloon', handleCreateBallon);
    return () => {
      emitter.off('create_balloon', handleCreateBallon);
    }
  }, [])

  return (
    <div className="absolute inset-0 h-screen w-screen z-10">
      {balloons}
    </div>
  )
}
