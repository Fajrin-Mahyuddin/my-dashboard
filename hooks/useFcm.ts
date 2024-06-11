import { app } from "connections/firebase";
import { getMessaging, getToken } from "firebase/messaging";
import { useEffect } from "react";

export const useFcm = () => {
  useEffect(() => {
    const messaging = getMessaging(app);
    getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_FCM_KEY })
      .then((currToken) => {
        if (currToken) {
          console.log("current token", currToken);
        } else {
          console.log("Requesting permission...");
          Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
              console.log("Notification permission granted.");
            }
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
};
