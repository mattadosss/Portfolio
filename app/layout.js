import {Geist, Geist_Mono} from "next/font/google";
import {Orbitron} from "next/font/google";
import {Borel} from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
export const metadata = {
    title: "Matteo Weber",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className="antialiased flex flex-col min-h-screen text-gray-800 font-sans"
        >
        <header
            className="bg-[#f5d4d4] w-full h-[91px] flex items-center px-4 shadow-md flex items-center justify-between gap-5 shadow-2xs">
            <div
                className="font-[Borel]  rounded-md w-[90px] h-[50px] relative sm p-1.5 ml-4 pl-3 leading-none pt-3 text-2xl ">
                Matteo<br></br>Weber
            </div>
            <div className="flex items-center justify-between gap-5">
                <nav
                    className="flex flex-row float-right justify-end m-20px flex items-center justify-between gap-5 font-[Orbitron]">
                    <Link href="/">
                        <div className=" bg-[#e3a4a4] rounded-md place-content-center p-3 shadow-lg">
                            Home
                        </div>
                    </Link>
                    <Link href="/projects">
                        <div className=" bg-[#e3a4a4] rounded-md place-content-center p-3 shadow-lg">
                            Projects
                        </div>
                    </Link>
                    <Link href="/about-me">
                        <div className=" bg-[#e3a4a4] rounded-md place-content-center p-3 shadow-lg">
                            About Me
                        </div>
                    </Link>
                    <Link href="/contact">
                        <div className=" bg-[#e3a4a4] rounded-md place-content-center p-3 shadow-lg">
                            Contact
                        </div>
                    </Link>
                </nav>
            </div>

        </header>
        <main className="bg-[#FFFFFF]">
            {children}
        </main>

        </body>
        </html>
    );
}
