import { useContent } from "../../context/ContentContext";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle,
  Users,
  Zap,
  Utensils,
  Star,
  Quote,
} from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function Home() {
  const { state } = useContent();
  const { home_hero } = state.site_content;

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={state.site_content.home_hero.image_url}
            alt="Fitness Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <h2 className="text-[var(--primary-color)] font-bold tracking-widest mb-4 animate-fade-in-up">
            UNLEASH YOUR POTENTIAL
          </h2>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-6 leading-tight animate-fade-in-up delay-100">
            {state.site_content.home_hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200">
            {state.site_content.home_hero.subtitle}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
            <button className="bg-[var(--primary-color)] text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center shadow-[0_0_20px_rgba(37,244,120,0.3)]">
              {state.site_content.home_hero.cta_text}{" "}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-colors flex items-center backdrop-blur-sm">
              Explore Features <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-950 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-[var(--primary-color)] font-bold tracking-widest mb-2">
              REDEFINE YOUR PERFORMANCE
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold uppercase italic mobile-responsive-text">
              Everything you need to reach your peak
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Trainers",
                icon: Users, // Changed from Trophy based on Stitch text match context, implies people
                desc: "Work with world-class coaches who tailor every movement to your specific body mechanics.",
                points: ["1-on-1 Sessions", "Form Analysis"],
              },
              {
                title: "Modern Equipment",
                icon: Zap,
                desc: "Access the latest technology in strength and cardio equipment including IoT-integrated tracking.",
                points: ["Biometric Tracking", "Smart Weights"],
              },
              {
                title: "Nutrition Plans",
                icon: Utensils, // Changed from Apple
                desc: "Customized meal strategies designed by clinical nutritionists to fuel your specific training.",
                points: ["Macronutrient Goals", "Weekly Adjustments"],
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 hover:border-[var(--primary-color)] transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 text-[var(--primary-color)] group-hover:bg-[var(--primary-color)] group-hover:text-black transition-colors">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {feature.desc}
                </p>
                <ul className="space-y-3">
                  {feature.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-center text-gray-300 text-sm font-medium"
                    >
                      <CheckCircle className="w-4 h-4 text-[var(--primary-color)] mr-3" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-[var(--primary-color)] font-bold tracking-widest mb-2 text-center">
            REAL RESULTS. REAL PEOPLE.
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase italic">
            Join thousands of others
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Lost 35lbs and completely changed my mindset. The community at Kadora keeps me coming back every single morning.",
                name: "Marcus R.",
                role: "Member since 2022",
              },
              {
                quote:
                  "The personalized nutrition plan was a game changer for me. I finally have energy for my workouts and my work day.",
                name: "Sarah J.",
                role: "Member since 2023",
              },
              {
                quote:
                  "Elite equipment and elite atmosphere. If you're serious about your training, this is the only place to be.",
                name: "David K.",
                role: "Member since 2021",
              },
            ].map((t, i) => (
              <div key={i} className="bg-gray-950 p-8 rounded-3xl relative">
                <Quote className="absolute top-8 right-8 text-gray-800 w-12 h-12" />
                <div className="flex space-x-1 mb-6 text-[var(--primary-color)]">
                  {[...Array(5)].map((_, starI) => (
                    <Star key={starI} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg mb-8 italic relative z-10">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-bold text-white text-lg">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--primary-color)] text-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-8">
            READY TO PUSH YOUR LIMITS?
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto">
            Get your first 14 days for free. No commitment, just progress.
            Limited spots available this month.
          </p>
          <button className="bg-black text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl">
            Start Your Free Trial
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
