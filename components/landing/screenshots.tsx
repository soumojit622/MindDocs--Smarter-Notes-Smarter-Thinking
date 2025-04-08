export default function Screenshots() {
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
            User Interface
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See MindDocs in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore how MindDocs transforms your PDF documents into smart,
            actionable notes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main screenshot */}
          <div className="lg:col-span-8 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
            {/* Browser header */}
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="mx-auto bg-white rounded-full flex items-center px-4 py-1 text-xs text-gray-500 w-64">
                minddocs.ai/workspace
              </div>
            </div>

            {/* App UI */}
            <div className="bg-white p-6">
              {/* App header */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M9.25 11.5L4.75 14L12 18.25L19.25 14L14.75 11.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900">
                      Research Workspace
                    </div>
                    <div className="text-sm text-gray-500">
                      5 documents • Last edited 2 hours ago
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-medium">
                    Share
                  </button>
                  <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-medium">
                    Export
                  </button>
                </div>
              </div>

              {/* Main content */}
              <div className="flex space-x-6">
                {/* Left sidebar */}
                <div className="w-48 flex-shrink-0">
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">
                      Documents
                    </div>
                    <div className="space-y-2">
                      <div className="px-3 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium">
                        Research Paper.pdf
                      </div>
                      <div className="px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm">
                        Literature Review.pdf
                      </div>
                      <div className="px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm">
                        Case Study.pdf
                      </div>
                      <div className="px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm">
                        Data Analysis.pdf
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">
                      Tags
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                        Research
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                        Science
                      </span>
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">
                        Academic
                      </span>
                    </div>
                  </div>
                </div>

                {/* Main document view */}
                <div className="flex-1 border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                    <div className="text-sm font-medium text-gray-700">
                      Research Paper.pdf • Page 3 of 24
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-1 text-gray-500 hover:text-indigo-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button className="p-1 text-gray-500 hover:text-indigo-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="p-6 h-64 overflow-y-auto">
                    <div className="space-y-3">
                      <p className="text-gray-800 text-sm">
                        The results of our study demonstrate a significant
                        improvement in cognitive function among participants who
                        received the experimental treatment. As shown in Figure
                        2, the treatment group exhibited a 45% increase in
                        memory recall compared to the control group.
                      </p>
                      <p className="text-gray-800 text-sm bg-purple-100 p-2 rounded">
                        Furthermore, the longitudinal data suggests that these
                        improvements are sustained over time, with minimal
                        regression observed during the 6-month follow-up period.
                        This finding is particularly noteworthy given the
                        challenges typically associated with maintaining
                        cognitive enhancements in similar interventions.
                      </p>
                      <p className="text-gray-800 text-sm">
                        The mechanism underlying these improvements appears to
                        be related to increased neural plasticity in the
                        hippocampal region, as evidenced by the fMRI data
                        collected during the study. This aligns with previous
                        research by Johnson et al. (2019) and extends their
                        findings by demonstrating efficacy in a broader
                        demographic range.
                      </p>
                      <p className="text-gray-800 text-sm bg-indigo-100 p-2 rounded">
                        It should be noted, however, that a small subset of
                        participants (approximately 8%) reported mild side
                        effects, including headaches and sleep disturbances.
                        These effects were transient and resolved without
                        intervention within 72 hours.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right sidebar - AI notes */}
                <div className="w-64 flex-shrink-0">
                  <div className="text-sm font-medium text-gray-700 mb-3">
                    AI Notes
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                      <div className="text-xs font-medium text-indigo-700 mb-1">
                        Key Finding
                      </div>
                      <div className="text-xs text-gray-600">
                        45% increase in memory recall in treatment group vs
                        control group
                      </div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                      <div className="text-xs font-medium text-purple-700 mb-1">
                        Important Detail
                      </div>
                      <div className="text-xs text-gray-600">
                        Improvements sustained over 6-month follow-up period
                      </div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="text-xs font-medium text-blue-700 mb-1">
                        Mechanism
                      </div>
                      <div className="text-xs text-gray-600">
                        Increased neural plasticity in hippocampal region
                      </div>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                      <div className="text-xs font-medium text-red-700 mb-1">
                        Side Effects
                      </div>
                      <div className="text-xs text-gray-600">
                        8% reported mild, transient side effects (headaches,
                        sleep issues)
                      </div>
                    </div>
                  </div>
                  <button className="mt-3 w-full py-2 text-xs bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg">
                    Generate More Insights
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Side screenshots */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-6">
            {/* Screenshot 1 */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div className="p-4">
                <div className="text-sm font-medium text-gray-900 mb-3">
                  Smart Highlights
                </div>
                <div className="h-40 bg-gray-50 rounded-lg p-3 overflow-hidden">
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-300 rounded w-full"></div>
                    <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-2 bg-purple-300 rounded w-full"></div>
                    <div className="h-2 bg-purple-300 rounded w-4/6"></div>
                    <div className="h-2 bg-gray-300 rounded w-full"></div>
                    <div className="h-2 bg-gray-300 rounded w-3/6"></div>
                    <div className="h-2 bg-indigo-300 rounded w-full"></div>
                    <div className="h-2 bg-indigo-300 rounded w-5/6"></div>
                    <div className="h-2 bg-gray-300 rounded w-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div className="p-4">
                <div className="text-sm font-medium text-gray-900 mb-3">
                  Study Mode
                </div>
                <div className="bg-indigo-50 rounded-lg p-4 h-40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm font-medium text-indigo-800 mb-2">
                      What was the percentage increase in memory recall?
                    </div>
                    <button className="px-4 py-2 bg-white text-indigo-600 rounded-lg text-sm shadow-sm hover:shadow-md transition-shadow">
                      Reveal Answer
                    </button>
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
