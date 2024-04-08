import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { carsSlice } from '../../store/reducers/CarsSlice';
import classes from './MyPagination.module.css';
import NeonButton from '../UI/NeonButton/NeonButton';

interface MyPaginationProps {
  maxPage: number;
}

const MyPagination: FC<MyPaginationProps> = ({ maxPage }) => {
  const dispatch = useAppDispatch();
  const carsState = useAppSelector((state) => state.CarsReducer);
  const { setPage } = carsSlice.actions;
  const prevPage = () => {
    if (carsState.page !== 1) dispatch(setPage(carsState.page - 1));
  };
  const nextPage = () => {
    if (carsState.page < maxPage) dispatch(setPage(carsState.page + 1));
  };
  return (
    <div className={classes.pagination}>
      <NeonButton className={classes.switchPage} onClick={prevPage}>
        ❮
      </NeonButton>
      <div className={classes.pageNumber}>{carsState.page}</div>
      <NeonButton className={classes.switchPage} onClick={nextPage}>
        ❯
      </NeonButton>
    </div>
  );
};

export default MyPagination;
