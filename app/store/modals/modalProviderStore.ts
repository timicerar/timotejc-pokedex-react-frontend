import { useStore } from 'zustand';
import { createStore } from 'zustand/vanilla';
import type { ModalData, ModalType } from '~/constants/modal-provider';

export type ModalProviderStoreState = {
  data: {
    [K in ModalType]?: Extract<ModalData, { type: K }>;
  };
  setModalData: (data: ModalData) => void;
};

export const modalProviderStore = createStore<ModalProviderStoreState>()(
  (set) => ({
    data: {},
    setModalData: (data) => {
      set((state) => ({ data: { ...state.data, [data.type]: data } }));
    },
  }),
);

export function useModalProviderStore(): ModalProviderStoreState;
export function useModalProviderStore<T>(
  selector: (state: ModalProviderStoreState) => T,
): T;
export function useModalProviderStore<T>(
  selector?: (state: ModalProviderStoreState) => T,
) {
  return useStore(
    modalProviderStore,
    selector as (state: ModalProviderStoreState) => T,
  );
}
