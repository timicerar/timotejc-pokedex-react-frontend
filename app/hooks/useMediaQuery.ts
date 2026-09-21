import { useEffect, useState } from 'react';
import type { Breakpoint, MediaQueryType } from '~/constants/breakpoints';
import { MediaQueryTypes } from '~/constants/breakpoints';
import { buildMediaQuery, getMatches } from '~/utils/mediaQueryUtils';

export const useMediaQuery = (
  breakpoint: Breakpoint,
  type: MediaQueryType = MediaQueryTypes.MAX,
) => {
  const query = buildMediaQuery(breakpoint, type);
  const [matches, setMatches] = useState(() => getMatches(query));

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    setMatches(mediaQueryList.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQueryList.addEventListener('change', handleChange);

    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
};
