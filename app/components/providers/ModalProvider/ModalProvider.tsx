import ConfirmationModal from '~/components/compositions/Modals/ConfirmationModal/ConfirmationModal';
import PokemonDetailsModal from '~/components/compositions/Modals/PokemonDetailsModal/PokemonDetailsModal';

const ModalProvider = () => {
  return (
    <>
      <PokemonDetailsModal />
      <ConfirmationModal />
    </>
  );
};

export default ModalProvider;
