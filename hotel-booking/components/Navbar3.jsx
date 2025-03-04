"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const getMobileOverlayClassNames = clsx(
    "fixed inset-0 z-40 bg-black lg:hidden",
    {
      block: isMobileMenuOpen,
      hidden: !isMobileMenuOpen,
    },
  );
  const NavbarWrapper = isMobile ? motion.div : "div";
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    getMobileOverlayClassNames,
    animateMobileMenu,
    animateDropdownMenu,
    animateDropdownMenuIcon,
    NavbarWrapper,
  };
};

export function Navbar3() {
  const useActive = useRelume();
  return (
    <section
      id="relume"
      className="grid h-auto w-full grid-cols-[1fr_max-content_1fr] items-center justify-between border-b border-border-primary bg-background-primary px-[5%] md:min-h-18"
    >
      <button
        className="flex size-12 flex-col justify-center lg:hidden"
        onClick={useActive.toggleMobileMenu}
      >
        <span className="my-[3px] h-0.5 w-6 bg-black lg:hidden" />
        <span className="my-[3px] h-0.5 w-6 bg-black lg:hidden" />
        <span className="my-[3px] h-0.5 w-6 bg-black lg:hidden" />
      </button>
      <AnimatePresence>
        <useActive.NavbarWrapper
          initial="closed"
          animate={useActive.animateMobileMenu}
          exit="closed"
          variants={{
            closed: {
              x: "-100%",
              opacity: 1,
              transition: { type: "spring", duration: 0.6, bounce: 0 },
              transitionEnd: {
                opacity: "var(--opacity-closed, 0%)",
                x: "var(--x-closed, -100%)",
              },
            },
            open: {
              x: 0,
              opacity: 1,
              transition: { type: "spring", duration: 0.4, bounce: 0 },
            },
          }}
          className="absolute left-0 top-0 z-50 flex h-dvh w-[90%] flex-col border-r border-border-primary bg-white px-[5%] pb-4 md:w-[80%] lg:visible lg:static lg:-ml-4 lg:flex lg:h-auto lg:w-auto lg:flex-row lg:border-none lg:px-0 lg:pb-0 lg:[--opacity-closed:100%] lg:[--x-closed:0%]"
        >
          <a href="#" className="mb-8 mt-10 flex flex-shrink-0 lg:hidden">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="Logo image"
            />
          </a>
          <div className="mt-6 lg:hidden">
            <Button title="Menu" size="sm" className="w-full">
              Menu
            </Button>
          </div>
        </useActive.NavbarWrapper>
        <motion.div
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.2 }}
          className={useActive.getMobileOverlayClassNames}
          onClick={useActive.toggleMobileMenu}
        />
      </AnimatePresence>
      <a href="#" className="flex min-h-16 flex-shrink-0 items-center">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
          alt="Logo image"
        />
      </a>
      <div className="flex min-h-16 items-center justify-end gap-x-4">
        <div>
          <Button title="Book" size="sm" className="px-4 py-1 md:px-6 md:py-2">
            Book
          </Button>
        </div>
      </div>
    </section>
  );
}
