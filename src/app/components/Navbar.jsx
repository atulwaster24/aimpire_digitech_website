import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleBtn";
import Image from "next/image";
import MobileMenuButton from "./MobileMenuButton";
import { useState } from "react";
import { Home, Contact, Services, Career, About } from "../misc/SvgIcons";


const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const NavLinks = [
    { title: "Home", url: "/#", icon: <Home /> },
    { title: "About", url: "/#about", icon: <About /> },
    { title: "Services", url: "/#services", icon: <Services /> },
    { title: "Career", url: "/#career", icon: <Career /> },
    { title: "Contact", url: "/#contact", icon: <Contact /> },
  ];

  return (
    <div className="relative flex container md:w-[90%] justify-center md:pt-6">
      <div className="hidden md:block w-full md:container">
        <DesktopView theme={theme} setTheme={setTheme} NavLinks={NavLinks} />
      </div>
      <div className="block md:hidden pt-2">
        <MobileView
          theme={theme}
          setTheme={setTheme}
          NavLinks={NavLinks}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </div>
    </div>
  );
};

export default Navbar;

const DesktopView = ({ theme, setTheme, NavLinks }) => {
  return (
    <div
      className={`flex justify-between items-start w-full md:container p-2 md:items-center md:p-5 md:border border-body-color backdrop-blur-[10px] md:rounded-3xl px-8`}
    >
      <Image
        src="/logo_3.png"
        alt="logo"
        className="pl-2 hidden md:flex"
        width={150}
        height={150}
      />
      <nav className="hidden md:flex gap-6 items-center">
        <ThemeToggleButton theme={theme} setTheme={setTheme} />
        <ul className="flex gap-6 hidden md:flex ">
          {NavLinks.map((nav) => (
            <Link
              href={nav.url}
              key={nav.url}
              className="dark:text-white dark:hover:text-ButterflyBlue hover:text-ButterflyBlue text-md font-semibold"
            >
              {nav.title}
            </Link>
          ))}
        </ul>
        <Image
          src="/logo.png"
          className="hidden md:flex"
          alt="logo"
          width={28}
          height={28}
        />
      </nav>
    </div>
  );
};

const MobileView = ({ menuOpen, setMenuOpen, NavLinks, theme, setTheme }) => {
  return (
    <div
      className={`relative z-[10] w-screen p-2 backdrop-blur-[10px] md:rounded-3xl px-8`}
    >
      <div className="w-full flex justify-between">
        <div>
          <Image
            src="/logo_2.png"
            alt="logo"
            className=""
            width={150}
            height={150}
          />
        </div>
        <div className={`flex gap-6 items-center`}>
          <ThemeToggleButton theme={theme} setTheme={setTheme} />
          <MobileMenuButton setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        </div>
      </div>
      <div
        className={`${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-700 ease-in-out border rounded-md mt-4`}
      >
        <ul className="flex p-4 flex-col ">
          {NavLinks.map((nav) => (
            <div
              key={nav.url}
              className="flex gap-2 items-center p-2 hover:bg-CosmosBlue hover:text-white rounded-md"
            >
              {nav.icon}
              <Link href={nav.url} className="text-md  font-medium">
                {nav.title}
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
