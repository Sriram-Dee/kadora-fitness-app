import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-12 px-4 bg-gray-900 min-h-screen text-white">
        <div className="max-w-xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-[var(--primary-color)]">
            Get in Touch
          </h1>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-400 mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-[var(--primary-color)] outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-[var(--primary-color)] outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-[var(--primary-color)] outline-none h-32"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button className="w-full bg-[var(--primary-color)] text-black font-bold py-3 rounded-lg hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
