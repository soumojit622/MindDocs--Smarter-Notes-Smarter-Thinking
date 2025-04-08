export default function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-indigo-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-20 w-80 h-80 bg-purple-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 -left-40 w-80 h-80 bg-indigo-100 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-indigo-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 font-medium text-sm mb-6">
              <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
              Join Us
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Waitlist
            </h2>
            <p className="text-gray-600">
              Be the first to know when we launch new features and updates. No
              spam, just the good stuff.
            </p>
          </div>

          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-indigo-200 transition-all"
            >
              Join Waitlist
            </button>
          </form>

          <p className="text-gray-500 text-sm text-center mt-4">
            By subscribing, you agree to our Privacy Policy and Terms of
            Service.
          </p>

          {/* Social proof */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="text-sm text-gray-600 mb-4 sm:mb-0">
                Join 1,000+ early adopters already on our waitlist
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-indigo-400 to-purple-400"
                  ></div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-600 flex items-center justify-center text-white text-xs">
                  +99
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
