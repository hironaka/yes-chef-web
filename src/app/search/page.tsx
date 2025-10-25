import React from "react";
import Search from "@/components/Search";
import Gallery from "@/components/Home/Gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Search Recipes",
};

export default function SearchPage() {
    return (
        <main>
            <div className="pt-[140px]"/>
            <Search />
            <Gallery />
        </main>
    );
}