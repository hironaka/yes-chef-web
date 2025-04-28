import ForgotPasswordComponent from "@/components/Auth/ForgotPassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password - Yes Chef",
  description: "Request a password reset for your Yes Chef account.",
};

const ForgotPasswordPage = () => {
  return <ForgotPasswordComponent />;
};

export default ForgotPasswordPage;