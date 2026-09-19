import { useVirtualizer } from '@tanstack/react-virtual';
import { useEffect, useRef } from 'react';

type UseInfiniteVirtualizerOptions = {
  itemCount: number;
  columnCount?: number;
  estimateRowSize?: number;
  overscan?: number;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  fetchNextPage: () => void;
};

export const useInfiniteVirtualizer = ({
  itemCount,
  columnCount = 1,
  estimateRowSize = 260,
  overscan = 3,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: UseInfiniteVirtualizerOptions) => {
  const scrollElementRef = useRef<HTMLDivElement | null>(null);

  const rowCount = Math.ceil(itemCount / columnCount) + (hasNextPage ? 1 : 0);

  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => scrollElementRef.current,
    estimateSize: () => estimateRowSize,
    overscan,
  });

  const virtualRows = rowVirtualizer.getVirtualItems();

  useEffect(() => {
    const lastVirtualRow = virtualRows[virtualRows.length - 1];

    if (!lastVirtualRow) return;

    if (
      lastVirtualRow.index >= rowCount - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [virtualRows, rowCount, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return {
    scrollElementRef,
    rowVirtualizer,
    rowCount,
  };
};
