import { FC, useState } from 'react';
import WinnerList from '../../components/WinnerList/WinnerList';
import SelectSort from '../../components/UI/SelectSort/SelectSort';
import MyPagination from '../../components/MyPagination/MyPagination';
import {
  orderOptions,
  PAGINATION_LIMIT,
  sortOptions,
} from '../../models/types/config';
import WinnersApi from '../../api/WinnersApi';
import { OrderParams, SortParams } from '../../models/api/Winners';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { WinnersSlice } from '../../store/reducers/WinnersSlice';
import classes from './Winners.module.css';

const Winners: FC = () => {
  // rtk
  const winnersState = useAppSelector((state) => state.WinnersReducer);
  const dispatch = useAppDispatch();
  const { setPage } = WinnersSlice.actions;
  // states
  const [sort, setSort] = useState('');
  const [order, setOrder] = useState('');
  // queries
  const { data } = WinnersApi.useGetAllCarsQuery({
    _limit: 7,
    _sort: sort as SortParams | undefined,
    _order: order as OrderParams | undefined,
    _page: winnersState.page,
  });

  // functions
  const dispatchPage = (page: number) => {
    dispatch(setPage(page));
  };
  return (
    <div>
      <div className={classes.selections}>
        <SelectSort
          options={sortOptions}
          defaultValue="choose sort"
          value={sort}
          onChange={setSort}
        />
        <SelectSort
          options={orderOptions}
          defaultValue="choose sort"
          value={order}
          onChange={setOrder}
        />
      </div>
      <WinnerList data={data?.apiResponse} />
      <MyPagination
        page={winnersState.page}
        setPage={dispatchPage}
        maxPage={Math.ceil((data?.totalCount as number) / PAGINATION_LIMIT)}
      />
    </div>
  );
};

export default Winners;
