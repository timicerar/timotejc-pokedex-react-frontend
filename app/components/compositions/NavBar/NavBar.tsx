import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router';
import Logo from '~/components/components/Logo/Logo';
import ThemeToggle from '~/components/components/ThemeToggle/ThemeToggle';
import Typography from '~/components/components/Typography/Typography';
import classes from '~/components/compositions/NavBar/NavBar.module.scss';
import { Routes } from '~/constants/routes';

const NavBar = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const isHome = pathname === Routes.POKEDEX();

  return (
    <header className={classes.navbar}>
      <div className={classes.wrapper}>
        <Link to={Routes.POKEDEX()}>
          <Logo className={classes.logo} />
        </Link>
        {!isHome && (
          <Link to={Routes.POKEDEX()} className={classes.backLink}>
            <FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
            <Typography as="span" type="label" color="foreground" uppercase>
              {t('navBar.backToPokedex')}
            </Typography>
          </Link>
        )}
      </div>
      <div className={classes.actions}>
        <ThemeToggle showLabel />
      </div>
    </header>
  );
};

export default NavBar;
