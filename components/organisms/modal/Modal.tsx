import React from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { TUsers } from "types/users";

const ModalContainer = ({
  user,
  setUser,
  del,
}: {
  user: TUsers | null;
  del: (e: string) => void;
  setUser: (e: TUsers | null) => void;
}) => {
  const deleteUser = (id: string) => {
    setUser(null);
    del(id);
  };

  return (
    <Transition
      show={!!user}
      enter="duration-200 ease-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="duration-300 ease-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog
        onClose={() => setUser(null)}
        className="absolute z-50 transition "
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white drop-shadow-2xl p-12 rounded-lg">
            <DialogTitle className="font-bold">
              Delete {user?.name} ?{" "}
            </DialogTitle>
            <p>
              Are you sure you want to delete ? All of your data will be
              permanently removed.
            </p>
            <div className="flex justify-end gap-4">
              <button
                className="rounded bg-[#F26440] py-2 px-4 text-sm text-white data-[hover]:bg-[#F26440] data-[active]:bg-[#F26440] data-[disabled]:bg-gray-500"
                onClick={() => deleteUser(user?.id as string)}
              >
                Delete
              </button>
              <button
                className="rounded border py-2 px-4 text-sm text-whit [disabled]:bg-gray-500"
                onClick={() => setUser(null)}
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalContainer;
