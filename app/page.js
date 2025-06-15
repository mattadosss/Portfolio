export default function Home() {
    return (
        <div className="flex flex-col min-h-screen text-gray-800 font-geist px-4 sm:px-6 md:px-8 lg:px-40 py-8 md:py-12 lg:py-20">
            <h1 className="text-2xl md:text-3xl font-semibold font-[Orbitron]">Hey there 👋!</h1>
            <div className="flex flex-col md:flex-row mt-8 md:mt-13 font-[Geist]">
                <img src="https://placehold.co/30x40" className="w-40 md:w-50 mb-6 md:mb-0 md:mr-20 self-center md:self-start"/>
                <p className="text-lg md:text-2xl mt-4 md:mt-25 max-w-full md:max-w-200">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
            </div>
            <div className="flex flex-col md:flex-row mt-12 md:mt-23 font-[Geist]">
                <p className="text-lg md:text-2xl md:mr-20 mt-4 md:mt-20 max-w-full md:max-w-200 order-2 md:order-1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam
                    nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
                <img
                    src="https://placehold.co/60x50" className="w-40 md:w-70 mb-6 md:mb-0 md:mr-20 self-center md:self-start order-1 md:order-2"/>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 font-[Geist] mt-12 md:mt-20">My Skills</h3>

            <div className="space-y-4 max-w-full md:mr-20">

                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Python</span>
                        <span className="text-sm text-gray-500">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-[#3573a6] h-3 rounded-full w-[65%]"></div>
                    </div>
                </div>


                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">JavaScript</span>
                        <span className="text-sm text-gray-500">40%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-[#f1e15a] h-3 rounded-full w-[40%]"></div>
                    </div>
                </div>


                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">HTML</span>
                        <span className="text-sm text-gray-500">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-[#e44c27] h-3 rounded-full w-[90%]"></div>
                    </div>
                </div>


                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">CSS</span>
                        <span className="text-sm text-gray-500">60%</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#68309e] h-2.5 rounded-full w-[60%]"></div>
                    </div>

                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Bash</span>
                        <span className="text-sm text-gray-500">45%</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                        <div className="bg-[#c1f02e] h-2.5 rounded-full w-[45%]"></div>
                    </div>

                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">SQL</span>
                        <span className="text-sm text-gray-500">85%</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#e38c00] h-2.5 rounded-full w-[85%]"></div>
                    </div>

                </div>

            </div>


        </div>
    );
}

