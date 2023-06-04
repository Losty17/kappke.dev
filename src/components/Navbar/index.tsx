"use client";

import NavItem from "./NavItem";
import { useEffect } from "react";
import { useI18n } from "@/hooks";
import {
  Dropdown,
  DropdownItem,
  DropdownItems,
  DropdownTrigger,
} from "@/components";
import { useSession, signIn, signOut } from "next-auth/react";

const UserDropdown = () => {
  const { data: session } = useSession();

  return (
    <Dropdown id="userDropdown">
      <div className="px-4 py-3">
        <span className="block text-sm text-white normal-case">
          {session?.user?.name}
        </span>
      </div>
      <DropdownItems label="user-menu-button">
        <DropdownItem text="Dashboard" href="/dashboard" />
        <li>
          <DropdownTrigger
            id="doubleDropdownButton"
            toggle="doubleDropdown"
            placement="right-start"
          >
            Language
          </DropdownTrigger>
          <Dropdown id="doubleDropdown">
            <DropdownItems label="doubleDropdownButton">
              <DropdownItem text="Português" />
              <DropdownItem text="English" />
            </DropdownItems>
          </Dropdown>
        </li>
        <DropdownItem text="Sign Out" action={signOut} />
      </DropdownItems>
    </Dropdown>
  );
};

const UserProfile = () => {
  const { data: session } = useSession();

  if (!session) return <button onClick={() => signIn()}>Log In</button>;

  return (
    <div className="flex justify-end">
      <button
        id="userDropdownButton"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom"
        type="button"
        className="flex items-center justify-center w-10 h-10 mr-4 text-neutral-900 transition-all duration-200 rounded-full hover:bg-neutral-900 hover:text-neutral-100"
      >
        {session?.user?.image ? (
          <img
            className="w-full h-full rounded-full"
            src={session?.user?.image}
            alt="User"
          />
        ) : (
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <title>Person</title>
            <path d="M256 256c70.7 0 128-57.3 128-128S326.7 0 256 0 128 57.3 128 128s57.3 128 128 128zm0 32c-88.4 0-256 43.1-256 128v32h512v-32c0-84.9-167.6-128-256-128z" />
          </svg>
        )}
      </button>
      <UserDropdown />
    </div>
  );
};

export default () => {
  const i18n = useI18n();

  const changeColorOnScroll = () => {
    const navItems = document.querySelectorAll(".nav--item");

    if (window.scrollY <= 150) {
      document
        .querySelector("nav")
        ?.classList.remove("bg-neutral-900", "text-neutral-100", "shadow");

      navItems.forEach((item) => {
        item.classList.remove("hover:after:bg-neutral-100");
        item.classList.add("hover:after:bg-neutral-900");
      });
    } else {
      document
        .querySelector("nav")
        ?.classList.add("bg-neutral-900", "text-neutral-100", "shadow");

      navItems.forEach((item) => {
        item.classList.add("hover:after:bg-neutral-100");
        item.classList.remove("hover:after:bg-neutral-900");
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColorOnScroll);

    return () => window.removeEventListener("scroll", changeColorOnScroll);
  }, []);

  typeof window === "object" && changeColorOnScroll();

  return (
    <nav className="fixed flex w-full transition-all duration-200 place-items-center uppercase font-medium">
      <div className="w-10 h-10 ml-4" />
      <div className="flex flex-1 justify-center">
        <NavItem title={i18n.nav.home} link="#" />
        <NavItem title={i18n.nav.about} link="#who-am-i" />
        <NavItem title={i18n.nav.projects} link="#projects" />
        <NavItem title={i18n.nav.posts} link="#posts" />
        <NavItem title={i18n.nav.contact} link="#contact" />
      </div>
      <UserProfile />
    </nav>
  );
};
