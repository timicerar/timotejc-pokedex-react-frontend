import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import type { ImageProps } from '~/components/components/Image/Image.interface';
import Skeleton from '~/components/components/Skeleton/Skeleton';
import classes from './Image.module.scss';

type Status = 'loading' | 'loaded' | 'error';

const Image = ({
  className,
  wrapperClassName,
  style,
  borderRadius,
  width,
  height,
  src,
  alt,
  loading = 'lazy',
  decoding = 'async',
  onLoad,
  onError,
  ...props
}: ImageProps) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    setStatus(imgRef.current?.complete ? 'loaded' : 'loading');
  }, [src]);

  return (
    <span
      className={classNames(classes.wrapper, wrapperClassName)}
      style={{ width, height, borderRadius }}
    >
      {status === 'loading' && (
        <Skeleton
          aria-hidden="true"
          className={classes.skeleton}
          borderRadius={borderRadius}
          minHeight="100%"
        />
      )}
      {status !== 'error' && (
        <img
          {...props}
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding={decoding}
          style={{ ...style, borderRadius }}
          className={classNames(classes.image, className, {
            [classes.hidden]: status === 'loading',
          })}
          onLoad={(event) => {
            setStatus('loaded');
            onLoad?.(event);
          }}
          onError={(event) => {
            setStatus('error');
            onError?.(event);
          }}
        />
      )}
    </span>
  );
};

export default Image;
