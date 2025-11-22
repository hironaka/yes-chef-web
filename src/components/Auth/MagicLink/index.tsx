"use client";
import { useState } from "react";
import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";
import toast from "react-hot-toast";
import { validateEmail } from "../../../utils/validateEmail";
import Loader from "@/components/Common/Loader";

const MagicLink = () => {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Please enter your email address.");
    }

    setLoader(true);
    if (!validateEmail(email)) {
      setLoader(false);
      return toast.error("Please enter a valid email address.");
    } else {
      try {
        const actionCodeSettings = {
          // URL you want to redirect back to. The domain (www.example.com) for this
          // URL must be in the authorized domains list in the Firebase Console.
          url: window.location.origin + '/finishSignUp?cartId=1234',
          // This must be true.
          handleCodeInApp: true,
        };
        await sendSignInLinkToEmail(auth, email, actionCodeSettings);
        window.localStorage.setItem('emailForSignIn', email);
        toast.success("Magic link sent to your email!");
        setEmail("");
        setLoader(false);
      } catch (error: any) {
        console.error("Error sending magic link:", error);
        toast.error(error.message || "Unable to send magic link!");
        setLoader(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-[22px]">
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
          className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary"
        />
      </div>
      <div className="mb-9">
        <button
          type="submit"
          className="flex w-full cursor-pointer items-center justify-center rounded-md border border-primary bg-[#102C46] px-5 py-3 text-base text-white transition duration-300 ease-in-out hover:bg-[#102C46]"
        >
          Send Magic Link 
        </button>
      </div>
    </form>
  );
};

export default MagicLink;
