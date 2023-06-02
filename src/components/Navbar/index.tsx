"use client";

import NavItem from "./NavItem";
import { useEffect } from "react";
import { useI18n } from "@/hooks";

export default () => {
  const i18n = useI18n();

  const changeColorOnScroll = () => {
    const navItems = document.querySelectorAll("nav a");

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
    <nav className="fixed w-full transition-all duration-200 flex justify-center uppercase font-medium">
      <NavItem title={i18n.nav.home} link="#" />
      <NavItem title={i18n.nav.about} link="#who-am-i" />
      <NavItem title={i18n.nav.projects} link="#projects" />
      <NavItem title={i18n.nav.posts} link="#posts" />
      <NavItem title={i18n.nav.contact} link="#contact" />
    </nav>
  );
};
