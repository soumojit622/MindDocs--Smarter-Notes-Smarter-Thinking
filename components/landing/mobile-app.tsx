"use client";

import { useState, useEffect } from "react";
import { Check, Download } from "lucide-react";

export default function MobileApp() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("mobile-app-section");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    // Auto-rotate screens
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % 3);
    }, 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const screens = [
    {
      title: "Document Library",
      description:
        "Access all your documents in one place, organized by projects and tags.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Reading Mode",
      description:
        "Read your PDFs with AI-powered highlights and annotations on the go.",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Study Cards",
      description:
        "Review key concepts with flashcards generated from your documents.",
      color: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <section
      id="mobile-app-section"
      className="py-24 bg-gradient-to-b from-white to-indigo-50 relative overflow-hidden"
    >
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
            Mobile Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            MindDocs on the Go
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take your documents and AI-powered insights with you wherever you go
            with our mobile app.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left content - Features */}
          <div
            className={`w-full lg:w-1/2 mb-12 lg:mb-0 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="max-w-md mx-auto lg:mx-0">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="space-y-6">
                  {screens.map((screen, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                        activeScreen === index
                          ? `bg-gradient-to-r ${screen.color} text-white shadow-lg`
                          : "bg-gray-50 hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveScreen(index)}
                    >
                      <div className="flex items-start">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                            activeScreen === index
                              ? "bg-white/20"
                              : `bg-gradient-to-r ${screen.color} text-white`
                          }`}
                        >
                          {activeScreen === index ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <span className="text-sm font-bold">
                              {index + 1}
                            </span>
                          )}
                        </div>
                        <div>
                          <h3
                            className={`font-semibold ${activeScreen === index ? "text-white" : "text-gray-900"}`}
                          >
                            {screen.title}
                          </h3>
                          <p
                            className={`text-sm mt-1 ${activeScreen === index ? "text-white/80" : "text-gray-600"}`}
                          >
                            {screen.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Download the app
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex items-center justify-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 2C5.03 2 1 6.03 1 11v3.55c0 .84.72 1.45 1.56 1.45.86 0 1.44-.57 1.44-1.45V11c0-3.3 2.7-6 6-6s6 2.7 6 6v3.55c0 .84.72 1.45 1.56 1.45.86 0 1.44-.57 1.44-1.45V11c0-4.97-4.03-9-9-9z" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs">Download on the</div>
                        <div className="text-sm font-semibold">App Store</div>
                      </div>
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10.5 1.875a1.125 1.125 0 0 1 .5.125l7.5 4.375a1.125 1.125 0 0 1 0 1.953l-7.5 4.375a1.125 1.125 0 0 1-1 0L2.5 8.328a1.125 1.125 0 0 1 0-1.953l7.5-4.375a1.125 1.125 0 0 1 .5-.125Z" />
                        <path d="M3.75 7.5v5.438c0 .354.178.667.45.857l6.75 4.219c.191.119.426.119.617 0l6.75-4.219c.272-.19.45-.503.45-.857V7.5" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs">GET IT ON</div>
                        <div className="text-sm font-semibold">Google Play</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative mx-auto max-w-xs">
              {/* Phone frame */}
              <div className="relative mx-auto w-[280px] h-[580px] bg-black rounded-[3rem] shadow-2xl border-[14px] border-black overflow-hidden">
                {/* Status bar */}
                <div className="absolute top-0 inset-x-0 h-6 bg-black z-10">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-black rounded-b-xl"></div>
                </div>

                {/* Screen content */}
                <div className="relative h-full w-full bg-white overflow-hidden">
                  {/* Screen 1 - Document Library */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      activeScreen === 0
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-full"
                    }`}
                  >
                    <div className="h-full flex flex-col">
                      {/* Header */}
                      <div className="bg-indigo-600 text-white p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs text-indigo-200">
                              Welcome back
                            </div>
                            <div className="font-semibold">Your Library</div>
                          </div>
                          <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
                        </div>
                        <div className="mt-4 relative">
                          <input
                            type="text"
                            placeholder="Search documents..."
                            className="w-full bg-indigo-500 text-white placeholder-indigo-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-indigo-300 absolute right-3 top-2.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-4 overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-sm font-medium text-gray-800">
                            Recent Documents
                          </div>
                          <div className="text-xs text-indigo-600">
                            View all
                          </div>
                        </div>

                        <div className="space-y-3">
                          {[
                            {
                              title: "Research Paper",
                              date: "2 hours ago",
                              color: "bg-indigo-100",
                            },
                            {
                              title: "Meeting Notes",
                              date: "Yesterday",
                              color: "bg-purple-100",
                            },
                            {
                              title: "Project Proposal",
                              date: "3 days ago",
                              color: "bg-blue-100",
                            },
                          ].map((doc, i) => (
                            <div
                              key={i}
                              className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm flex items-center"
                            >
                              <div
                                className={`w-10 h-10 ${doc.color} rounded-lg flex items-center justify-center mr-3`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-gray-700"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-800">
                                  {doc.title}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {doc.date}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6">
                          <div className="text-sm font-medium text-gray-800 mb-4">
                            Projects
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              {
                                name: "Research",
                                count: "12 docs",
                                color: "bg-indigo-500",
                              },
                              {
                                name: "Work",
                                count: "8 docs",
                                color: "bg-purple-500",
                              },
                              {
                                name: "Personal",
                                count: "5 docs",
                                color: "bg-blue-500",
                              },
                              {
                                name: "Add New",
                                count: "",
                                color: "bg-gray-100",
                              },
                            ].map((project, i) => (
                              <div
                                key={i}
                                className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm"
                              >
                                <div
                                  className={`w-8 h-8 ${project.color} rounded-lg mb-2 ${i === 3 ? "flex items-center justify-center" : ""}`}
                                >
                                  {i === 3 && (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4 text-gray-600"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  )}
                                </div>
                                <div className="text-sm font-medium text-gray-800">
                                  {project.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {project.count}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Bottom navigation */}
                      <div className="bg-white border-t border-gray-200 p-2 flex justify-around">
                        <button className="p-2 text-indigo-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                          </svg>
                        </button>
                        <button className="p-2 text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                          </svg>
                        </button>
                        <button className="p-2 text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                        </button>
                        <button className="p-2 text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Screen 2 - Reading Mode */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      activeScreen === 1
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-full"
                    }`}
                  >
                    <div className="h-full flex flex-col">
                      {/* Header */}
                      <div className="bg-purple-600 text-white p-4">
                        <div className="flex items-center">
                          <button className="mr-3">
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
                          <div className="font-semibold">Research Paper</div>
                        </div>
                        <div className="flex justify-between mt-4 text-xs">
                          <div className="bg-purple-500 rounded-full px-3 py-1">
                            Page 3 of 24
                          </div>
                          <div className="flex space-x-2">
                            <button className="bg-purple-500 rounded-full p-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                              </svg>
                            </button>
                            <button className="bg-purple-500 rounded-full p-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                        <div className="space-y-3 text-sm">
                          <p className="text-gray-800">
                            The results of our study demonstrate a significant
                            improvement in cognitive function among participants
                            who received the experimental treatment.
                          </p>
                          <p className="text-gray-800 bg-purple-100 p-2 rounded">
                            As shown in Figure 2, the treatment group exhibited
                            a 45% increase in memory recall compared to the
                            control group.
                          </p>
                          <p className="text-gray-800">
                            Furthermore, the longitudinal data suggests that
                            these improvements are sustained over time, with
                            minimal regression observed during the 6-month
                            follow-up period.
                          </p>
                          <p className="text-gray-800">
                            This finding is particularly noteworthy given the
                            challenges typically associated with maintaining
                            cognitive enhancements in similar interventions.
                          </p>
                          <p className="text-gray-800 bg-purple-100 p-2 rounded">
                            The mechanism underlying these improvements appears
                            to be related to increased neural plasticity in the
                            hippocampal region, as evidenced by the fMRI data
                            collected during the study.
                          </p>
                        </div>

                        {/* AI Note popup */}
                        <div className="mt-4 bg-white rounded-lg p-3 border border-purple-200 shadow-md">
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-purple-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="text-xs font-medium text-purple-700">
                                AI Note
                              </div>
                              <div className="text-xs text-gray-600">
                                Key finding: 45% increase in memory recall in
                                treatment group vs control group
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom toolbar */}
                      <div className="bg-white border-t border-gray-200 p-2 flex justify-around">
                        <button className="p-2 text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <button className="p-2 text-purple-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                          </svg>
                        </button>
                        <button className="p-2 text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                          </svg>
                        </button>
                        <button className="p-2 text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Screen 3 - Study Cards */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      activeScreen === 2
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-full"
                    }`}
                  >
                    <div className="h-full flex flex-col">
                      {/* Header */}
                      <div className="bg-blue-600 text-white p-4">
                        <div className="flex items-center">
                          <button className="mr-3">
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
                          <div className="font-semibold">Study Cards</div>
                        </div>
                        <div className="flex justify-between mt-4 text-xs">
                          <div className="bg-blue-500 rounded-full px-3 py-1">
                            Research Paper
                          </div>
                          <div className="bg-blue-500 rounded-full px-3 py-1">
                            Card 3 of 12
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-4 flex items-center justify-center bg-gray-50">
                        <div className="w-full aspect-[3/4] bg-white rounded-xl shadow-lg border border-blue-100 p-6 flex flex-col">
                          <div className="text-xs text-blue-600 font-medium mb-2">
                            Key Finding
                          </div>
                          <div className="text-lg font-medium text-gray-900 mb-4">
                            What was the percentage increase in memory recall
                            for the treatment group?
                          </div>
                          <div className="mt-auto">
                            <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm">
                              Reveal Answer
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Bottom controls */}
                      <div className="bg-white border-t border-gray-200 p-4">
                        <div className="flex justify-between items-center mb-4">
                          <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-gray-600"
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
                          <div className="space-x-2">
                            <button className="px-4 py-2 bg-red-100 text-red-600 rounded-lg text-sm">
                              Incorrect
                            </button>
                            <button className="px-4 py-2 bg-green-100 text-green-600 rounded-lg text-sm">
                              Correct
                            </button>
                          </div>
                          <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-gray-600"
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
                        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full w-1/4 bg-blue-600 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone details */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"></div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-100 rounded-full z-[-1]"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-100 rounded-full z-[-1]"></div>

              {/* Floating notification */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-2 z-10 transform rotate-6 border border-gray-100 animate-bounce">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <Download className="h-3 w-3 text-blue-600" />
                  </div>
                  <div className="text-xs">Get the app!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
