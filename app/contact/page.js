'use client';

import Link from "next/link";

export default function Contact() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-[#ffffff]/60 via-white to-[#e3a4a4]/40">
            <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8">
                {/* Contact Info Card */}
                <div className="flex-1 bg-white rounded-2xl shadow-xl border border-[#f5d4d4] flex flex-col overflow-hidden">
                    {/* Accent bar */}
                    <div className="h-2 bg-[#e3a4a4] w-full" />
                    <div className="p-8">
                         <h2 className="text-3xl font-bold mb-4 text-[#000000] bg-[#e3a4a4]s">Get in Touch</h2>
                        
                        <p className="mb-6 text-gray-700">
                            Feel free to reach out for collaborations, questions, or just to say hi 👋
                        </p>
                        <div className="space-y-4">
                            {/* Email */}
                            <div className="flex items-center gap-3">
                                <span className="bg-[#f5d4d4] p-2 rounded-full">
                                    {/* Envelope icon */}
                                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                                        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" fill="none" />
                                    </svg>
                                </span>
                                <span>matteo.weber1@outlook.com</span>
                            </div>
                            {/* Github Privat */}
                            <div className="flex items-center gap-3">
                                <span className="bg-[#f5d4d4] p-2 rounded-full">
                                    {/* GitHub icon */}
                                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                                    </svg>
                                </span>
                                <span><a href="https://github.com/mattadosss" className="hover:underline">Github Privat</a></span>
                            </div>
                            {/* Github Schule */}
                            <div className="flex items-center gap-3">
                                <span className="bg-[#f5d4d4] p-2 rounded-full">
                                    {/* GitHub icon */}
                                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                                    </svg>
                                </span>
                                <span><a href="https://github.com/im23b-weberm" className="hover:underline">Github Schule</a></span>
                            </div>
                            {/* Location */}
                            <div className="flex items-center gap-3">
                                <span className="bg-[#f5d4d4] p-2 rounded-full">
                                    {/* Map pin icon */}
                                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M12 21c-4.418 0-8-5.373-8-10a8 8 0 1 1 16 0c0 4.627-3.582 10-8 10z" />
                                        <circle cx="12" cy="11" r="3" />
                                    </svg>
                                </span>
                                <span>Zürich, CH</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Form Card */}
                <div className="flex-1 bg-white rounded-2xl shadow-xl border border-[#f5d4d4] flex flex-col overflow-hidden">
                    <div className="h-2 bg-[#e3a4a4] w-full" />
                    <div className="p-8">
                        <form
                            action="https://formspree.io/f/xvgaddek"
                            method="POST"
                            className="space-y-6"
                        >
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e3a4a4]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e3a4a4]"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e3a4a4]"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#e3a4a4] text-black px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-[#f5d4d4] transition duration-200 text-base mt-2"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}