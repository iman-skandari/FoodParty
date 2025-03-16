"use client"
import { motion } from 'framer-motion';
import styles from './loading.module.css';

const LoadingSpinner = () => {
  return (
    <div className={styles.loadingContainer}>
      <motion.div
        className={styles.spinner}
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🍽️
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Loading delicious foods...
      </motion.p>
    </div>
  );
};

export default LoadingSpinner; 