export default function Footer() {
  return (
    <footer className="bg-[#1e1e2e] text-gray-300 py-16">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        {/* newsletter heading */}
        <h2 className="text-xl font-semibold mb-6">Subscribe to get our Newsletter</h2>
        {/* form */}
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full sm:w-auto flex-1 min-w-[250px] rounded-full border border-gray-600 bg-transparent px-6 py-3 placeholder-gray-500 focus:outline-none focus:border-orange-500"
          />
          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 text-white hover:from-blue-600 hover:to-purple-700 transition-shadow shadow-lg"
          >
            Subscribe
          </button>
        </form>
        {/* links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm mb-4">
          <a href="#" className="hover:underline">
            Careers
          </a>
          <span className="text-gray-500">|</span>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span className="text-gray-500">|</span>
          <a href="#" className="hover:underline">
            Terms &amp; Conditions
          </a>
        </div>
        <p className="text-xs text-gray-500">
          © 2021 Class Technologies Inc.
        </p>
      </div>
    </footer>
  );
}
