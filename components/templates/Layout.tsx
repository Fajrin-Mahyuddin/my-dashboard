"use client";
import React, { useCallback, useEffect } from "react";
import Image from "next/image";
// import bg from 'assets/images/bg.jpg';
import Breadcrumb from "components/atoms/breadcrumbs";
import MainHeader from "components/organisms/header";
import Sidebar from "components/organisms/sidebar";
import Footers from "components/atoms/footers";
import useBreadcrumb from "hooks/useBreadcrumb";
import PrelineScript from "components/templates/PrelineScript";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { app } from "connections/firebase";

interface IBaseLayout {
  children: JSX.Element;
}

const BaseLayout = ({ children }: IBaseLayout) => {
  let breadcrumbsValue = useBreadcrumb();
  const requestNotificationPermission = useCallback(() => {
    let messaging = getMessaging(app);
    Notification.requestPermission()
      .then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted.", permission);
          getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_FCM_KEY })
            .then((curr) => {
              if (curr) {
                console.log("current token", curr);
              } else {
                console.log("no token availabel");
              }
            })
            .catch((error) => console.log("error get token", error));
        }
      })
      .catch((error) => {
        console.log("error request permission", error);
      });

    onMessage(messaging, (payload) => {
      console.log("onMessage", payload);
    });
  }, []);

  useEffect(() => {
    requestNotificationPermission();
  }, [requestNotificationPermission]);

  return (
    <main className="flex flex-row min-h-screen bg-[#f8f7f1]">
      <div className="w-[80rem] max-w-[300px] bg-white shadow-[rgba(0,0,0,0.16)_0px_1px_4px]">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <MainHeader />
        <div className="flex flex-col h-full w-full gap-4 px-6">
          <Breadcrumb data={breadcrumbsValue} />
          <div className="bg-[#fff] h-full p-4 rounded-[10px]">{children}</div>
        </div>
        <Footers />
      </div>
      <PrelineScript />
    </main>
  );
};

export default BaseLayout;
