"use client";

import { useState } from "react";

export default function Projects() {
	// Hard-coded project list for easy maintenance
	const projects = [
		{
			id: "portfolio",
			title: "Portfolio Website",
			description: "Personal portfolio built with a focus on performance and responsive UI.",
			image: "https://placehold.co/150x100",
			tags: ["React", "TailwindCSS", "Next.js"],
			codeUrl: "#"
		},
		{
			id: "api",
			title: "REST API",
			description: "A Node.js API with CRUD endpoints and basic auth.",
			image: "https://placehold.co/150x100",
			tags: ["Node.js", "MongoDB"],
			codeUrl: "#"
		},
		{
			id: "dashboard",
			title: "Analytics Dashboard",
			description: "Dashboard built with Flask and MySQL storage.",
			image: "https://placehold.co/150x100",
			tags: ["Python", "Flask", "MySql"],
			codeUrl: "#"
		},
		{
			id: "widgets",
			title: "UI Widgets",
			description: "Reusable components written in vanilla JavaScript.",
			image: "https://placehold.co/150x100",
			tags: ["JavaScript"],
			codeUrl: "#"
		}
	];

	const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
	const [activeTag, setActiveTag] = useState(null);

	const isTagActive = (tag) => activeTag === tag;
	const toggleTag = (tag) => {
		setActiveTag((prev) => (prev === tag ? null : tag));
	};
	const clearTags = () => setActiveTag(null);

	const matchesFilter = (project) =>
		activeTag === null || project.tags.includes(activeTag);

	return (
		<div className="fade-in mb-10 mt-10 px-4 sm:px-6 md:px-8">
			<h1 className="font-[Orbitron] text-2xl sm:text-3xl mb-6 text-center">Projects</h1>

			{/* Tag filters */}
			<div className="max-w-4xl mx-auto mb-8">
				<div className="flex flex-wrap items-center justify-center gap-2">
					<button
						onClick={clearTags}
						className={`px-3 py-1.5 rounded-full border text-sm transition-colors ${
							activeTag === null
								? "bg-[#e3a4a4] text-black border-[#e3a4a4]"
								: "bg-white text-gray-800 border-gray-300 hover:bg-gray-50"
						}`}
					>
						All
					</button>
					{allTags.map((tag) => (
						<button
							key={tag}
							onClick={() => toggleTag(tag)}
							className={`px-3 py-1.5 rounded-full border text-sm transition-colors ${
								isTagActive(tag)
									? "bg-[#e3a4a4] text-black border-[#e3a4a4]"
									: "bg-white text-gray-800 border-gray-300 hover:bg-gray-50"
							}`}
						>
							{tag}
						</button>
					))}
				</div>
			</div>

			<div className="flex flex-col items-center justify-center gap-8">
				{projects.filter(matchesFilter).map((project) => (
					<div
						key={project.id}
						className="bg-[#f5d4d4] w-full max-w-4xl border border-[#e3a4a4] rounded-2xl shadow-lg p-0 sm:p-0 flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-2"
					>
						{/* Title */}
						<h2 className="text-lg sm:text-xl font-semibold font-[Orbitron] px-6 pt-6 pb-2 text-gray-900">{project.title}</h2>
						{/* Image */}
						<div className="relative flex justify-center items-center px-6">
							<img
								src={project.image}
								alt={project.title}
								className="w-full sm:w-2/3 max-w-xs rounded-xl border-4 border-[#e3a4a4] shadow-md object-cover"
							/>
						</div>
						{/* Tech tags */}
						<div className="flex flex-wrap gap-2 px-6 mt-4 mb-2">
							{project.tags.map((tech) => (
								<span key={tech} className="bg-white/80 text-xs sm:text-sm text-gray-800 px-2 py-1 rounded-full border border-gray-300 font-medium">
									{tech}
								</span>
							))}
						</div>
						{/* Description */}
						<p className="px-6 text-sm sm:text-base text-gray-800 mb-4 mt-1">{project.description}</p>
						{/* Code button */}
						<div className="px-6 pb-6 flex flex-col sm:flex-row sm:justify-end">
							<a
								href={project.codeUrl}
								className="inline-flex items-center gap-2 bg-[#e3a4a4] hover:bg-[#e3a4a4] text-black font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-end"
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
				{projects.filter(matchesFilter).length === 0 && (
					<p className="text-gray-700">No projects match the selected tag.</p>
				)}
			</div>
		</div>
	);
}
