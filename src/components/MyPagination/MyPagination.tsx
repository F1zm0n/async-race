import { FC } from 'react';
import classes from './MyPagination.module.css';
import NeonButton from '../UI/NeonButton/NeonButton';

interface MyPaginationProps {
  maxPage: number;
  page: number;
  setPage: (page: number) => void;
}

const MyPagination: FC<MyPaginationProps> = ({ maxPage, page, setPage }) => {
  const prevPage = () => {
    if (page !== 1) setPage(page - 1);
  };
  const nextPage = () => {
    if (page < maxPage) setPage(page + 1);
  };
  return (
    <div className={classes.pagination}>
      <NeonButton className={classes.switchPage} onClick={prevPage}>
        ❮
      </NeonButton>
      <div className={classes.pageNumber}>{page}</div>
      <NeonButton className={classes.switchPage} onClick={nextPage}>
        ❯
      </NeonButton>
    </div>
  );
};

export default MyPagination;
