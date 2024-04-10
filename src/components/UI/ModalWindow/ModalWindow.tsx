import { FC, ReactNode } from 'react';
import classes from './ModalWindow.module.css';

interface ModalWindowProps {
  children: ReactNode;
  visible: boolean;
  setVisible: (value: boolean) => void;
}

const ModalWindow: FC<ModalWindowProps> = ({
  children,
  visible,
  setVisible,
}) => {
  const rootClasses = [classes.myModal];
  if (visible) {
    rootClasses.push(classes.active);
  }
  return (
    <div onClick={() => setVisible(false)} className={rootClasses.join(' ')}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={classes.myModalContent}>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
