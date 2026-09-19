import Modal from '~/components/components/Modal/Modal';
import ModalHeader from '~/components/components/Modal/ModalHeader/ModalHeader';
import Typography from '~/components/components/Typography/Typography';
import { ModalTypes } from '~/constants/modal-provider';
import { closeModal, useModalData } from '~/store/modals';

const PokemonDetailsModal = () => {
  return (
    <Modal type={ModalTypes.POKEMON_DETAILS}>
      <PokemonDetailsModalContent />
    </Modal>
  );
};

/**
 * Kept separate from PokemonDetailsModal so the dialog shell doesn't
 * re-render when this content does, and so its data is only read once the
 * modal is actually open.
 */
const PokemonDetailsModalContent = () => {
  const modalData = useModalData(ModalTypes.POKEMON_DETAILS);
  const pokemon = modalData?.data;

  if (!pokemon) {
    return null;
  }

  return (
    <>
      <ModalHeader onClose={() => closeModal(ModalTypes.POKEMON_DETAILS)} />
      <Typography as="p">{pokemon.name ?? pokemon.id}</Typography>
    </>
  );
};

export default PokemonDetailsModal;
