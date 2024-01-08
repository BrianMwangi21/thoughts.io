import { useSpring } from 'react-spring';

const useSlideInAnimation = (delay: number) => {
  const [slideInAnimation, setSlideInAnimation] = useSpring(() => ({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 120, friction: 14 },
    delay: delay,
  }));

  return { slideInAnimation, setSlideInAnimation };
};

export default useSlideInAnimation;
