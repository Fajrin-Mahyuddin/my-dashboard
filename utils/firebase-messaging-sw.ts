import { app } from "connections/firebase";
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";

// type ISelf = Window & typeof globalThis;

const messaging = getMessaging(app);
console.log("running");
onBackgroundMessage(messaging, (payload) => {
  console.log(" Received background message ", payload);
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/favicon.ico",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
