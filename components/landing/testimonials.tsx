export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-indigo-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-20 w-80 h-80 bg-purple-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 -left-40 w-80 h-80 bg-indigo-100 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 font-medium text-sm mb-6">
            <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of students, researchers, and professionals who are
            transforming how they work with PDFs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow relative">
            {/* Quote mark */}
            <div className="absolute top-6 right-6 text-indigo-100">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6667 13.3333H10.0001C8.15913 13.3333 6.66675 14.8257 6.66675 16.6667V23.3333C6.66675 25.1743 8.15913 26.6667 10.0001 26.6667H13.3334C15.1744 26.6667 16.6667 25.1743 16.6667 23.3333V20C16.6667 19.0795 15.9205 18.3333 15.0001 18.3333H13.3334C12.4129 18.3333 11.6667 17.5871 11.6667 16.6667C11.6667 15.7462 12.4129 15 13.3334 15H16.6667V13.3333ZM33.3334 13.3333H26.6667C24.8258 13.3333 23.3334 14.8257 23.3334 16.6667V23.3333C23.3334 25.1743 24.8258 26.6667 26.6667 26.6667H30.0001C31.841 26.6667 33.3334 25.1743 33.3334 23.3333V20C33.3334 19.0795 32.5872 18.3333 31.6667 18.3333H30.0001C29.0796 18.3333 28.3334 17.5871 28.3334 16.6667C28.3334 15.7462 29.0796 15 30.0001 15H33.3334V13.3333Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <p className="text-gray-700 mb-6 relative z-10">
              "MindDocs has completely transformed my research process. I can
              process papers in a fraction of the time, and the AI highlights
              help me focus on what's important."
            </p>

            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex-shrink-0 mr-4"></div>
              <div>
                <h3 className="font-semibold text-gray-900">Sarah Johnson</h3>
                <p className="text-indigo-600 text-sm">PhD Student</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow relative md:mt-8">
            {/* Quote mark */}
            <div className="absolute top-6 right-6 text-purple-100">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6667 13.3333H10.0001C8.15913 13.3333 6.66675 14.8257 6.66675 16.6667V23.3333C6.66675 25.1743 8.15913 26.6667 10.0001 26.6667H13.3334C15.1744 26.6667 16.6667 25.1743 16.6667 23.3333V20C16.6667 19.0795 15.9205 18.3333 15.0001 18.3333H13.3334C12.4129 18.3333 11.6667 17.5871 11.6667 16.6667C11.6667 15.7462 12.4129 15 13.3334 15H16.6667V13.3333ZM33.3334 13.3333H26.6667C24.8258 13.3333 23.3334 14.8257 23.3334 16.6667V23.3333C23.3334 25.1743 24.8258 26.6667 26.6667 26.6667H30.0001C31.841 26.6667 33.3334 25.1743 33.3334 23.3333V20C33.3334 19.0795 32.5872 18.3333 31.6667 18.3333H30.0001C29.0796 18.3333 28.3334 17.5871 28.3334 16.6667C28.3334 15.7462 29.0796 15 30.0001 15H33.3334V13.3333Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <p className="text-gray-700 mb-6 relative z-10">
              "As a medical student, I have to read countless research papers.
              MindDocs helps me extract key information quickly and create study
              materials that actually help me retain information."
            </p>

            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex-shrink-0 mr-4"></div>
              <div>
                <h3 className="font-semibold text-gray-900">Michael Chen</h3>
                <p className="text-purple-600 text-sm">Medical Student</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow relative">
            {/* Quote mark */}
            <div className="absolute top-6 right-6 text-blue-100">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6667 13.3333H10.0001C8.15913 13.3333 6.66675 14.8257 6.66675 16.6667V23.3333C6.66675 25.1743 8.15913 26.6667 10.0001 26.6667H13.3334C15.1744 26.6667 16.6667 25.1743 16.6667 23.3333V20C16.6667 19.0795 15.9205 18.3333 15.0001 18.3333H13.3334C12.4129 18.3333 11.6667 17.5871 11.6667 16.6667C11.6667 15.7462 12.4129 15 13.3334 15H16.6667V13.3333ZM33.3334 13.3333H26.6667C24.8258 13.3333 23.3334 14.8257 23.3334 16.6667V23.3333C23.3334 25.1743 24.8258 26.6667 26.6667 26.6667H30.0001C31.841 26.6667 33.3334 25.1743 33.3334 23.3333V20C33.3334 19.0795 32.5872 18.3333 31.6667 18.3333H30.0001C29.0796 18.3333 28.3334 17.5871 28.3334 16.6667C28.3334 15.7462 29.0796 15 30.0001 15H33.3334V13.3333Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <p className="text-gray-700 mb-6 relative z-10">
              "Our team uses MindDocs to process industry reports and competitor
              analysis. The collaboration features make it easy to share
              insights across departments."
            </p>

            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 flex-shrink-0 mr-4"></div>
              <div>
                <h3 className="font-semibold text-gray-900">Emily Rodriguez</h3>
                <p className="text-blue-600 text-sm">Business Analyst</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
              1,000+
            </div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
              50,000+
            </div>
            <div className="text-gray-600">Documents Processed</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
              70%
            </div>
            <div className="text-gray-600">Time Saved</div>
          </div>
        </div>
      </div>
    </section>
  );
}
