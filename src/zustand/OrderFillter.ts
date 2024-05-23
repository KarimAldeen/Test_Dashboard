import { create } from 'zustand';

interface ModalState {
  username: string | null;
  coupon: string | null;
  state: string | null;
  fromDate: Date | null;
  toDate: Date | null;
  totalFrom: number | null;
  totalTo: number | null;
  setUsername: (value: string | null) => void;
  setCoupon: (value: string | null) => void;
  setstate: (value: string | null) => void;
  setFromDate: (value: Date | null) => void;
  setToDate: (value: Date | null) => void;
  setTotalFrom: (value: number | null) => void;
  setTotalTo: (value: number | null) => void;
  reset: () => void;
}

export const useOrderFillterState = create<ModalState>((set) => {

  return {
    username: null,
    coupon: null,
    state: null,
    fromDate: null,
    toDate: null,
    totalFrom: null,
    totalTo: null,
    setUsername: (value) => set((state) => ({ ...state, username: value })),
    setCoupon: (value) => set((state) => ({ ...state, coupon: value })),
    setstate: (value) => set((state) => ({ ...state, state: value })),
    setFromDate: (value) => set((state) => ({ ...state, fromDate: value })),
    setToDate: (value) => set((state) => ({ ...state, toDate: value })),
    setTotalFrom: (value) => set((state) => ({ ...state, totalFrom: value })),
    setTotalTo: (value) => set((state) => ({ ...state, totalTo: value })),
    reset: () => {
      set({
        username: null,
        coupon: null,
        fromDate: null,
        toDate: null,
        totalFrom: null,
        totalTo: null,
        state:null
      });
    },
  };
});
