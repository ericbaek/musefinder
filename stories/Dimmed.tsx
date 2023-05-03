import React from 'react';
import styles from './Dimmed.module.css'
import { motion } from 'framer-motion';

interface PictureProps {
  onClick?: () => void;
}

export const Dimmed = ({
  ...props
}: PictureProps) => {
  return (
    <motion.div className={styles.Dimmed}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0, 0.71, 0.2, 1.01] 
                }} {...props}/>
  );
};

export default Dimmed;