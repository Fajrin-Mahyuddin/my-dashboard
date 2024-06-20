import { useCallback, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
  FirestoreError,
} from "firebase/firestore";
import { db } from "connections/firebase";
import { TUsers } from "types/users";
import { useToast } from "states/zustand/useToast";

export const useFirebase = () => {
  const [isLoading, setLoading] = useState(true);
  const [lists, setLists] = useState<TUsers[]>([]);
  const [errors, setErrors] = useState<FirestoreError | Error | unknown>();
  const { setShow } = useToast();

  const get = useCallback(async () => {
    onSnapshot(
      collection(db, "userss"),
      (snapshot) => {
        const result = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setLists(result as TUsers[]);
        setLoading(false);
      },
      (error) => {
        console.log("error", error);
        setErrors(error);
        setShow({
          msg: "Fetch error!",
          show: true,
          status: "error",
        });
        setLoading(false);
      },
    );
  }, [setShow]);

  useEffect(() => {
    get();
  }, [get]);

  return {
    isLoading,
    lists,
    errors,
  };
};

export const useFirebaseAction = () => {
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FirestoreError | Error | unknown>();
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
      setErrors(error);
      console.log("firebase add error", error);
      setShow({
        msg: `Something wrong! ${error}`,
        show: true,
        status: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const delItem = async (id: string) => {
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
    errors,
    add,
  };
};
