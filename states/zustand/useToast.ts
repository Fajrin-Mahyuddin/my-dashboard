import { create } from "zustand";

type TObjectToast = {
  show: boolean;
  msg: string;
  status: "success" | "error";
};

interface IData extends TObjectToast {
  setShow: (e: TObjectToast) => void;
}

export const useToast = create<IData>((set) => ({
  show: false,
  status: "success",
  msg: "",
  setShow(e) {
    set(() => ({ show: e.show, status: e.status, msg: e.msg }));
    setTimeout(() => {
      set(() => ({ show: false }));
    }, 4000);
  },
}));
