import React, { useCallback, useEffect, useState } from 'react';

export default function useResize(myRef: React.Ref<HTMLDivElement>) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleResize = useCallback(() => {
    // @ts-ignore
    setWidth(myRef?.current?.offsetWidth);
    // @ts-ignore
    setHeight(myRef?.current?.offsetHeight);
  }, [myRef]);

  useEffect(() => {
    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, [myRef, handleResize]);

  return { width, height };
}
