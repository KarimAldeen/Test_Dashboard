import {create} from 'zustand'

interface ModalState {
  isOpen: boolean;
  setIsOpen: (value:boolean) => void;
 
}


export const useModalState = create<ModalState>((set) => ({
  isOpen: false,
  setIsOpen: () =>
    set((state) => ({ isOpen: !state.isOpen })),

}));
