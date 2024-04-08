import { FC, InputHTMLAttributes } from 'react';
import classes from './NeonInput.module.css';

const NeonInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...inputProps
}) => {
  return (
    <input className={[classes.input, className].join(' ')} {...inputProps} />
  );
};

export default NeonInput;
