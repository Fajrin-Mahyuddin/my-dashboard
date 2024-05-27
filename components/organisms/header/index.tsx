import React from "react";
import Image from "next/image";
import logo from "assets/images/new-logo.svg";

const MainHeader = () => {
  return (
    <header className="p-3 flex flex-row justify-between items-center">
      <div>
        <Image src={logo} alt="main-logo" className="w-14" />
      </div>
      <div className="flex gap-4">
        <a href="#">user</a>
        <a href="#">notif</a>
      </div>
    </header>
  );
};

export default MainHeader;
