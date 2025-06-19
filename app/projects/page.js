export default function Projects() {
    // Example technology arrays for each project
    const techStacks = [
        ["React", "TailwindCSS", "Next.js"],
        ["Node.js", "Express", "MongoDB"],
        ["Python", "Flask", "SQLite"]
    ];
    return (
        <div className="mb-10 mt-10 px-4 sm:px-6 md:px-8">
            <h1 className="font-[Orbitron] text-2xl sm:text-3xl mb-8 text-center">Projects</h1>
            <div className="flex flex-col items-center justify-center gap-8">
                {[1, 2, 3].map((_, index) => (
                    <div
                        key={index}
                        className="bg-[#f5d4d4] w-full max-w-4xl border border-[#e3a4a4] rounded-2xl shadow-lg p-0 sm:p-0 flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                    >
                        {/* Title */}
                        <h2 className="text-lg sm:text-xl font-semibold font-[Orbitron] px-6 pt-6 pb-2 text-gray-900">Project X</h2>
                        {/* Image */}
                        <div className="relative flex justify-center items-center px-6">
                            <img
                                src="https://placehold.co/150x100"
                                alt="Project"
                                className="w-full sm:w-2/3 max-w-xs rounded-xl border-4 border-[#e3a4a4] shadow-md object-cover"
                            />
                        </div>
                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2 px-6 mt-4 mb-2">
                            {techStacks[index].map((tech) => (
                                <span key={tech} className="bg-white/80 text-xs sm:text-sm text-gray-800 px-2 py-1 rounded-full border border-gray-300 font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {/* Description */}
                        <p className="px-6 text-sm sm:text-base text-gray-800 mb-4 mt-1">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat.
                        </p>
                        {/* Code button */}
                        <div className="px-6 pb-6 flex flex-col sm:flex-row sm:justify-end">
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 bg-[#e3a4a4] hover:bg-blue-200 text-black font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-end"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View code on GitHub"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                                </svg>
                                Code
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
