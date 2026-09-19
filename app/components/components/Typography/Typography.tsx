import classNames from 'classnames';
import type { TypographyProps } from '~/components/components/Typography/Typography.interface';
import { Colors } from '~/constants/colors';
import { TypographyElements, TypographyTypes } from '~/constants/typography';
import classes from './Typography.module.scss';

const Typography = ({
  as = TypographyElements.P,
  type = TypographyTypes.BODY,
  color,
  align,
  italic,
  uppercase,
  className,
  style,
  children,
  ...props
}: TypographyProps) => {
  const Element = as;

  return (
    <Element
      className={classNames(
        classes.container,
        classes[type],
        { [classes.uppercase]: uppercase },
        className,
      )}
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

export default Typography;
