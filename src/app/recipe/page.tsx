import React from "react";
import App from "@/components/Recipe/App";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Yes Chef",
};

export default function Recipe() {
  return (
    <main>
      <App />
    </main>
  );
}