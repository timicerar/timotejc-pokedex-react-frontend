import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import Button from '~/components/components/Button/Button';
import styles from '~/components/components/ThemeToggle/ThemeToggle.module.scss';
import { ButtonSizes, ButtonVariants } from '~/constants/button';
import { useTheme } from '~/theme';

const ThemeToggle = () => {
  const { t } = useTranslation();
  const { toggleTheme } = useTheme();

  return (
    <Button
      variant={ButtonVariants.SECONDARY}
      size={ButtonSizes.DEFAULT}
      ariaLabel={t('shared.toggleTheme')}
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
    />
  );
};

export default ThemeToggle;
