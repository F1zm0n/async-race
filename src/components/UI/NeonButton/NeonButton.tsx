import { FC, HTMLAttributes, ReactNode } from 'react';
import classes from './NeonButton.module.css';

interface NeonButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const NeonButton: FC<NeonButtonProps> = ({
  children,
  className,
  ...buttonProps
}) => {
  return (
    <button
      className={[classes.button, className].join(' ')}
      type="button"
      {...buttonProps}>
      {children}
    </button>
  );
};

export default NeonButton;
