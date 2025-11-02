import React from "react";
import Search from "@/components/Search";
import Gallery from "@/components/Home/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Search Recipes",
};

export default function SearchPage() {
    return (
        <main className="flex items-center justify-center min-h-screen bg-white">
            <Search />
        </main>
    );
}