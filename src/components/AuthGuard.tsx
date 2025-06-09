"use client";
import React, { useState, useRef } from "react";
import { useSession } from "next-auth/react";
import Signin from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";
import { Icon } from "@iconify/react/dist/iconify.js";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { data: session, status } = useSession();
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);

  // Show loading state while session is being fetched
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If user is authenticated, show the protected content
  if (status === "authenticated") {
    return <>{children}</>;
  }

  // If user is not authenticated, show sign-in requirement
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Authentication Required
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          You need to sign in to access the recipe assistant.
        </p>
        <div className="space-y-4">
          <button
            onClick={() => setIsSignInOpen(true)}
            className="w-full text-primary bg-primary/15 hover:text-white hover:bg-primary font-medium text-lg py-4 px-8 rounded-full transition-colors"
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignUpOpen(true)}
            className="w-full bg-primary text-white hover:bg-primary/90 font-medium text-lg py-4 px-8 rounded-full transition-colors"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Sign In Modal */}
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

      {/* Sign Up Modal */}
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
    </div>
  );
};

export default AuthGuard;