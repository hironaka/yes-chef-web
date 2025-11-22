import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialSignUp from "../SocialSignUp";
import Logo from "@/components/Layout/Header/Logo";
import { useState, Dispatch, SetStateAction } from "react";
import Loader from "@/components/Common/Loader";

interface SignUpProps {
  setIsSignInOpen?: Dispatch<SetStateAction<boolean>>;
  setIsSignUpOpen?: Dispatch<SetStateAction<boolean>>;
}

const SignUp: React.FC<SignUpProps> = ({ setIsSignInOpen, setIsSignUpOpen }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    const data = new FormData(e.currentTarget);
    const value = Object.fromEntries(data.entries());
    const { email, password, name } = value as { email: string; password: string; name: string };

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      toast.success("Successfully registered!");
      setLoading(false);
      router.push("/");
      if (setIsSignInOpen && setIsSignUpOpen) {
        setIsSignInOpen(false); // Don't open sign in, just close sign up as they are already logged in
        setIsSignUpOpen(false);
      }
    } catch (err: any) {
      console.error("Registration Error:", err);
      toast.error(err.message || "An unexpected error occurred.");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="dark mb-10 text-center mx-auto inline-block">
        <Logo />
      </div>

      <SocialSignUp />

      <span className="z-1 relative my-8 block text-center before:content-[''] before:absolute before:h-px before:w-40% before:bg-dark_border before:bg-opacity-60 before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-40% after:bg-dark_border after:bg-opacity-60 after:top-3 after:right-0">
        <span className="text-body-secondary relative z-10 inline-block px-3 text-base text-white">
          OR
        </span>
      </span>

      <form onSubmit={handleSubmit}>
        <div className="mb-[22px]">
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            className="w-full rounded-md border border-dark_border border-opacity-60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-9">
          <button
            type="submit"
            className="flex w-full items-center text-18 font-medium justify-center rounded-md bg-primary px-5 py-3 text-white transition duration-300 ease-in-out hover:bg-transparent hover:text-primary border-primary border "
          >
            Sign Up {loading && <Loader />}
          </button>
        </div>
      </form>

      <p className="text-body-secondary mb-4 text-white text-base">
        By creating an account you are agree with our{" "}
        <Link href="https://www.privacypolicies.com/live/ad275672-77bf-440f-93ac-d85d4711e860" className="text-primary hover:underline">
          Privacy
        </Link>{" "}
        and{" "}
        <Link href="https://www.privacypolicies.com/live/393cca5a-d5f1-4f21-9f38-22ef85da90c9" className="text-primary hover:underline">
          Policy
        </Link>
      </p>

      <p className="text-body-secondary text-white text-base">
        Already have an account?
        <button
          onClick={() => {
            if (setIsSignInOpen && setIsSignUpOpen) {
              setIsSignUpOpen(false);
              setIsSignInOpen(true);
            } else {
              router.push("/signin");
            }
          }}
          className="pl-2 text-primary hover:underline bg-transparent border-none p-0 cursor-pointer"
        >
          Sign In
        </button>
      </p>
    </>
  );
};

export default SignUp;
