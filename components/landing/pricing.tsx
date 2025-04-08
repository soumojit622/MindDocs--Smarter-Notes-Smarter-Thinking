"use client";

import { useState, useEffect } from "react";
import { Check, X } from "lucide-react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [activeTab, setActiveTab] = useState("individuals");
  const [animateItems, setAnimateItems] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateItems(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
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
            Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include a 14-day
            free trial.
          </p>

          {/* Pricing tabs */}
          <div className="flex justify-center mt-8 mb-8">
            <div className="bg-gray-100 p-1 rounded-full inline-flex">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === "individuals"
                    ? "bg-white shadow-md text-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setActiveTab("individuals")}
              >
                For Individuals
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === "teams"
                    ? "bg-white shadow-md text-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setActiveTab("teams")}
              >
                For Teams
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === "enterprise"
                    ? "bg-white shadow-md text-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setActiveTab("enterprise")}
              >
                Enterprise
              </button>
            </div>
          </div>

          {/* Pricing toggle */}
          <div className="flex items-center justify-center mt-8">
            <span
              className={`text-sm ${isAnnual ? "text-gray-900 font-medium" : "text-gray-500"}`}
            >
              Annual
            </span>
            <div
              className={`relative mx-4 w-16 h-8 rounded-full p-1 transition duration-300 cursor-pointer ${
                isAnnual ? "bg-gray-200" : "bg-indigo-600"
              }`}
              onClick={handleToggle}
            >
              <div
                className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  isAnnual ? "translate-x-0" : "translate-x-8"
                }`}
              />
            </div>
            <span
              className={`text-sm ${!isAnnual ? "text-gray-900 font-medium" : "text-gray-500"}`}
            >
              Monthly
            </span>

            {isAnnual && (
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full animate-pulse">
                Save up to 25%
              </span>
            )}
          </div>
        </div>

        {activeTab === "individuals" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div
              className={`bg-white p-8 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-xl transition-all duration-500 flex flex-col ${
                animateItems
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="pb-8 mb-8 border-b border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Free
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Perfect for trying out MindDocs.
                    </p>
                  </div>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    Limited
                  </span>
                </div>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">$0</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">5 PDF uploads per month</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">Basic AI summaries</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">Export as plain text</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                    <X className="h-4 w-4 text-gray-400" />
                  </div>
                  <span className="text-gray-400">Smart highlights</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                    <X className="h-4 w-4 text-gray-400" />
                  </div>
                  <span className="text-gray-400">Study mode</span>
                </li>
              </ul>

              <button className="w-full py-3 px-4 border border-indigo-600 text-indigo-600 font-medium rounded-xl hover:bg-indigo-50 transition-colors">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div
              className={`bg-gradient-to-b from-white to-indigo-50 p-8 rounded-2xl border border-indigo-200 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col transform md:-translate-y-4 relative ${
                animateItems
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>

              <div className="pb-8 mb-8 border-b border-indigo-100">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Pro
                    </h3>
                    <p className="text-gray-600 text-sm">
                      For students and professionals.
                    </p>
                  </div>
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-600 text-xs font-medium rounded-full">
                    Recommended
                  </span>
                </div>
                <div className="mt-6">
                  <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                    ${isAnnual ? "12" : "15"}
                  </span>
                  <span className="text-gray-600">/month</span>
                  {isAnnual && (
                    <span className="ml-2 px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                      Save 20%
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">Unlimited PDF uploads</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">Advanced AI summaries</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">Smart highlights</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">
                    Export in multiple formats
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">Study mode</span>
                </li>
              </ul>

              <button className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-indigo-200 transition-all">
                Start Free Trial
              </button>

              <p className="text-xs text-center text-gray-500 mt-4">
                No credit card required
              </p>
            </div>

            {/* Team Plan */}
            <div
              className={`bg-white p-8 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-xl transition-all duration-500 flex flex-col ${
                animateItems
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="pb-8 mb-8 border-b border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Team
                    </h3>
                    <p className="text-gray-600 text-sm">
                      For teams and organizations.
                    </p>
                  </div>
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                    Collaborative
                  </span>
                </div>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">
                    ${isAnnual ? "29" : "39"}
                  </span>
                  <span className="text-gray-600">/month</span>
                  {isAnnual && (
                    <span className="ml-2 px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                      Save 25%
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">Everything in Pro</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">5 team members</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">Team collaboration</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">Advanced permissions</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">Priority support</span>
                </li>
              </ul>

              <button className="w-full py-3 px-4 border border-indigo-600 text-indigo-600 font-medium rounded-xl hover:bg-indigo-50 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        )}

        {activeTab === "teams" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Team Basic */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="pb-8 mb-8 border-b border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Team Basic
                    </h3>
                    <p className="text-gray-600 text-sm">
                      For small teams getting started.
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">
                    ${isAnnual ? "49" : "59"}
                  </span>
                  <span className="text-gray-600">/month</span>
                  {isAnnual && (
                    <span className="ml-2 px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                      Save 17%
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Up to 10 team members
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">Unlimited PDF uploads</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">Team workspace</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">
                    Basic collaboration tools
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">Standard support</span>
                </li>
              </ul>

              <button className="w-full py-3 px-4 border border-indigo-600 text-indigo-600 font-medium rounded-xl hover:bg-indigo-50 transition-colors">
                Get Started
              </button>
            </div>

            {/* Team Pro */}
            <div className="bg-gradient-to-b from-white to-indigo-50 p-8 rounded-2xl border border-indigo-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col relative">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-lg">
                BEST VALUE
              </div>

              <div className="pb-8 mb-8 border-b border-indigo-100">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Team Pro
                    </h3>
                    <p className="text-gray-600 text-sm">
                      For growing teams with advanced needs.
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                    ${isAnnual ? "99" : "129"}
                  </span>
                  <span className="text-gray-600">/month</span>
                  {isAnnual && (
                    <span className="ml-2 px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                      Save 23%
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Up to 25 team members
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">
                    Everything in Team Basic
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">Advanced collaboration</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">Admin dashboard</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">Advanced analytics</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-indigo-600" />
                  </div>
                  <span className="text-gray-600">Priority support</span>
                </li>
              </ul>

              <button className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-indigo-200 transition-all">
                Start Free Trial
              </button>

              <p className="text-xs text-center text-gray-500 mt-4">
                14-day free trial
              </p>
            </div>
          </div>
        )}

        {activeTab === "enterprise" && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-8 text-white shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full filter blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Enterprise Plan</h3>
                    <p className="text-indigo-200 max-w-xl">
                      Custom solutions for organizations with advanced
                      requirements and large teams.
                    </p>
                  </div>
                  <div className="mt-6 md:mt-0 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                    <span className="text-white/70 text-sm">Starting from</span>
                    <div className="text-3xl font-bold">Custom</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">
                      Enterprise Features
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-indigo-400/30 rounded-full flex items-center justify-center mr-3">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span>Unlimited team members</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-indigo-400/30 rounded-full flex items-center justify-center mr-3">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span>Dedicated account manager</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-indigo-400/30 rounded-full flex items-center justify-center mr-3">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span>Custom AI model training</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-indigo-400/30 rounded-full flex items-center justify-center mr-3">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span>Advanced security features</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">
                      Additional Benefits
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-indigo-400/30 rounded-full flex items-center justify-center mr-3">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span>Custom integrations</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-indigo-400/30 rounded-full flex items-center justify-center mr-3">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span>On-premise deployment options</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-indigo-400/30 rounded-full flex items-center justify-center mr-3">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span>24/7 premium support</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-indigo-400/30 rounded-full flex items-center justify-center mr-3">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span>SLA guarantees</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <button className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-xl hover:shadow-lg transition-all inline-flex items-center">
                  Contact Enterprise Sales
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
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Feature comparison */}
        <div className="mt-16 max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Compare Features
            </h3>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 text-left font-medium text-gray-500">
                      Feature
                    </th>
                    <th className="py-3 px-4 text-center font-medium text-gray-500">
                      Free
                    </th>
                    <th className="py-3 px-4 text-center font-medium text-indigo-600">
                      Pro
                    </th>
                    <th className="py-3 px-4 text-center font-medium text-gray-500">
                      Team
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-800">PDF uploads</td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      5 per month
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600 bg-indigo-50">
                      Unlimited
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      Unlimited
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-800">AI summaries</td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      Basic
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600 bg-indigo-50">
                      Advanced
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      Advanced
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-800">
                      Smart highlights
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600 bg-indigo-50">
                      <Check className="h-5 w-5 text-indigo-600 mx-auto" />
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      <Check className="h-5 w-5 text-indigo-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-800">Export formats</td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      Text only
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600 bg-indigo-50">
                      All formats
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      All formats
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-800">Collaboration</td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      <X className="h-5 w-5 text-gray-400 mx-auto" />
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600 bg-indigo-50">
                      Limited
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      Full
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-800">Support</td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      Community
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600 bg-indigo-50">
                      Email
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      Priority
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h3>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <h4 className="font-medium text-gray-900">
                Can I change plans later?
              </h4>
              <p className="text-gray-600 mt-2 text-sm">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect at the start of your next billing cycle.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <h4 className="font-medium text-gray-900">
                Is there a free trial?
              </h4>
              <p className="text-gray-600 mt-2 text-sm">
                Yes, all paid plans come with a 14-day free trial. No credit
                card required to start.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
