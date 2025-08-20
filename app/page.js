export default function Home() {
    const skills = [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" },
        { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        
    ];
    return (
        <div className="fade-in flex flex-col min-h-screen text-gray-800 font-geist px-4 sm:px-6 md:px-8 lg:px-40 py-8 md:py-12 lg:py-20">
            <h1 className="text-2xl md:text-3xl font-semibold font-[Orbitron] mb-4">Hello, I’m Matteo Weber</h1>
            <div className="flex flex-col md:flex-row items-center md:items-center mt-8 font-[Geist]">
                <img
                    src="portrait.png"
                    className="w-40 md:w-50 mb-6 md:mb-0 md:mr-20 self-center md:self-start rounded-2xl"
                />

                <p className="text-lg md:text-2xl max-w-full md:max-w-2xl text-center md:text-left">
                I study at the Informatikmittelschule at Kantonsschule Hottingen Zürich,
                    where I explore different areas of programming and technology. I enjoy
                    trying out a bit of everything — web, apps, and games — because each project
                    is a chance to learn something new. When I’m not coding, you’ll usually find
                    me playing sports or spending time outside.
                </p>
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

