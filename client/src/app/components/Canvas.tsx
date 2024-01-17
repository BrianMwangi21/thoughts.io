"use client"

import Image from "next/image";
import { useEffect, useState } from 'react';
import { emitter } from '../utils/emitter';
import { animated, useSpring } from 'react-spring';

const Balloon = ({ input }: { input: string }) => {
  const [flyAwayAnimation, setFlyAwayAnimation] = useSpring(() => ({
    from: { transform: `translate3d(50vw, 100vh, 0)` },
    to: { transform: `translate3d(50vw, -100vh, 0)` },
    config: { tension: 120, friction: 14, duration: 5000 }
  }));

  useEffect(() => {
    setFlyAwayAnimation({ transform: `translate3d(50vw, -100vh, 0)` });
  }, [setFlyAwayAnimation]);

  return (
    <animated.div style={{ ...flyAwayAnimation, position: 'fixed', left: 0, top: 0 }}>
      <Image
        src="/assets/ballon1.png"
        alt={input}
        width={200}
        height={400}
      />
    </animated.div>
  )
}

export default function Canvas() {
  const [balloons, setBalloons] = useState<React.ReactNode[]>([]);

  const handleCreateBallon = (input: string) => {
    console.log("Adding new balloon", input);
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
