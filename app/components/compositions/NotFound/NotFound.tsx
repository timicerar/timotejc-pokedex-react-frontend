import { faHome } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useMemo } from 'react';
import { useNavigate } from 'react-router';
import Button from '~/components/components/Button/Button';
import Logo from '~/components/components/Logo/Logo';
import Typography from '~/components/components/Typography/Typography';
import type { NotFoundProps } from '~/components/compositions/NotFound/NotFound.interface';
import { ButtonVariants } from '~/constants/button';
import { getNotFoundData } from '~/utils/notFoundUtils';
import classes from './NotFound.module.scss';

const NotFound = ({ type }: NotFoundProps) => {
  const navigate = useNavigate();

  const { showLogo, code, title, description, button } = useMemo(
    () => getNotFoundData(type),
    [type],
  );

  return (
    <div className={classNames(classes.notFound, classes[type])}>
      {showLogo && <Logo className={classes.logo} />}
      {code && (
        <Typography type="display-4xl" className={classes.code}>
          {code}
        </Typography>
      )}
      <div className={classes.wrapper}>
        <Typography as="h1" type="display-base" uppercase>
          {title}
        </Typography>
        <Typography type="body-sm" color="muted-foreground">
          {description}
        </Typography>
      </div>
      {button && (
        <Button
          variant={ButtonVariants.PRIMARY}
          className={classes.button}
          leadingIcon={<FontAwesomeIcon icon={faHome} />}
          onClick={() => navigate(button?.to)}
        >
          {button.label}
        </Button>
      )}
    </div>
  );
};

export default NotFound;
