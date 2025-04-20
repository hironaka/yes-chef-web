import React from "react";
import Hero from "@/components/Home/Hero";
import Cook from "@/components/Home/Cook";
import Gallery from "@/components/Home/Gallery";
import Newsletter from "@/components/Home/Newsletter";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Yes Chef",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Cook />
      <Gallery />
    </main>
  );
}
