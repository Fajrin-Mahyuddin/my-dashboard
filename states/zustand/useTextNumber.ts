import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IZustandTextNumber {
  text: string;
  number: number;
  zustandUpdateText: (e: string) => void;
  zustandUpdateNumber: (e: number) => void;
}

// const myMiddlewares = (e) => devtools(persist(e, { name: "updateTextNumber" }))

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
