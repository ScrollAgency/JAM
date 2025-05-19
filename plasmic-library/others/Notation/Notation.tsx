import React from 'react';
import styles from './Notation.module.css';

interface NotationProps {
  value: number;
  className?: string;
}

export const Notation: React.FC<NotationProps> = ({ value, className }) => {
  const level = Number(value) || 0;

  return (
    <div className={`${styles.rating} ${className || ''}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span 
          key={i} 
          className={i < level ? styles.starFilled : styles.starEmpty}
          style={{ width: '20px', height: '20px', display: 'inline-block' }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Notation; 