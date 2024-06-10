import { useCallback, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "connections/firebase";
import { TUsers } from "types/users";
import { useToast } from "states/zustand/useToast";

export const useFirebase = () => {
  const [isLoading, setLoading] = useState(false);
  const [lists, setLists] = useState<TUsers[]>([]);
  const { setShow } = useToast();

  const add = async (user: TUsers) => {
    setLoading(true);
    try {
      await addDoc(collection(db, "users"), user);
      setShow({
        msg: "Success!",
        show: true,
        status: "success",
      });
    } catch (error) {
      console.log("something wrong!", error);
      setShow({
        msg: `Something wrong! ${error}`,
        show: true,
        status: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const get = useCallback(async () => {
    setLoading(true);
    onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        const result = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setLists(result as TUsers[]);
      },
      (error) => {
        console.log("error", error);
        setShow({
          msg: "Fetch error!",
          show: true,
          status: "error",
        });
      },
    );
    setLoading(false);
  }, [setShow]);

  const delItem = async (id: string, cb?: () => void) => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, "users", id));
      setShow({
        msg: "Success!",
        show: true,
        status: "success",
      });
    } catch (error) {
      console.log("deleting failed", error);
      setShow({
        msg: "Something wrong!",
        show: true,
        status: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    isLoading,
    delItem,
    lists,
    add,
    get,
  };
};
