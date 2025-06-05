export default function Home() {
    return (
        <div className="flex flex-col min-h-screen text-gray-800 font-geist ml-25 mt-15 mb-20">
            <h1 className="text-3xl font-semibold font-[Orbitron]">Hey there 👋!</h1>
            <div className="flex mt-13 font-[Geist] ">

                <img src="https://placehold.co/40x50" className="w-70 mr-20"/>
                <p className="max-w-200 text-4xl">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>
            </div>
            <div className="flex mt-23 font-[Geist] ">
                <p className="max-w-200 text-4xl mr-20">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam
                    nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</p>

                <img
                    src="https://placehold.co/60x50" className="w-70 mr-20"/>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4 font-[Geist]">My Skills</h3>

            <div className="space-y-4 mr-20">

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
                        <span className="text-sm text-gray-500">80%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-[#e44c27] h-3 rounded-full w-[80%]"></div>
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
                        <span className="text-sm text-gray-500">40%</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                        <div className="bg-[#c1f02e] h-2.5 rounded-full w-[40%]"></div>
                    </div>

                </div>
                <div>
                    <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">SQL</span>
                        <span className="text-sm text-gray-500">80%</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#e38c00] h-2.5 rounded-full w-[80%]"></div>
                    </div>

                </div>

            </div>


        </div>
    );
}

