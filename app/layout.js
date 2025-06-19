'use client';

import {useState} from "react";
import {Geist, Geist_Mono} from "next/font/google";
import {Orbitron} from "next/font/google";
import {Borel} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {Menu, X} from "lucide-react"; // Optional: use any icon library

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const borel = Borel({
    weight: "400",
    variable: "--font-borel",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const orbitron = Orbitron({
    variable: "--font-orbitron",
    subsets: ["latin"],
});



export default function RootLayout({children}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <html lang="en">
        <body className="antialiased flex flex-col min-h-screen text-gray-800 font-sans">
        <header className="bg-[#f5d4d4] w-full h-[91px] flex items-center px-4 shadow-md justify-between">
            <Link href="/">
                <div
                    className="font-[Borel] rounded-md w-[90px] h-[50px] relative sm p-1.5 ml-4 pl-3 leading-none pt-3 text-2xl">
                    Matteo<br/>Weber
                </div>
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                    {isOpen ? <X size={28}/> : <Menu size={28}/>}
                </button>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex gap-5 font-[Orbitron]">
                <Link href="/" className="bg-[#e3a4a4] rounded-md p-3 shadow-lg hover:scale-110 transition">
                    Home
                </Link>
                <Link href="/projects" className="bg-[#e3a4a4] rounded-md p-3 shadow-lg hover:scale-110 transition">
                    Projects
                </Link>
                <Link href="/contact" className="bg-[#e3a4a4] rounded-md p-3 shadow-lg hover:scale-110 transition">
                    Contact
                </Link>
            </nav>
        </header>

        {/* Mobile menu dropdown */}
        {isOpen && (
            <div className="flex flex-col md:hidden bg-[#f5d4d4] px-4 py-2 gap-2 font-[Orbitron] shadow-md">
                <Link href="/" onClick={() => setIsOpen(false)}
                      className="bg-[#e3a4a4] rounded-md p-3 shadow-md hover:scale-105 transition">
                    Home
                </Link>
                <Link href="/projects" onClick={() => setIsOpen(false)}
                      className="bg-[#e3a4a4] rounded-md p-3 shadow-md hover:scale-105 transition">
                    Projects
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}
                      className="bg-[#e3a4a4] rounded-md p-3 shadow-md hover:scale-105 transition">
                    Contact
                </Link>
            </div>
        )}

        <main className="bg-[#FFFFFF]">
            {children}
        </main>

        <footer className="bg-red-200 text-black p-6 mt-auto font-[Geist]">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">© 2025 Matteo Weber. All rights reserved.</p>
                <div className="flex space-x-4 grid grid-cols-3 divide-x-2 divide-black-400">
                    <Link href="/datenschutz" className="pr-3 hover:underline">Datenschutz</Link>
                    <Link href="/impressum" className="hover:underline">Impressum</Link>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                </div>
            </div>
        </footer>
        </body>
        </html>
    );
}