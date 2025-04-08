"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // Animation on load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  // Calculate parallax effect for background elements
  const calculateParallax = (factor: number) => {
    return scrollY * factor;
  };

  return (
    <section ref={heroRef} className="relative pt-32 pb-24 overflow-hidden">
      {/* Custom background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white -z-10 animate-gradient"></div>
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-center opacity-[0.15] -z-10"></div>

      {/* Interactive gradient spotlight following mouse */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-indigo-500/5 to-purple-500/5 blur-3xl -z-5 transition-all duration-1000"
        style={{
          left: `calc(${mousePosition.x}px - 400px)`,
          top: `calc(${mousePosition.y}px - 400px)`,
        }}
      ></div>

      {/* Animated gradient orbs */}
      <div
        className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
        style={{ transform: `translateY(${calculateParallax(0.1)}px)` }}
      ></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
        style={{ transform: `translateY(${calculateParallax(-0.05)}px)` }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
        style={{ transform: `translateY(${calculateParallax(0.08)}px)` }}
      ></div>

      {/* Floating elements */}
      <div className="absolute top-40 right-[15%] w-12 h-12 bg-purple-500/10 rounded-lg rotate-12 animate-float"></div>
      <div className="absolute bottom-20 left-[10%] w-16 h-16 bg-indigo-500/10 rounded-lg -rotate-12 animate-float animation-delay-2000"></div>
      <div className="absolute top-1/3 left-[5%] w-10 h-10 bg-blue-500/10 rounded-lg rotate-45 animate-float animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content */}
          <div
            className={`w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 font-medium text-sm mb-6 border border-indigo-100 shadow-sm relative overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-100/0 via-indigo-100/30 to-indigo-100/0 animate-shimmer"></span>
              <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2 animate-pulse"></span>
              <span className="relative z-10">Introducing MindDocs AI</span>
              <span className="ml-2 px-2 py-0.5 bg-indigo-100 rounded-full text-xs group-hover:bg-indigo-200 transition-colors">
                New
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 inline-block animate-gradient-text">
                Smarter Notes.
              </span>
              <br />
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 inline-block mt-2 animate-gradient-text pb-5"
                style={{ animationDelay: "1s" }}
              >
                Smarter Thinking.
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in animation-delay-200">
              Let AI transform your PDFs into actionable insights in seconds.
              Understand more, remember better, work smarter.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in animation-delay-300">
              <Link
                href="/dashboard"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-indigo-200 transition-all duration-300 inline-flex items-center justify-center group relative overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 animate-gradient"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative z-10 flex items-center">
                  <span>Try Demo</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href="/dashboard"
                className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-full border border-indigo-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 inline-flex items-center justify-center group relative overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative z-10">Get Started</span>
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start animate-fade-in animation-delay-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-indigo-400 to-purple-400 shadow-md"
                    style={{
                      transform: `translateY(${Math.sin(i) * 3}px)`,
                      transition: "transform 0.5s ease",
                    }}
                  ></div>
                ))}
              </div>
              <div className="ml-4 text-sm text-gray-500">
                <span className="font-semibold text-gray-700">1,000+</span>{" "}
                happy users
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-12 pt-8 border-t border-gray-100 animate-fade-in animation-delay-500">
              <p className="text-sm text-gray-500 mb-4">
                Trusted by researchers and students from:
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <div className="text-gray-400 font-semibold hover-lift">
                  STANFORD
                </div>
                <div className="text-gray-400 font-semibold hover-lift">
                  MIT
                </div>
                <div className="text-gray-400 font-semibold hover-lift">
                  HARVARD
                </div>
                <div className="text-gray-400 font-semibold hover-lift">
                  OXFORD
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Custom mockup */}
          <div
            className={`w-full lg:w-1/2 relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative mx-auto max-w-md">
              {/* Main device mockup */}
              <div className="rounded-2xl shadow-2xl overflow-hidden border border-gray-200 bg-white relative z-20 hover-lift">
                {/* Browser header */}
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="mx-auto bg-white rounded-full flex items-center px-4 py-1 text-xs text-gray-500 w-64 group">
                    <span className="mr-2 text-indigo-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    minddocs.ai/documents
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* App UI */}
                <div className="bg-white p-4">
                  {/* App header */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mr-2 animate-pulse-glow">
                        <svg
                          width="16"
                          height="16"
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
                      <div className="text-lg font-semibold text-gray-800 relative">
                        Research Paper
                        <span className="absolute -top-2 -right-2 w-2 h-2 bg-green-500 rounded-full"></span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-1.5 bg-indigo-50 rounded-lg text-indigo-600 hover:bg-indigo-100 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                      </button>
                      <button className="p-1.5 bg-indigo-50 rounded-lg text-indigo-600 hover:bg-indigo-100 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Document view */}
                  <div className="flex space-x-4">
                    {/* PDF preview */}
                    <div className="w-2/3 bg-gray-50 rounded-lg p-3 h-64 overflow-hidden">
                      <div className="h-full flex flex-col">
                        <div className="text-xs text-gray-500 mb-2 flex justify-between items-center">
                          <span>Page 1 of 24</span>
                          <div className="flex space-x-1">
                            <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
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
                            <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
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
                        <div className="flex-1 space-y-2">
                          <div className="h-2 bg-gray-300 rounded w-full"></div>
                          <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                          <div className="h-2 bg-gray-300 rounded w-4/6"></div>
                          <div className="h-2 bg-gray-300 rounded w-full"></div>
                          <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                          <div className="h-2 bg-gray-300 rounded w-3/6"></div>
                          <div className="h-2 bg-purple-300 rounded w-full animate-pulse"></div>
                          <div
                            className="h-2 bg-purple-300 rounded w-5/6 animate-pulse"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                          <div className="h-2 bg-gray-300 rounded w-4/6"></div>
                          <div className="h-2 bg-gray-300 rounded w-full"></div>
                          <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                          <div
                            className="h-2 bg-indigo-300 rounded w-full animate-pulse"
                            style={{ animationDelay: "0.4s" }}
                          ></div>
                          <div
                            className="h-2 bg-indigo-300 rounded w-4/6 animate-pulse"
                            style={{ animationDelay: "0.6s" }}
                          ></div>
                          <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                          <div className="h-2 bg-gray-300 rounded w-3/6"></div>
                        </div>
                      </div>
                    </div>

                    {/* Notes panel */}
                    <div className="w-1/3 flex flex-col h-64">
                      <div className="text-sm font-medium text-gray-700 mb-2 flex justify-between items-center">
                        <span>AI Notes</span>
                        <button className="text-xs text-indigo-600 hover:text-indigo-800 transition-colors">
                          Refresh
                        </button>
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="p-2 bg-indigo-50 rounded-lg border border-indigo-100 group hover:shadow-md transition-all cursor-pointer animate-fade-in">
                          <div className="text-xs font-medium text-indigo-700 flex justify-between">
                            <span>Key Finding</span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                              </svg>
                            </span>
                          </div>
                          <div className="text-xs text-gray-600">
                            The study demonstrates a 45% improvement in...
                          </div>
                        </div>
                        <div className="p-2 bg-purple-50 rounded-lg border border-purple-100 group hover:shadow-md transition-all cursor-pointer animate-fade-in animation-delay-100">
                          <div className="text-xs font-medium text-purple-700 flex justify-between">
                            <span>Methodology</span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                              </svg>
                            </span>
                          </div>
                          <div className="text-xs text-gray-600">
                            Researchers used a double-blind approach...
                          </div>
                        </div>
                        <div className="p-2 bg-blue-50 rounded-lg border border-blue-100 group hover:shadow-md transition-all cursor-pointer animate-fade-in animation-delay-200">
                          <div className="text-xs font-medium text-blue-700 flex justify-between">
                            <span>Conclusion</span>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                              </svg>
                            </span>
                          </div>
                          <div className="text-xs text-gray-600">
                            Results suggest that the new approach...
                          </div>
                        </div>
                      </div>
                      <button className="mt-2 w-full py-1.5 text-xs bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-sm transition-all relative overflow-hidden group">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 animate-gradient"></span>
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        <span className="relative z-10">
                          Generate More Insights
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating UI elements */}
              <div className="absolute -top-6 -left-16 w-32 bg-white rounded-lg shadow-lg p-2 z-10 transform -rotate-6 border border-gray-100 animate-float">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-green-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-xs">Key points extracted</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-12 w-36 bg-white rounded-lg shadow-lg p-2 z-10 transform rotate-3 border border-gray-100 animate-float animation-delay-2000">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                    </svg>
                  </div>
                  <div className="text-xs">AI analyzing content</div>
                </div>
              </div>

              {/* Mobile device mockup */}
              <div className="absolute -bottom-10 -right-16 w-32 rounded-2xl shadow-xl overflow-hidden border-8 border-gray-800 z-30 bg-white animate-float animation-delay-3000">
                <div className="bg-gray-800 h-4 w-full"></div>
                <div className="p-2">
                  <div className="w-full h-1 bg-indigo-600 rounded-full mb-2"></div>
                  <div className="space-y-1">
                    <div className="h-1 bg-gray-200 rounded w-full"></div>
                    <div className="h-1 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-1 bg-purple-200 rounded w-full"></div>
                    <div className="h-1 bg-gray-200 rounded w-4/6"></div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-100 rounded-full z-[-1] animate-pulse"
                style={{ animationDuration: "4s" }}
              ></div>
              <div
                className="absolute -top-6 -left-6 w-16 h-16 bg-purple-100 rounded-full z-[-1] animate-pulse"
                style={{ animationDuration: "6s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="rgba(99, 102, 241, 0.05)"
            ></path>
            <path
              d="M0,32L48,37.3C96,43,192,53,288,69.3C384,85,480,107,576,90.7C672,75,768,21,864,21.3C960,21,1056,75,1152,74.7C1248,75,1344,21,1392,-5.3L1440,-32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="rgba(139, 92, 246, 0.05)"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
