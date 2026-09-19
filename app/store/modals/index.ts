import type { ModalData, ModalType } from '~/constants/modal-provider';
import {
  modalProviderStore,
  useModalProviderStore,
} from '~/store/modals/modalProviderStore';
import { getModalId } from '~/utils/modalProviderUtils';

export const openModal = (data: ModalData) => {
  if (typeof window === 'undefined') {
    return;
  }

  const modal = document.getElementById(
    getModalId(data.type),
  ) as HTMLDialogElement | null;

  if (!modal) {
    return;
  }

  modalProviderStore.getState().setModalData(data);
  modal.showModal();
};

export const closeModal = (type: ModalType) => {
  if (typeof window === 'undefined') {
    return;
  }

  const modal = document.getElementById(
    getModalId(type),
  ) as HTMLDialogElement | null;

  modal?.close();
};

export const useModalData = <T extends ModalType>(type: T) =>
  useModalProviderStore((state) => state.data[type]);
