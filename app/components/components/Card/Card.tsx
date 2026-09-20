import classNames from 'classnames';
import type { ElementType } from 'react';
import { forwardRef } from 'react';
import type { CardProps } from '~/components/components/Card/Card.interface';
import { CardPaddings } from '~/constants/card';
import classes from './Card.module.scss';

const Card = forwardRef<HTMLElement, CardProps>(
  (
    {
      padding = CardPaddings.DEFAULT,
      fullWidth,
      noShadow,
      active,
      onClick,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const interactive = Boolean(onClick);
    const Element: ElementType = interactive ? 'button' : 'div';

    return (
      <Element
        ref={ref as React.Ref<HTMLButtonElement & HTMLDivElement>}
        type={interactive ? 'button' : undefined}
        onClick={onClick}
        className={classNames(
          classes.card,
          classes[padding],
          {
            [classes.interactive]: interactive,
            [classes.fullWidth]: fullWidth,
            [classes.noShadow]: noShadow,
            [classes.active]: active,
          },
          className,
        )}
        {...props}
      >
        {children}
      </Element>
    );
  },
);

Card.displayName = 'Card';

export default Card;
