import classNames from 'classnames';
import useEmblaCarousel from 'embla-carousel-react';
import { Children, useEffect } from 'react';
import type { CarouselProps } from '~/components/components/Carousel/Carousel.interface';
import classes from './Carousel.module.scss';

const Carousel = ({
  children,
  className,
  options,
  plugins,
  setApi,
}: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  useEffect(() => {
    setApi?.(emblaApi ?? null);
  }, [emblaApi, setApi]);

  return (
    <div className={classNames(classes.container, className)} ref={emblaRef}>
      <div className={classes.track}>
        {Children.map(children, (child, index) => (
          <div className={classes.slide} key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
