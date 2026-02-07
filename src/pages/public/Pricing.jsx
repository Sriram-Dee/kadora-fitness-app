import { Check, HelpCircle, Minus } from "lucide-react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useContent } from "../../context/ContentContext";

export default function Pricing() {
  const { state } = useContent();
  const { plans } = state;

  return (
    <>
      <Navbar />
      <section className="py-24 max-w-7xl mx-auto px-4 bg-gray-900">
        <div className="text-center mb-16">
          <h1 className="text-[var(--primary-color)] font-bold tracking-widest mb-4">
            CHOOSE YOUR POWER LEVEL
          </h1>
          <p className="text-xl text-gray-400">
            Flexible plans designed for every stage of your fitness journey.
            Scale up as you get stronger.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {state.plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-8 rounded-3xl border ${plan.isPopular ? "border-[var(--primary-color)] bg-gray-900/80 shadow-[0_0_30px_rgba(37,244,120,0.1)]" : "border-gray-800 bg-gray-900/40"} backdrop-blur-sm transition-transform hover:-translate-y-2 flex flex-col`}
            >
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--primary-color)] text-black text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wide shadow-lg">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.title}
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                {plan.title === "Beginner"
                  ? "Start your transformation"
                  : plan.title === "Pro"
                    ? "For dedicated athletes"
                    : "Elite performance gear"}
              </p>
              <div className="text-5xl font-bold text-white mb-6">
                ${plan.price}
                <span className="text-lg text-gray-500 font-normal">/mo</span>
              </div>
              <ul className="space-y-4 mb-8 text-left flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-[var(--primary-color)] mr-3 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-xl font-bold transition-all ${plan.isPopular ? "bg-[var(--primary-color)] text-black hover:bg-[var(--primary-color)]/90 hover:scale-105" : "bg-gray-800 text-white hover:bg-gray-700"}`}
              >
                Join Now
              </button>
            </div>
          ))}
        </div>

        {/* Compare Features Table (New) */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Compare Features
          </h2>
          <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-4 px-4 text-gray-400 font-normal">
                    Features
                  </th>
                  <th className="py-4 px-4 text-center font-bold text-white">
                    Beginner
                  </th>
                  <th className="py-4 px-4 text-center font-bold text-[var(--primary-color)]">
                    Pro
                  </th>
                  <th className="py-4 px-4 text-center font-bold text-white">
                    Athlete
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Live Coaching",
                    beginner: false,
                    pro: true,
                    athlete: true,
                  },
                  {
                    name: "Nutritional Tracking",
                    beginner: true,
                    pro: true,
                    athlete: true,
                  },
                  {
                    name: "Equipment Access",
                    beginner: "Basic",
                    pro: "Full",
                    athlete: "Full + Partner Gyms",
                  },
                  {
                    name: "Wearable Sync",
                    beginner: false,
                    pro: true,
                    athlete: true,
                  },
                  {
                    name: "1-on-1 Calls",
                    beginner: false,
                    pro: "Quarterly",
                    athlete: "Monthly",
                  },
                  {
                    name: "Community Challenges",
                    beginner: true,
                    pro: true,
                    athlete: true,
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-800 last:border-0 hover:bg-gray-800/50"
                  >
                    <td className="py-4 px-4 text-gray-300 font-medium">
                      {row.name}
                    </td>
                    <td className="py-4 px-4 text-center text-gray-500">
                      {row.beginner === true ? (
                        <Check className="w-5 h-5 mx-auto text-[var(--primary-color)]" />
                      ) : row.beginner === false ? (
                        <Minus className="w-5 h-5 mx-auto text-gray-700" />
                      ) : (
                        row.beginner
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-white font-bold bg-[var(--primary-color)]/5">
                      {row.pro === true ? (
                        <Check className="w-5 h-5 mx-auto text-[var(--primary-color)]" />
                      ) : row.pro === false ? (
                        <Minus className="w-5 h-5 mx-auto text-gray-700" />
                      ) : (
                        row.pro
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-gray-300">
                      {row.athlete === true ? (
                        <Check className="w-5 h-5 mx-auto text-[var(--primary-color)]" />
                      ) : row.athlete === false ? (
                        <Minus className="w-5 h-5 mx-auto text-gray-700" />
                      ) : (
                        row.athlete
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section (New) */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I switch plans anytime?",
                a: "Yes, you can upgrade or downgrade your plan at any time through your account settings. Changes take effect on your next billing cycle.",
              },
              {
                q: 'What is the "Custom Kit"?',
                a: "Athletes receive a quarterly care package with Kadora branded supplements, apparel, and specialized training equipment.",
              },
              {
                q: "Do you offer family plans?",
                a: "Yes! Contact our support team for special family bundle pricing.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-gray-900 p-6 rounded-2xl border border-gray-800"
              >
                <h3 className="font-bold text-white text-lg mb-2 flex items-center">
                  <HelpCircle className="w-5 h-5 text-[var(--primary-color)] mr-3" />
                  {faq.q}
                </h3>
                <p className="text-gray-400 pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-12">
            Need help choosing?{" "}
            <a
              href="/contact"
              className="text-[var(--primary-color)] hover:underline"
            >
              Talk to an advisor
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
