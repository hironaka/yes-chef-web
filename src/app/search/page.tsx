"use client";
import React, { useEffect } from "react";
import Search from "@/components/Search";

export default function SearchPage() {

    useEffect(() => {
        const originaOverscroll = document.body.style.overscrollBehavior;
        const originalBg = document.body.style.backgroundColor;
        document.body.style.backgroundColor = "white";
        document.body.style.overscrollBehavior = "none";

        return () => {
            document.body.style.backgroundColor = originalBg;
            document.body.style.overscrollBehavior = originaOverscroll;
        };
    }, []);

    return (
        <main className="flex items-center justify-center min-h-screen bg-white">
            <Search />
        </main>
    );
}