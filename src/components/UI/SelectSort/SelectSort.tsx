import { FC } from 'react';
import classes from './SelectSort.module.css';
import { SortOptions } from '../../../models/types/config';

interface SelectSortProps {
  options: SortOptions[];
  defaultValue: string;
  value: string;
  onChange: (value: string) => void;
}

const SelectSort: FC<SelectSortProps> = ({
  options,
  defaultValue,
  value,
  onChange,
}) => {
  return (
    <div className={classes.select__wrapper}>
      <select
        className={classes.select}
        value={value}
        onChange={(e) => onChange(e.target.value)}>
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectSort;
