import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen text-gray-800 font-sans`}
    >
    <header
        className="bg-[#f5d4d4] w-full h-[91px] flex items-center px-4 shadow-md flex items-center justify-between gap-5">
        <div className="`${Borel}` bg-[#e3a4a4] rounded-md w-[110px] h-[46px] relative">
            Matteo Weber
        </div>
        <div className="flex items-center justify-between gap-5">
            <nav className="flex flex-row float-right justify-end m-20px flex items-center justify-between gap-5">
                <div className=" bg-[#e3a4a4] rounded-md">
                    Home
                </div>
                <div className=" bg-[#e3a4a4] rounded-md">
                    Contact
                </div>
            </nav>
        </div>

    </header>

    {children}

      <footer className="p-4 mt-auto">
        &copy; 2024 All Rights Reserved
      </footer>
    </body>
    </html>
  );
}
