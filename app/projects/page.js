export default function Projects() {
    return (
        <div className="mb-10 mt-10">
            <h1 className="font-[Orbitron] text-3xl mb-10 ml-23">Projects</h1>
            <div className="flex flex-col items-center justify-center  gap-10">
                {[1, 2, 3].map((_, index) => (
                    <div
                        key={index}
                        className="bg-[#f5d4d4] w-full max-w-4xl max-h-15xl p-6 rounded-xl shadow-xl transform transition-transform duration-300 ease-in-out hover:-translate-y-2 flex items-center gap-6"
                    >
                        <img
                            src="https://placehold.co/150x100"
                            alt="Project"
                            className="w-40 h-auto rounded-md"
                        />
                        <div className="flex flex-col text-left">
                            <h2 className="text-xl font-semibold mb-2">Project X</h2>
                            <p className="max-w-md mb-4">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat.
                            </p>
                            <a href="#" className="hover:underline font-semibold text-blue-700">
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
