import { CheckCircle } from "lucide-react";

export default function WhyMindDocs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-50 rounded-bl-[100px] opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-50 rounded-tr-[100px] opacity-50 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 font-medium text-sm mb-6">
              <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose MindDocs?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              MindDocs transforms how you work with PDF documents, saving you
              time and enhancing your understanding.
            </p>

            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <span className="block font-semibold text-gray-900">
                    Save 70% of reading time
                  </span>
                  <span className="text-gray-600">
                    with AI-powered summaries and highlights
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <span className="block font-semibold text-gray-900">
                    Improve comprehension
                  </span>
                  <span className="text-gray-600">
                    by connecting ideas across multiple documents
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <span className="block font-semibold text-gray-900">
                    Enhance retention
                  </span>
                  <span className="text-gray-600">
                    with our study mode and spaced repetition
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <span className="block font-semibold text-gray-900">
                    Seamless collaboration
                  </span>
                  <span className="text-gray-600">
                    with teammates and classmates
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Right content */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-indigo-100 rounded-full z-[-1]"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-purple-100 rounded-full z-[-1]"></div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Traditional Note-Taking vs. MindDocs
              </h3>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-gray-50 rounded-xl">
                    <div className="text-lg font-semibold text-gray-900 mb-2">
                      Traditional
                    </div>
                    <div className="text-gray-600">
                      Manual highlighting and note-taking
                    </div>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                    <div className="text-lg font-semibold text-indigo-900 mb-2">
                      MindDocs
                    </div>
                    <div className="text-indigo-700">
                      AI-powered smart highlights and summaries
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-gray-50 rounded-xl">
                    <div className="text-lg font-semibold text-gray-900 mb-2">
                      Traditional
                    </div>
                    <div className="text-gray-600">
                      Hours spent reading full documents
                    </div>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                    <div className="text-lg font-semibold text-indigo-900 mb-2">
                      MindDocs
                    </div>
                    <div className="text-indigo-700">
                      Focus on key concepts, save 70% of time
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 bg-gray-50 rounded-xl">
                    <div className="text-lg font-semibold text-gray-900 mb-2">
                      Traditional
                    </div>
                    <div className="text-gray-600">
                      Difficult to find information later
                    </div>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                    <div className="text-lg font-semibold text-indigo-900 mb-2">
                      MindDocs
                    </div>
                    <div className="text-indigo-700">
                      Powerful semantic search across all documents
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
