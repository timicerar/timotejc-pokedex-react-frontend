import classNames from 'classnames';
import type { ElementType } from 'react';
import type { CardProps } from '~/components/components/Card/Card.interface';
import classes from '~/components/components/Card/Card.module.scss';
import { CardPaddings } from '~/constants/card';

const Card = ({
  padding = CardPaddings.DEFAULT,
  fullWidth,
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
        { [classes.interactive]: interactive, [classes.fullWidth]: fullWidth },
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Card;
