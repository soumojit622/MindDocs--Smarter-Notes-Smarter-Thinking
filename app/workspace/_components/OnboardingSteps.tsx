"use client";
import { useEffect, useState } from "react";
import { Keyboard, Sparkles } from "lucide-react";

const OnboardingSteps = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding");
    if (hasSeenOnboarding) {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("hasSeenOnboarding", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#1e1b4b]/80 to-[#0f172a]/80 backdrop-blur-sm">
      <div className="bg-white/90 dark:bg-slate-900/90 rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 border border-blue-200/30">
        <h2 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-6">
          Welcome to MindDocs 🚀
        </h2>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-2 rounded-lg shadow-md">
              <Keyboard className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                Quick Save
              </h3>
              <p className="text-sm text-muted-foreground">
                Press <span className="font-medium">Ctrl + S</span> to save your
                notes instantly.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-2 rounded-lg shadow-md">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white">
                AI Assistant
              </h3>
              <p className="text-sm text-muted-foreground">
                Select text and click the sparkles icon to get AI-powered
                insights.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleClose}
          className="mt-8 w-full py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg"
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default OnboardingSteps;
