"use client";
import React from "react";
import App from "@/components/Recipe/App";
import { useSession } from "next-auth/react";
import AuthGuard from "@/components/AuthGuard";

export default function Recipe() {
  return (
    <main>
      <AuthGuard>
        <App />
      </AuthGuard>
    </main>
  );
}