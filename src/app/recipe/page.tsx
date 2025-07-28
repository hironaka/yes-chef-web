"use client";
import React from "react";
import App from "@/components/Recipe/App";
import { useSession } from "next-auth/react";

export default function Recipe() {
  return (
    <main>
      <App />
    </main>
  );
}