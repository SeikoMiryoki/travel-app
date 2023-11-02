"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Log In"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src={!toggle ? "/menu.svg" : "/close-black.svg"}
        alt="menu"
        width={32}
        height={32}
        className={`inline-block cursor-pointer z-[101] lg:hidden ${
          toggle ? "fixed top-5 right-6" : "inline-block"
        }`}
        onClick={() => setToggle(!toggle)}
      />

      <div
        className={`${
          toggle ? "flexCenter" : "hidden"
        } fixed top-0 left-0 w-screen h-screen bg-white z-[100] lg:hidden`}
      >
        <ul className="h-full gap-12 flexCenter flex-col">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-20 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
