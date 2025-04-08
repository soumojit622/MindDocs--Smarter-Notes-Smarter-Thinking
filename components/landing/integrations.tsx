import Image from "next/image";

export default function Integrations() {
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
            Integrations
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Connect with Your Favorite Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            MindDocs seamlessly integrates with the tools you already use,
            making your workflow even more efficient.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Integration tabs */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {[
                "Document Storage",
                "Note-Taking",
                "Productivity",
                "Learning Management",
                "Communication",
              ].map((category, i) => (
                <button
                  key={i}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                    i === 0
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Integration grid */}
          <div className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Integration 1 - Google Drive */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow group max-w-md mx-auto">
                <div className="flex items-center mb-4">
                  {/* Icon Container */}
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Image
                      src="/icons/google-drive.svg" // Place your icon inside /public/icons/
                      alt="Google Drive"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Google Drive
                    </h3>
                    <p className="text-sm text-gray-600">Cloud storage</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">
                  Import PDFs directly from your Google Drive and save notes
                  back automatically.
                </p>

                {/* Connect Button */}
                <button className="text-sm text-indigo-600 font-medium flex items-center group-hover:text-indigo-700">
                  <span>Connect</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
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

              {/* Integration 2 - Dropbox */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow group max-w-md mx-auto">
                <div className="flex items-center mb-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Image
                      src="/icons/dropbox.svg" // Add your dropbox icon here in /public/icons
                      alt="Dropbox"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-semibold text-gray-900">Dropbox</h3>
                    <p className="text-sm text-gray-600">Cloud storage</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">
                  Sync your Dropbox files with MindDocs for seamless document
                  management.
                </p>

                {/* Button */}
                <button className="text-sm text-indigo-600 font-medium flex items-center group-hover:text-indigo-700">
                  <span>Connect</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
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

              {/* Integration 3 - Notion */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow group max-w-md mx-auto">
                <div className="flex items-center mb-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <Image
                      src="/icons/notion.svg" // Make sure the icon is located in /public/icons/
                      alt="Notion"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-semibold text-gray-900">Notion</h3>
                    <p className="text-sm text-gray-600">Note-taking</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">
                  Export your AI-generated notes directly to Notion pages and
                  databases.
                </p>

                {/* Button */}
                <button className="text-sm text-indigo-600 font-medium flex items-center group-hover:text-indigo-700">
                  <span>Connect</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
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

              {/* Integration 4 - Evernote */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow group max-w-md mx-auto">
                <div className="flex items-center mb-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Image
                      src="/icons/evernote.png" // Ensure this icon exists in /public/icons
                      alt="Evernote"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-semibold text-gray-900">Evernote</h3>
                    <p className="text-sm text-gray-600">Note-taking</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">
                  Sync your MindDocs notes with Evernote for access across all
                  your devices.
                </p>

                {/* Button */}
                <button className="text-sm text-indigo-600 font-medium flex items-center group-hover:text-indigo-700">
                  <span>Connect</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
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

              {/* Integration 5 - Slack */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Image
                      src="/icons/slack.svg" // Replace with your actual path
                      alt="Slack logo"
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Slack</h3>
                    <p className="text-sm text-gray-600">Communication</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Share insights and summaries directly to your Slack channels.
                </p>
                <button className="text-sm text-indigo-600 font-medium flex items-center group-hover:text-indigo-700">
                  <span>Connect</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
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

              {/* Integration 6 - Microsoft Teams */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Image
                      src="/icons/teams.png" // Make sure this file exists
                      alt="Microsoft Teams logo"
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Microsoft Teams
                    </h3>
                    <p className="text-sm text-gray-600">Communication</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Share and collaborate on documents directly within Microsoft
                  Teams.
                </p>
                <button className="text-sm text-indigo-600 font-medium flex items-center group-hover:text-indigo-700">
                  <span>Connect</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
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

              {/* Integration 7 - Zoom */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Image
                      src="/icons/zoom.svg" // Ensure this image exists
                      alt="Zoom logo"
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Zoom</h3>
                    <p className="text-sm text-gray-600">Communication</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Take notes during Zoom meetings and access them directly in
                  MindDocs.
                </p>
                <button className="text-sm text-indigo-600 font-medium flex items-center group-hover:text-indigo-700">
                  <span>Connect</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
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

              {/* Integration 8 - Canvas */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <Image
                      src="/icons/canvas.png" // Make sure this image exists
                      alt="Canvas LMS logo"
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Canvas LMS</h3>
                    <p className="text-sm text-gray-600">Learning Management</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Import course materials from Canvas and create study notes
                  automatically.
                </p>
                <button className="text-sm text-indigo-600 font-medium flex items-center group-hover:text-indigo-700">
                  <span>Connect</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
