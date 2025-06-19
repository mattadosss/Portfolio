'use client';

import Link from "next/link";
import {Menu, X} from "lucide-react";
import {useState} from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (<div>
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
            )}</div>
    )
}