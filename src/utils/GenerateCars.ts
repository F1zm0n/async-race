import RandomColor from './RandomColor';
import RandomCar from './RandomCar';

export default <T>(carLimit: number, callback: T) => {
  for (let i = 0; i <= carLimit; i += 1) {
    if (typeof callback === 'function')
      callback({ color: RandomColor(), name: RandomCar() });
  }
};
