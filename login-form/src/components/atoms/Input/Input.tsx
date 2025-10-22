import React, { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
  return <input {...props} className={`${styles.input} ${className || ''}`} />;
};

export default Input;
