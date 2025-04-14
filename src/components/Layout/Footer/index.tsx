import React, { FC } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-darkmode">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="border-t border-grey/15 dark:border-white/15 py-10 flex justify-between items-center">
          <p className="text-sm text-black/70 dark:text-white/70">
            @2025 - Yes Chef
          </p>

          <div className="">
            <Link href="/contact-us" className="text-sm text-black/70 dark:text-white/70 px-5 hover:text-primary dark:hover:text-primary">Contact us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
