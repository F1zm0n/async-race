import { MutableRefObject, useEffect, useState } from 'react';

const useOffsetWidth = (ref: MutableRefObject<HTMLDivElement | undefined>) => {
  const [offsetWidth, setOffsetWidth] = useState(0);

  // useEffect(() => {
  //   if (ref.current) {
  //     setOffsetWidth(ref.current.offsetWidth);
  //
  //     const resizeObserver = new ResizeObserver((entries) => {
  //       for (const entry of entries) {
  //         setOffsetWidth(entry.contentRect.width + 30);
  //       }
  //     });
  //
  //     resizeObserver.observe(ref.current);
  //     setOffsetWidth(ref.current.clientWidth + 30);
  //
  //     return () => {
  //       resizeObserver.disconnect();
  //     };
  //   }
  // }, []);
  //
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let i = 0; i < entries.length; i += 1) {
        const entry = entries[i];
        setOffsetWidth(entry.contentRect.width + 30);
      }
    });

    resizeObserver.observe(ref.current!);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return offsetWidth;
};

export default useOffsetWidth;
