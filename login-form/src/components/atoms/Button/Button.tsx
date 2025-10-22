import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, type = 'button', onClick }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
