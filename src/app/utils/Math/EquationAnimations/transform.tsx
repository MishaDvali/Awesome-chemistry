"use client";
import styles from "./styles.scss"
import React, { useState } from 'react';


const AnimatedEquation: React.FC<{equation: string}> = (props) => {
	const [isAnimating, setIsAnimating] = useState(false);
  const [showAddition, setShowAddition] = useState(false);
  const [hideRemovable, setHideRemovable] = useState(false);

  const handleAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setHideRemovable(true);

    setTimeout(() => {
      setShowAddition(true);
    }, 500); // Match CSS transition duration
  };

  return (
    <div className={styles.equation} onClick={handleAnimation}>
      <span style={styles.before}>x</span>
			{!hideRemovable && <span
        id="removable"
        className={`${styles.removable} ${hideRemovable ? styles.hidden : ""}`}
      >
        {" "}
        * 2
      </span>}
      <span className={styles.after}> = 4</span>
      {showAddition && (
        <span id="addition" className={`${styles.addition} ${styles.visible}`}>
          {" "}
          / 2
        </span>
      )}
    </div>
  );
}
export default AnimatedEquation;
