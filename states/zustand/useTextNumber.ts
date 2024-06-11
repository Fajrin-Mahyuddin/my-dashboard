import { create } from "zustand";

interface IZustandTextNumber {
  text: string;
  number: number;
  zustandUpdateText: (e: string) => void;
  zustandUpdateNumber: (e: number) => void;
}

export const useTextNumber = create<IZustandTextNumber>((set) => ({
  text: "",
  number: 0,
  zustandUpdateText(e) {
    set(() => ({ text: e }));
  },
  zustandUpdateNumber(e) {
    set((state) => ({ number: state.number + e }));
  },
}));
