import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../../hooks/useCursor';

export const CustomCursor: React.FC = () => {
  const { position, isHovering } = useCursor();

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        left: position.x - 6,
        top: position.y - 6,
        scale: isHovering ? 1.5 : 1
      }}
      transition={{
        type: 'spring',
        stiffness: 1200,
        damping: 15,
        mass: 0.3
      }}
    />
  );
};