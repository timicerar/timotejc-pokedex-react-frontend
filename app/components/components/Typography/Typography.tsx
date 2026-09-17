import classNames from 'classnames';
import type { TypographyProps } from '~/components/components/Typography/Typography.interface';
import classes from '~/components/components/Typography/Typography.module.scss';
import { Colors } from '~/constants/colors';
import { TypographyElements, TypographyTypes } from '~/constants/typography';

export const Typography = ({
  as = TypographyElements.P,
  type = TypographyTypes.BODY,
  color,
  align,
  italic,
  className,
  style,
  children,
  ...props
}: TypographyProps) => {
  const Element = as;

  return (
    <Element
      className={classNames(classes.container, classes[type], className)}
      {...props}
      style={{
        ...(color && { color: Colors[color] }),
        ...(align && { textAlign: align }),
        ...(italic && { fontStyle: 'italic' }),
        ...style,
      }}
    >
      {children}
    </Element>
  );
};
