import Modal from '~/components/components/Modal/Modal';
import ModalHeader from '~/components/components/Modal/ModalHeader/ModalHeader';
import PokemonDetailsModalContent from '~/components/compositions/Modals/PokemonDetailsModal/PokemonDetailsModalContent/PokemonDetailsModalContent';
import NotFound from '~/components/compositions/NotFound/NotFound';
import { ModalTypes } from '~/constants/modal-provider';
import { NotFoundTypes } from '~/constants/not-found';
import { closeModal, useModalData } from '~/store/modals';

const PokemonDetailsModal = () => {
  return (
    <Modal type={ModalTypes.POKEMON_DETAILS}>
      <PokemonDetailsModalContentGate />
    </Modal>
  );
};

/**
 * Kept separate from PokemonDetailsModal so the dialog shell doesn't
 * re-render when this content does, and so its data is only read once the
 * modal is actually open.
 */
const PokemonDetailsModalContentGate = () => {
  const modalData = useModalData(ModalTypes.POKEMON_DETAILS);
  const name = modalData?.data?.name;

  if (!name) {
    return (
      <>
        <ModalHeader onClose={() => closeModal(ModalTypes.POKEMON_DETAILS)} />
        <NotFound type={NotFoundTypes.POKEMON_DETAILS_MODAL} />
      </>
    );
  }

  return <PokemonDetailsModalContent name={name} />;
};

export default PokemonDetailsModal;
