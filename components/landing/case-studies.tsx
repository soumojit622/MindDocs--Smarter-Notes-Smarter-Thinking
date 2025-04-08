import Image from "next/image";

export default function CaseStudies() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
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
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results with MindDocs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how students, researchers, and professionals are transforming
            their workflow with MindDocs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Case Study 1 */}
          <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl overflow-hidden shadow-xl border border-indigo-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="University Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Stanford University
                  </h3>
                  <p className="text-indigo-600">Research Department</p>
                </div>
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                45% Time Reduction in Literature Reviews
              </h4>

              <p className="text-gray-600 mb-6">
                Stanford researchers used MindDocs to process over 500 research
                papers for a systematic review, reducing the time spent by 45%
                while improving comprehension and cross-referencing.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                  Academic Research
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  Literature Review
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  Time Saving
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-indigo-400 to-purple-400"
                      ></div>
                    ))}
                  </div>
                  <div className="ml-2 text-sm text-gray-600">
                    Team of 12 researchers
                  </div>
                </div>

                <a
                  href="#"
                  className="text-indigo-600 font-medium flex items-center hover:text-indigo-700 transition-colors"
                >
                  <span>Read Case Study</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-indigo-600 p-6 text-white">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-indigo-300 mr-4 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <blockquote className="italic">
                  "MindDocs has revolutionized how we approach literature
                  reviews. What used to take weeks now takes days, and the
                  AI-generated insights have helped us identify connections we
                  might have missed."
                </blockquote>
              </div>
              <div className="mt-4 text-right text-indigo-200">
                — Dr. Sarah Chen, Lead Researcher
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl overflow-hidden shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Company Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Acme Consulting
                  </h3>
                  <p className="text-purple-600">Business Strategy</p>
                </div>
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                30% Improvement in Client Deliverables
              </h4>

              <p className="text-gray-600 mb-6">
                Acme Consulting implemented MindDocs across their strategy team,
                resulting in 30% more comprehensive client deliverables and a
                significant reduction in research time for market analysis.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                  Business Strategy
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                  Market Research
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  Client Deliverables
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-purple-400 to-blue-400"
                      ></div>
                    ))}
                  </div>
                  <div className="ml-2 text-sm text-gray-600">
                    Team of 25 consultants
                  </div>
                </div>

                <a
                  href="#"
                  className="text-purple-600 font-medium flex items-center hover:text-purple-700 transition-colors"
                >
                  <span>Read Case Study</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-purple-600 p-6 text-white">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-300 mr-4 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <blockquote className="italic">
                  "Our clients have noticed the difference in our reports since
                  we started using MindDocs. We're able to process more
                  information, identify key insights faster, and deliver more
                  comprehensive recommendations."
                </blockquote>
              </div>
              <div className="mt-4 text-right text-purple-200">
                — Michael Johnson, Managing Partner
              </div>
            </div>
          </div>
        </div>

        {/* Results metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
              70%
            </div>
            <div className="text-gray-600">Average Time Saved</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
              85%
            </div>
            <div className="text-gray-600">User Satisfaction</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
              3.5x
            </div>
            <div className="text-gray-600">Productivity Increase</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
              92%
            </div>
            <div className="text-gray-600">Retention Improvement</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-indigo-200 transition-all"
          >
            <span>View All Case Studies</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
