import { useVirtualizer } from '@tanstack/react-virtual';
import { useEffect } from 'react';

type UseInfiniteVirtualizerOptions = {
  itemCount: number;
  columnCount?: number;
  estimateRowSize?: number;
  overscan?: number;
  gap?: number;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  fetchNextPage: () => void;
  getScrollElement: () => Element | null;
};

export const useInfiniteVirtualizer = ({
  itemCount,
  columnCount = 1,
  estimateRowSize = 260,
  overscan = 3,
  gap = 0,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  getScrollElement,
}: UseInfiniteVirtualizerOptions) => {
  const rowCount = Math.ceil((itemCount + (hasNextPage ? 1 : 0)) / columnCount);

  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement,
    estimateSize: () => estimateRowSize,
    overscan,
    gap,
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
    rowVirtualizer,
    rowCount,
  };
};
