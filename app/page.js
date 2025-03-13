
//import { Borel } from "next/font/google";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-[#f5d4d4] w-full h-[91px] flex items-center px-4 shadow-md flex items-center justify-between gap-5">
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

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center p-6">

      </main>

      {/* Footer */}
      <footer className="p-4 mt-auto">
        &copy; 2024 All Rights Reserved
      </footer>
    </div>
  );
}

