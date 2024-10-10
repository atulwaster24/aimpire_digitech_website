import Image from "next/image";
import React from "react";

const MobileMenuButton = ({menuOpen, setMenuOpen}) => {

  return (
    <div>
      <div>
        <Image
          src={menuOpen ? "/close_blue.svg" : "/menu_blue.svg"}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden"
          alt="logo"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
};

export default MobileMenuButton;
