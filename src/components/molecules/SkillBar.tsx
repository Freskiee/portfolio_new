import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillBarProps {
  skill: string;
  percentage: number;
  color?: string;
}

export const SkillBar: React.FC<SkillBarProps> = ({
  skill,
  percentage,
  color = 'var(--accent-gradient)'
}) => {
  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(percentage);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [inView, percentage]);

  return (
    <motion.div
      ref={ref}
      className="mb-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="d-flex justify-content-between mb-2">
        <span className="fw-semibold">{skill}</span>
        <span className="text-muted">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-progress"
          style={{ 
            background: color,
            width: `${progress}%`
          }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};