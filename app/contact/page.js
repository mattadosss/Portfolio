export default function Contact() {
     return(
         <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
              <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl overflow-hidden md:flex">


                   <div className="bg-blue-600 text-white p-8 md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                        <p className="mb-6 text-blue-100">
                             Feel free to reach out for collaborations, questions, or just to say hi 👋
                        </p>

                        <div className="space-y-4">
                             <div className="flex items-center gap-3">
                                  <svg className="w-5 h-5 text-blue-100" fill="none" stroke="currentColor"
                                       stroke-width="2"
                                       viewBox="0 0 24 24">
                                       <path d="M3 5h18M3 12h18M3 19h18"/>
                                  </svg>
                                  <span>your.email@example.com</span>
                             </div>
                             <div className="flex items-center gap-3">
                                  <svg className="w-5 h-5 text-blue-100" fill="none" stroke="currentColor"
                                       stroke-width="2"
                                       viewBox="0 0 24 24">
                                       <path
                                           d="M3 10l1.293-1.293a1 1 0 011.414 0L12 15l6.293-6.293a1 1 0 011.414 0L21 10"/>
                                  </svg>
                                  <span>+123 456 7890</span>
                             </div>
                             <div className="flex items-center gap-3">
                                  <svg className="w-5 h-5 text-blue-100" fill="none" stroke="currentColor"
                                       stroke-width="2"
                                       viewBox="0 0 24 24">
                                       <path
                                           d="M17.657 16.657L13.414 12.414a4 4 0 00-5.657 0l-4.243 4.243m0 0A9 9 0 1116.657 3.343l-4.243 4.243a4 4 0 000 5.657l4.243 4.243z"/>
                                  </svg>
                                  <span>New York, NY</span>
                             </div>
                        </div>
                   </div>


                   <div className="p-8 md:w-1/2">
                        <form action="#" method="POST" className="space-y-6">
                             <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                  <input type="text" name="name" required
                                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                             </div>
                             <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                  <input type="email" name="email" required
                                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                             </div>
                             <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                  <textarea name="message" rows="4" required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
                             </div>
                             <button type="submit"
                                     className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                                  Send Message
                             </button>
                        </form>
                   </div>
              </div>
         </div>

     );
}