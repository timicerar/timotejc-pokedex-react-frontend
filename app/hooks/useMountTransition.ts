import { useEffect, useState } from 'react';

export const useMountTransition = (isOpen: boolean, unmountDelay: number) => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isOpen && !hasTransitionedIn) {
      setHasTransitionedIn(true);
    } else if (!isOpen && hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(false), unmountDelay);
    }

    return () => clearTimeout(timeoutId);
  }, [isOpen, unmountDelay, hasTransitionedIn]);

  return hasTransitionedIn;
};
