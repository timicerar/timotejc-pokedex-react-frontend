import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

type UseLoadMoreSentinelParams = {
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  fetchNextPage: () => void;
};

export const useLoadMoreSentinel = ({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: UseLoadMoreSentinelParams) => {
  const { ref, inView } = useInView();
  const wasInViewRef = useRef(false);

  useEffect(() => {
    const justEnteredView = inView && !wasInViewRef.current;

    wasInViewRef.current = inView;

    if (justEnteredView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return ref;
};
