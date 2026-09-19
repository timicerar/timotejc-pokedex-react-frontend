import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import Button from '~/components/components/Button/Button';
import type { ThemeToggleProps } from '~/components/components/ThemeToggle/ThemeToggle.interface';
import { ButtonSizes, ButtonVariants } from '~/constants/button';
import { useMediaQuery } from '~/hooks/useMediaQuery';
import useTheme from '~/theme/hooks/useTheme';
import { Themes } from '~/theme/Theme.interface';
import styles from './ThemeToggle.module.scss';

const ThemeToggle = ({ showLabel = false }: ThemeToggleProps) => {
  const { t } = useTranslation();

  const { theme, toggleTheme } = useTheme();
  const isMobile = useMediaQuery('sm');

  const modeLabel = t(theme === Themes.LIGHT ? 'theme.light' : 'theme.dark');

  return (
    <Button
      variant={ButtonVariants.SECONDARY}
      size={isMobile ? ButtonSizes.SM : ButtonSizes.DEFAULT}
      ariaLabel={t('theme.toggle')}
      onClick={toggleTheme}
      leadingIcon={
        <>
          <FontAwesomeIcon
            icon={faSun}
            className={`${styles.icon} ${styles['icon--light']}`}
          />
          <FontAwesomeIcon
            icon={faMoon}
            className={`${styles.icon} ${styles['icon--dark']}`}
          />
        </>
      }
    >
      {showLabel && !isMobile && modeLabel}
    </Button>
  );
};

export default ThemeToggle;
