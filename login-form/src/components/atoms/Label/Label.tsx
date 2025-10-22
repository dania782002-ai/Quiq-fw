import React from 'react';
import styles from './Label.module.css';

interface LabelProps {
  text: string;
  htmlFor?: string;
}

const Label: React.FC<LabelProps> = ({ text, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {text}
    </label>
  );
};

export default Label;
