import { useMemo } from 'react';

export default (totalPages: number) => {
  return useMemo(() => {
    const pagesArray: number[] = [];
    for (let i = 0; i < totalPages; i += 1) {
      pagesArray.push(i + 1);
    }
    return pagesArray;
  }, [totalPages]);
};
