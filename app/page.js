export default function Home() {
    const skills = [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" },
        { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    ];
    return (
        <div className="fade-in flex flex-col min-h-screen text-gray-800 font-geist px-4 sm:px-6 md:px-8 lg:px-40 py-8 md:py-12 lg:py-20">
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

            <div className="max-w-full md:mr-20">
                <div className="flex flex-wrap gap-4">
                    {skills.map((skill) => (
                        <span
                            key={skill.name}
                            className="inline-flex items-center gap-3 bg-white text-lg text-gray-900 px-5 py-3 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 font-medium"
                        >
                            <img src={skill.icon} alt={`${skill.name} logo`} className="h-7 w-7" />
                            {skill.name}
                        </span>
                    ))}
                </div>
            </div>


        </div>
    );
}

