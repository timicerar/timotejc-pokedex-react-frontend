import { useTranslation } from 'react-i18next';
import Button from '~/components/components/Button/Button';
import Modal from '~/components/components/Modal/Modal';
import ModalHeader from '~/components/components/Modal/ModalHeader/ModalHeader';
import Typography from '~/components/components/Typography/Typography';
import { ButtonVariants } from '~/constants/button';
import { ModalTypes } from '~/constants/modal-provider';
import { closeModal, useModalData } from '~/store/modals';
import classes from './ConfirmationModal.module.scss';

const ConfirmationModal = () => {
  return (
    <Modal type={ModalTypes.CONFIRMATION} closeOnBackdropClick={false}>
      <ConfirmationModalContent />
    </Modal>
  );
};

/**
 * Kept separate from ConfirmationModal so the dialog shell doesn't
 * re-render when this content does, and so its data is only read once the
 * modal is actually open.
 */
const ConfirmationModalContent = () => {
  const { t } = useTranslation();
  const modalData = useModalData(ModalTypes.CONFIRMATION);
  const confirmation = modalData?.data;

  if (!confirmation) {
    return null;
  }

  const handleCancel = () => {
    closeModal(ModalTypes.CONFIRMATION);
    confirmation.onCancel?.();
  };

  const handleConfirm = () => {
    closeModal(ModalTypes.CONFIRMATION);
    confirmation.onConfirm();
  };

  return (
    <>
      <ModalHeader
        title={confirmation.title ?? t('modal.confirmationModal.title')}
        onClose={handleCancel}
        hideClose
      />
      <div className={classes.container}>
        <Typography as="p" color="muted-foreground">
          {confirmation.description ?? t('modal.confirmationModal.description')}
        </Typography>
        <div className={classes.actions}>
          <Button
            variant={ButtonVariants.SECONDARY}
            onClick={handleCancel}
            className={classes.button}
          >
            {confirmation.cancelLabel ?? t('modal.confirmationModal.cancel')}
          </Button>
          <Button
            variant={ButtonVariants.PRIMARY}
            onClick={handleConfirm}
            className={classes.button}
          >
            {confirmation.confirmLabel ?? t('modal.confirmationModal.confirm')}
          </Button>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
