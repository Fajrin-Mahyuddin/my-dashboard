import { useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "connections/firebase";
import { TUsers } from "types/users";

export const useFirebase = () => {
  const [isLoading, setLoading] = useState(false);
  const add = async (user: TUsers) => {
    setLoading(true);

    try {
      // await setDoc(doc(db, "mydashboard", "users"), {
      // 	name: "fajrin",
      // 	phone: "12345",
      // 	gender: "male",
      // 	address: "Jl. Yonggang",
      // 	desc: "nothing"
      // })
      await addDoc(collection(db, "users"), user);
    } catch (error) {
      console.log("something wrong!", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    isLoading,
    add,
  };
};
