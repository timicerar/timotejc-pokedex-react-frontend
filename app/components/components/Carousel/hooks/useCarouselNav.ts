import type { EmblaCarouselType } from 'embla-carousel';
import { useCallback, useEffect, useState } from 'react';

export const useCarouselNav = () => {
  const [api, setApi] = useState<EmblaCarouselType | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api]);
  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onInit = () => setScrollSnaps(api.scrollSnapList());
    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    onInit();
    onSelect();
    api.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);

    return () => {
      api.off('reInit', onInit).off('reInit', onSelect).off('select', onSelect);
    };
  }, [api]);

  return {
    setApi,
    selectedIndex,
    scrollSnaps,
    canScrollPrev,
    canScrollNext,
    scrollTo,
    scrollPrev,
    scrollNext,
  };
};
