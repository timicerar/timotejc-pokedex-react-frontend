import { useEffect, useState } from 'react';

const TOUCH_DEVICE_QUERY = '(pointer: coarse)';

const getIsTouchDevice = () =>
  typeof window !== 'undefined'
    ? window.matchMedia(TOUCH_DEVICE_QUERY).matches
    : false;

export const useIsTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(getIsTouchDevice);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(TOUCH_DEVICE_QUERY);

    setIsTouchDevice(mediaQueryList.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsTouchDevice(event.matches);
    };

    mediaQueryList.addEventListener('change', handleChange);

    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, []);

  return isTouchDevice;
};
