import React, { useState } from 'react';
import styles from './Form.module.css';

import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import Button from '../../atoms/Button/Button';

const Form: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <Label text="Email" htmlFor="email" />
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <div className={styles.formGroup}>
        <Label text="Password" htmlFor="password" />
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>

      <Button text="Login" type="submit" />
    </form>
  );
};

export default Form;