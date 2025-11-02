"use client";
import React, { useEffect } from "react";
import Search from "@/components/Search";

export default function SearchPage() {

    useEffect(() => {
        document.body.style.backgroundColor = "white";

        return () => {
            document.body.style.backgroundColor = "";
        };
    }, []);

    return (
        <main className="flex items-center justify-center min-h-screen bg-white">
            <Search />
        </main>
    );
}