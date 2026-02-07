import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-12 px-4 bg-gray-900 min-h-screen text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-[var(--primary-color)]">
            About Kadora
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Kadora isn't just a gym; it's a movement. Founded on the belief that
            everyone has untapped potential, we provide the environment,
            expertise, and encouragement to help you discover what you're truly
            capable of.
          </p>
          <p className="text-xl text-gray-300 mb-12">
            Our facilities are designed to inspire, equipped with the best
            technology and contrasting with a raw, motivating aesthetic that
            gets you in the zone the moment you step in.
          </p>

          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-400">
              To empower 1 million people to surpass their physical and mental
              limits through accessible, high-quality fitness coaching and
              community support.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
