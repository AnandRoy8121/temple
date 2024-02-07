'use client'
// ScrollingText.js
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollingText = ({ text }) => {
  const controls = useAnimation();

  useEffect(() => {
    const animateText = async () => {
      while (true) {
        await controls.start({ opacity: 1, x: 0, transition: { duration: 10 } });
        // await controls.start({ x: '-100%', transition: { duration: 0.1, ease: 'linear' } });
        await controls.start({ opacity: 1, x: '100%', transition: { duration: 3 } });
      }
    };

    animateText();
  }, [controls]);

  return (
    <motion.div
      style={{ whiteSpace: 'nowrap' }}
      animate={controls}
      initial={{ opacity: 0, x: '100%' }}
    >
      {text}
    </motion.div>
  );
};

export default ScrollingText;
