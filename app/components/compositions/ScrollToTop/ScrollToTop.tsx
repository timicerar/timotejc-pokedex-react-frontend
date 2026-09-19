import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '~/components/components/Button/Button';
import { ButtonVariants } from '~/constants/button';
import { ElementIds } from '~/constants/element-ids';
import { useMediaQuery } from '~/hooks/useMediaQuery';
import classes from './ScrollToTop.module.scss';

const SCROLL_THRESHOLD = 400;

const ScrollToTop = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('xs');

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollElement = document.getElementById(ElementIds.MAIN_CONTENT);

    if (!scrollElement) {
      return;
    }

    const handleScroll = () => {
      setIsVisible(scrollElement.scrollTop > SCROLL_THRESHOLD);
    };

    scrollElement.addEventListener('scroll', handleScroll);

    return () => scrollElement.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    document
      .getElementById(ElementIds.MAIN_CONTENT)
      ?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      type="button"
      variant={ButtonVariants.DESTRUCTIVE}
      ariaLabel={t('shared.scrollToTop')}
      leadingIcon={<FontAwesomeIcon icon={faArrowUp} aria-hidden="true" />}
      className={classNames(classes.scrollToTop, {
        [classes.visible]: isVisible,
      })}
      onClick={handleClick}
    >
      {!isMobile && t('shared.scrollToTop')}
    </Button>
  );
};

export default ScrollToTop;
