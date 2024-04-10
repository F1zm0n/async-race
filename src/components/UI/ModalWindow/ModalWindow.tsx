import { FC, HTMLAttributes, ReactNode } from 'react';
import classes from './ModalWindow.module.css';

interface ModalWindowProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  visible: boolean;
  setVisible: (value: boolean) => void;
}

const ModalWindow: FC<ModalWindowProps> = ({
  children,
  visible,
  setVisible,
  className,
}) => {
  const rootClasses = [classes.myModal];
  if (visible) {
    rootClasses.push(classes.active);
  }
  return (
    <div onClick={() => setVisible(false)} className={rootClasses.join(' ')}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={[classes.myModalContent, className].join(' ')}>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
