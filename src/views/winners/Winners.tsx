import { FC, useState } from 'react';
import WinnerList from '../../components/WinnerList/WinnerList';
import SelectSort, {
  SortOptions,
} from '../../components/UI/SelectSort/SelectSort';
import MyPagination from '../../components/MyPagination/MyPagination';
import { PAGINATION_LIMIT } from '../../models/types/config';
import WinnersApi from '../../api/WinnersApi';
import { OrderParams, SortParams } from '../../models/api/Winners';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { WinnersSlice } from '../../store/reducers/WinnersSlice';

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
  const sortOptions: SortOptions[] = [
    { name: 'id', value: 'id' },
    { name: 'wins', value: 'wins' },
    { name: 'time', value: 'time' },
  ];
  // functions
  const dispatchPage = (page: number) => {
    dispatch(setPage(page));
  };
  return (
    <div>
      <SelectSort
        options={sortOptions}
        defaultValue="choose sort"
        value={sort}
        onChange={setSort}
      />
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
