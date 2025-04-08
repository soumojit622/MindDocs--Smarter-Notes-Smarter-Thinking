"use client";

import React from "react";
import {
  Sparkles,
  Rocket,
  Mail,
  Clock,
  ShieldCheck,
  Stars,
  Zap,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const Upgrade = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Glow Backgrounds */}
      <div className="absolute -top-24 left-[-20%] h-96 w-96 bg-purple-400/30 blur-[100px] rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-20%] h-96 w-96 bg-blue-400/30 blur-[100px] rounded-full z-0 animate-pulse" />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl rounded-3xl bg-white/70 backdrop-blur-xl p-12 shadow-xl border border-white/20"
      >
        {/* Icon */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-500 shadow-lg animate-bounce-slow">
          <Sparkles className="h-8 w-8 text-white" />
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-5xl font-extrabold text-center text-gray-800 leading-snug tracking-tight">
          Unlock the Next Level – Coming Soon!
        </h1>
        <p className="text-center mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We’re cooking up a powerful upgrade that’s going to level up your
          experience. Stay ahead with exclusive features built just for you.
        </p>

        {/* Roadmap / Features Preview */}
        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <Stars className="text-purple-600 w-6 h-6 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Smart Dashboard
              </h4>
              <p className="text-base text-gray-600">
                All your data, insights, and actions – unified in one elegant
                place.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Zap className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                AI Assistant
              </h4>
              <p className="text-base text-gray-600">
                Let our AI handle the heavy lifting. Automate workflows & get
                smart suggestions.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <ShieldCheck className="text-indigo-600 w-6 h-6 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Premium Security
              </h4>
              <p className="text-base text-gray-600">
                Bank-level encryption and extra privacy tools to keep your data
                safe.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Trophy className="text-yellow-600 w-6 h-6 mt-1" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Early Access Benefits
              </h4>
              <p className="text-base text-gray-600">
                Get early access to new drops, beta features & VIP perks.
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 bg-gradient-to-br from-purple-600 to-blue-500 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden"
        >
          <div className="absolute -top-6 -left-6 h-24 w-24 bg-white/10 rounded-full blur-xl" />
          <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-white/10 rounded-full blur-xl" />

          <div className="flex flex-col items-center text-center space-y-2">
            <Rocket className="h-8 w-8" />
            <h3 className="text-xl font-semibold">
              Unlimited Mode Unlocking Soon
            </h3>
            <div className="flex items-center text-base text-white/90 gap-2">
              <Clock className="h-5 w-5" />
              <span>Launch ETA: Just Around the Corner ⏳</span>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-lg text-gray-700 mb-4">
            Want to be the first to know when we go live?
          </p>
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-xl text-base font-semibold shadow-md hover:scale-105 transition-all duration-200">
            <Mail className="h-5 w-5" />
            Join the Waitlist
          </button>
        </motion.div>

        {/* Footer */}
        <p className="mt-8 text-sm text-gray-400 text-center">
          💜 Thanks for being with us. We can’t wait to show you what’s next!
        </p>
      </motion.div>
    </div>
  );
};

export default Upgrade;
