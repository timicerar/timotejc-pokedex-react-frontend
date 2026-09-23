import { useCallback, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import ConfirmationModal from '~/components/compositions/Modals/ConfirmationModal/ConfirmationModal';
import PokemonDetailsModal from '~/components/compositions/Modals/PokemonDetailsModal/PokemonDetailsModal';
import { ModalTypes } from '~/constants/modal-provider';
import { closeModal } from '~/store/modals';

const ModalProvider = () => {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  const closeAllModals = useCallback(() => {
    for (const type of Object.values(ModalTypes)) {
      closeModal(type);
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    closeAllModals();
  }, [pathname, closeAllModals]);

  return (
    <>
      <PokemonDetailsModal />
      <ConfirmationModal />
    </>
  );
};

export default ModalProvider;
