import classNames from 'classnames';
import type { LogoProps } from '~/components/components/Logo/Logo.interface';
import classes from '~/components/components/Logo/Logo.module.scss';

const alt = 'Pokédex';

const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <span className={classNames(classes.logo, className)} {...props}>
      <img
        src="/images/pokedex-logo-light.svg"
        alt={alt}
        className={`${classes.image} ${classes['image--light']}`}
      />
      <img
        src="/images/pokedex-logo-dark.svg"
        alt={alt}
        className={`${classes.image} ${classes['image--dark']}`}
      />
    </span>
  );
};

export default Logo;
