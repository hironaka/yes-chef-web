import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-darkmode">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 sm:grid-cols-5 lg:gap-20 md:gap-6 sm:gap-12 gap-6  pb-16 justify-center">
          <div className="col-start-2">
            <h4 className="text-black dark:text-white mb-9 font-semibold text-xl">Company</h4>
            <ul>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  About
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Careers
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Mobile
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Blog
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  How we work?
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-black dark:text-white mb-9 font-semibold text-xl">Information</h4>
            <ul>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-black/70 dark:text-white/70 dark:hover:text-primary hover:text-primary text-base"
                >
                  Help/FAQ
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-black/70 dark:text-white/70 dark:hover:text-primary hover:text-primary text-base"
                >
                  Press
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Affiliates
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Hotel owners
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-black dark:text-white mb-9 font-semibold text-xl">More</h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className="pb-4">
                  <Link
                    href={item.href}
                    className="text-black/70 dark:text-white/70 dark:hover:text-primary hover:text-primary text-base"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-grey/15 dark:border-white/15 py-10 flex justify-between items-center">
          <p className="text-sm text-black/70 dark:text-white/70">
            @2025 - Yes Chef
          </p>

          <div className="">
            <Link href="#" className="text-sm text-black/70 dark:text-white/70 px-5 border-r border-grey/15 dark:border-white/15 hover:text-primary dark:hover:text-primary">Privacy policy</Link>
            <Link href="#" className="text-sm text-black/70 dark:text-white/70 px-5 hover:text-primary dark:hover:text-primary">Terms & conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
