import { useEffect, useState } from 'react';
import type { Breakpoint, MediaQueryType } from '~/constants/breakpoints';
import { Breakpoints, MediaQueryTypes } from '~/constants/breakpoints';

const buildMediaQuery = (breakpoint: Breakpoint, type: MediaQueryType) => {
  const width =
    type === MediaQueryTypes.MAX
      ? Breakpoints[breakpoint] - 0.5
      : Breakpoints[breakpoint];

  return `only screen and (${type}-width: ${width}px)`;
};

const getMatches = (query: string) =>
  typeof window !== 'undefined' ? window.matchMedia(query).matches : false;

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
