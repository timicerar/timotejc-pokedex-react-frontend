import classNames from 'classnames';
import type { ElementType } from 'react';
import type { CardProps } from '~/components/components/Card/Card.interface';
import { CardPaddings } from '~/constants/card';
import classes from './Card.module.scss';

const Card = ({
  padding = CardPaddings.DEFAULT,
  fullWidth,
  noShadow,
  onClick,
  className,
  children,
  ...props
}: CardProps) => {
  const interactive = Boolean(onClick);
  const Element: ElementType = interactive ? 'button' : 'div';

  return (
    <Element
      type={interactive ? 'button' : undefined}
      onClick={onClick}
      className={classNames(
        classes.card,
        classes[padding],
        {
          [classes.interactive]: interactive,
          [classes.fullWidth]: fullWidth,
          [classes.noShadow]: noShadow,
        },
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Card;
