import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import Button from '~/components/components/Button/Button';
import type { ModalHeaderProps } from '~/components/components/Modal/ModalHeader/ModalHeader.interface';
import classes from '~/components/components/Modal/ModalHeader/ModalHeader.module.scss';
import Typography from '~/components/components/Typography/Typography';
import { ButtonSizes, ButtonVariants } from '~/constants/button';

const ModalHeader = ({
  title,
  onClose,
  closeLabel: closeLabelProp,
  hideClose = false,
  className,
  ...props
}: ModalHeaderProps) => {
  const { t } = useTranslation();
  const closeLabel = closeLabelProp ?? t('modal.close');

  if (!title) {
    if (hideClose) {
      return null;
    }

    return (
      <Button
        variant={ButtonVariants.SECONDARY}
        size={ButtonSizes.SM}
        ariaLabel={closeLabel}
        onClick={onClose}
        leadingIcon={<FontAwesomeIcon icon={faXmark} />}
        className={classNames(classes.floating, className)}
        {...props}
      />
    );
  }

  return (
    <div className={classNames(classes.header, className)} {...props}>
      <Typography as="h2" type="card-title" className={classes.title}>
        {title}
      </Typography>
      {!hideClose && (
        <Button
          variant={ButtonVariants.SECONDARY}
          size={ButtonSizes.SM}
          ariaLabel={closeLabel}
          onClick={onClose}
          leadingIcon={<FontAwesomeIcon icon={faXmark} />}
        />
      )}
    </div>
  );
};

export default ModalHeader;
