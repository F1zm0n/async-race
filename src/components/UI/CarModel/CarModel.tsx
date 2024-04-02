import classes from './CarModel.module.css';

const CarModel = () => {
  return (
    <svg className="car" viewBox="0 0 300 150">
      <path d="M0 0h300v150H0z" fill="#333" />
      <path className="windshield" d="M100 20h100v50H100z" fill="#ccc" />
      <circle
        className={[classes.wheel, classes.frontLeft].join(' ')}
        cx="65"
        cy="135"
        r="15"
        fill="#666"
      />
      <circle
        className={[classes.wheel, classes.frontRight].join(' ')}
        cx="235"
        cy="135"
        r="15"
        fill="#666"
      />
      <circle
        className={[classes.wheel, classes.rearLeft].join(' ')}
        cx="135"
        cy="135"
        r="15"
        fill="#666"
      />
      <circle
        className={[classes.wheel, classes.rearRight].join(' ')}
        cx="165"
        cy="135"
        r="15"
        fill="#666"
      />
    </svg>
  );
};

export default CarModel;
