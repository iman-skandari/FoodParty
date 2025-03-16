"use client"
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import styles from './anime.module.css';

const FoodAnimation = () => {
  const controls = useAnimation();

  useEffect(() => {
    // انیمیشن اتوماتیک چرخش
    controls.start({
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    });
  }, [controls]);

  return (
    <div className={styles.animationContainer}>
      <motion.div
        className={styles.foodPlate}
        animate={controls}
        whileHover={{ scale: 1.2 }}
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      >
        <motion.div
          className={styles.foodEmojis}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🍕 🍔 🍜 🍣 🥗
        </motion.div>
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.animationTitle}
      >
        Delicious Foods!
      </motion.h2>
    </div>
  );
};

export default FoodAnimation;
