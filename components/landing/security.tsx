import Image from "next/image";

export default function Security() {
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
            Security & Privacy
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Data, Protected
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We take security and privacy seriously. Your documents and insights
            are protected with enterprise-grade security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Security illustration */}
          <div className="relative">
            <div className="max-w-md mx-auto">
              {/* Security shield illustration */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                <div className="relative z-10 bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                  {/* Shield icon */}
                  <div className="w-24 h-24 mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-indigo-100 rounded-full"></div>
                    <div className="absolute inset-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Security status */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Your Data is Secure
                    </h3>
                    <p className="text-gray-600">
                      End-to-end encryption for all your documents
                    </p>
                  </div>

                  {/* Security metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-indigo-600">
                        256-bit
                      </div>
                      <div className="text-sm text-gray-600">Encryption</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        SOC 2
                      </div>
                      <div className="text-sm text-gray-600">Compliant</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-indigo-600">
                        GDPR
                      </div>
                      <div className="text-sm text-gray-600">Ready</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        99.9%
                      </div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                  </div>

                  {/* Security animation */}
                  <div className="mt-6 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-gray-500">
                    <span>Security Status</span>
                    <span>Strong</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-indigo-100 rounded-lg rotate-12 z-[-1]"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-purple-100 rounded-lg -rotate-12 z-[-1]"></div>
            </div>
          </div>

          {/* Right side - Security features */}
          <div>
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    End-to-End Encryption
                  </h3>
                  <p className="text-gray-600">
                    Your documents are encrypted both in transit and at rest.
                    Only you can access your data, ensuring complete privacy.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    SOC 2 Compliance
                  </h3>
                  <p className="text-gray-600">
                    We adhere to strict security protocols and are SOC 2
                    compliant, ensuring your data is handled with the highest
                    security standards.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Data Ownership
                  </h3>
                  <p className="text-gray-600">
                    You maintain full ownership of your data. We never sell your
                    information to third parties or use it for advertising.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Access Controls
                  </h3>
                  <p className="text-gray-600">
                    Granular permission settings allow you to control exactly
                    who can view, edit, or comment on your documents.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <a
                href="#"
                className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
              >
                <span>Read our Security Whitepaper</span>
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
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900">
              Trusted & Certified
            </h3>
            <p className="text-gray-600 mt-2">
              MindDocs meets the highest security standards in the industry
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <Image
                src="/gdpr.png?height=60&width=120"
                alt="GDPR Compliant"
                className="h-12"
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <Image
                src="/soc.png?height=60&width=120"
                alt="SOC 2 Type II"
                className="h-12"
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <Image
                src="/hipaa.webp?height=60&width=120"
                alt="HIPAA Compliant"
                className="h-12"
              />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <Image
                src="/iso.png?height=60&width=120"
                alt="ISO 27001"
                className="h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
