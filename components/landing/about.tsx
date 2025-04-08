import { Users, BookOpen, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 font-medium text-sm mb-6">
            <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
            Our Mission
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We're on a Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're transforming how people learn and work with documents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission Card 1 */}
          <div className="bg-gradient-to-br from-white to-indigo-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
            {/* Background blob */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-100 rounded-full opacity-50"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-100">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Democratize Knowledge
              </h3>
              <p className="text-gray-600">
                We believe everyone should have access to powerful tools that
                help them understand complex information quickly and
                effectively.
              </p>
              <div className="mt-6 inline-flex items-center text-sm font-medium text-indigo-600">
                <span>Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Mission Card 2 */}
          <div className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
            {/* Background blob */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-100 rounded-full opacity-50"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-100">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Enhance Learning
              </h3>
              <p className="text-gray-600">
                Our tools are designed to help you not just read, but truly
                understand and retain information, making learning more
                efficient and effective.
              </p>
              <div className="mt-6 inline-flex items-center text-sm font-medium text-purple-600">
                <span>Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Mission Card 3 */}
          <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
            {/* Background blob */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-100">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Foster Collaboration
              </h3>
              <p className="text-gray-600">
                We're building tools that make it easy to share knowledge and
                insights, helping teams and communities learn and grow together.
              </p>
              <div className="mt-6 inline-flex items-center text-sm font-medium text-blue-600">
                <span>Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-xl border border-indigo-100">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Content */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                Meet the Creator 👋
              </h3>
              <p className="text-gray-600 mb-6 text-base">
                Hi, I’m{" "}
                <span className="font-semibold text-indigo-600">
                  Soumojit Banerjee
                </span>
                , the mind behind this platform. I’m a passionate developer and
                student, building tools that make working with documents smarter
                and simpler.
              </p>
              <p className="text-gray-600 text-base">
                I created this site with a vision to blend AI and intuitive
                design to help people manage, search, and collaborate on
                documents more effortlessly.
              </p>
              <button className="mt-6 px-6 py-2 bg-indigo-50 text-indigo-600 font-medium rounded-lg hover:bg-indigo-100 transition-colors inline-flex items-center">
                <span>Join the mission</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Right Profile */}
            <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-1 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-white mb-3">
                  {/* Replace with your actual image */}
                  <Image
                    src="/soumojit.jpeg"
                    alt="Soumojit Banerjee"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg font-semibold text-gray-900">
                  Soumojit Banerjee
                </p>
                <p className="text-sm text-gray-500">Creator & Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
