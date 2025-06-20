"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
import { useSession, signOut } from "next-auth/react"; // Import useSession and signOut
import Logo from "./Logo";
import Image from "next/image";
import Signin from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";


const Header = () => {
  const { data: session, status } = useSession(); // Get session status
  const pathUrl = usePathname();
  const isRecipePage = pathUrl === '/recipe';
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 20);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false);
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  }, [navbarOpen, setIsSignInOpen, setIsSignUpOpen, setNavbarOpen]); // Add dependencies for useCallback

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, isSignInOpen, isSignUpOpen, handleClickOutside]); // Add handleClickOutside to dependencies

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${sticky ? " shadow-lg bg-white dark:bg-gray-600 py-4" : "shadow-none py-8"
        }`}
    >
      <div className="lg:py-0 py-2">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4">
          <Logo />
          {/* Navigation removed */}
          <div className="flex items-center gap-4">
            {status === "loading" ? (
              <></>
            ) : status === "authenticated" ? (
              <>
                <span className="hidden lg:block text-gray-700 dark:text-gray-200 mr-2">
                  Hi, {session.user?.name || session.user?.email}
                </span>
                <button
                  onClick={() => signOut()}
                  className="hidden lg:block text-primary bg-primary/15 hover:text-white hover:bg-primary font-medium text-lg py-4 px-8 rounded-full"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                {/* Unauthenticated: Show Sign In / Sign Up (hidden on recipe page) */}
                {!isRecipePage && (
                  <Link
                    href="#"
                    className="hidden lg:block text-primary bg-primary/15 hover:text-white hover:bg-primary font-medium text-lg py-4 px-8 rounded-full"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent navigation
                      setIsSignInOpen(true);
                    }}
                  >
                    Sign In
                  </Link>
                )}
                {isSignInOpen && (
                  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div
                      ref={signInRef}
                      className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg px-8 pt-14 pb-8 text-center bg-white dark:bg-gray-600 bg-opacity-90 backdrop-blur-md"
                    >
                      <button
                        onClick={() => setIsSignInOpen(false)}
                        className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
                        aria-label="Close Sign In Modal"
                      >
                        <Icon
                          icon="tabler:currency-xrp"
                          className="text-black hover:text-primary text-24 inline-block me-2"
                        />
                      </button>
                      <Signin setIsSignInOpen={setIsSignInOpen} setIsSignUpOpen={setIsSignUpOpen} />
                    </div>
                  </div>
                )}
                {!isRecipePage && (
                  <Link
                    href="#"
                    className="hidden lg:block bg-primary text-white hover:bg-primary/15 hover:text-primary font-medium text-lg py-4 px-8 rounded-full "
                    onClick={(e) => {
                       e.preventDefault(); // Prevent navigation
                      setIsSignUpOpen(true);
                    }}
                  >
                    Sign Up
                  </Link>
                )}
                {isSignUpOpen && (
                  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div
                      ref={signUpRef}
                      className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-dark_grey bg-opacity-90 backdrop-blur-md px-8 pt-14 pb-8 text-center"
                    >
                      <button
                        onClick={() => setIsSignUpOpen(false)}
                        className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
                        aria-label="Close Sign Up Modal"
                      >
                        <Icon
                          icon="tabler:currency-xrp"
                          className="text-white hover:text-primary text-24 inline-block me-2"
                        />
                      </button>
                      <SignUp setIsSignInOpen={setIsSignInOpen} setIsSignUpOpen={setIsSignUpOpen} />
                    </div>
                  </div>
                )}
              </>
            )}
            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs ${navbarOpen ? "translate-x-0" : "translate-x-full"
            } z-50`}
        >
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-bold text-midnight_text dark:text-midnight_text">
              <Logo />
            </h2>

            {/*  */}
            <button
              onClick={() => setNavbarOpen(false)}
              className="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close menu Modal"
            ></button>
          </div>
          <nav className="flex flex-col items-start p-4">
            {/* Mobile navigation links removed */}
            <div className="mt-4 flex flex-col space-y-4 w-full">
              {status === "loading" ? (
                 <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg"></div> // Loading placeholder
              ) : status === "authenticated" ? (
                <>
                  <span className="text-gray-700 dark:text-gray-200 px-4 py-2">
                    Hi, {session.user?.name || session.user?.email}
                  </span>
                  <button
                    onClick={() => {
                      signOut();
                      setNavbarOpen(false); // Close menu on sign out
                    }}
                    className="bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  {/* Unauthenticated: Show Sign In / Sign Up (hidden on recipe page) */}
                  {!isRecipePage && (
                    <>
                      <Link
                        href="#"
                        className="bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent navigation
                          setIsSignInOpen(true);
                          setNavbarOpen(false);
                        }}
                      >
                        Sign In
                      </Link>
                      <Link
                        href="#"
                        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent navigation
                          setIsSignUpOpen(true);
                          setNavbarOpen(false);
                        }}
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
