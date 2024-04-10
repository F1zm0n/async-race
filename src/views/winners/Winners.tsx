import { FC } from 'react';
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
import { DataSlice } from '../../store/reducers/DataSlice';
import classes from './Winners.module.css';

const Winners: FC = () => {
  // rtk
  const dataState = useAppSelector((state) => state.DataReducer);
  const winnersState = useAppSelector((state) => state.WinnersReducer);
  const dispatch = useAppDispatch();
  const { setPage } = WinnersSlice.actions;
  const { setSelectedOrder, setSelectedSort } = DataSlice.actions;
  // states
  // queries
  const { data } = WinnersApi.useGetAllCarsQuery({
    _limit: 10,
    _sort: dataState.selectedSort as SortParams | undefined,
    _order: dataState.selectedOrder as OrderParams | undefined,
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
          value={dataState.selectedSort as string}
          onChange={(sort: string) =>
            dispatch(setSelectedSort(sort as SortParams))
          }
        />
        <SelectSort
          options={orderOptions}
          defaultValue="choose sort"
          value={dataState.selectedOrder}
          onChange={(order: string) =>
            dispatch(setSelectedOrder(order as OrderParams))
          }
        />
      </div>
      <WinnerList data={data?.apiResponse} />
      <div className={classes.footer}>
        <MyPagination
          page={winnersState.page}
          setPage={dispatchPage}
          maxPage={Math.ceil((data?.totalCount as number) / PAGINATION_LIMIT)}
        />
      </div>
    </div>
  );
};

export default Winners;
