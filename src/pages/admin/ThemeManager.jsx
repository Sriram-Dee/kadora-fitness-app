import { useState } from "react";

import { useContent } from "../../context/ContentContext";
import { RefreshCw } from "lucide-react";

export default function ThemeManager() {
  const { state, updateTheme } = useContent();
  const [theme, setTheme] = useState(state.theme_settings);

  const colors = [
    { name: "Neon Green", hex: "#25f478" },
    { name: "Cyber Blue", hex: "#0ea5e9" },
    { name: "Hot Pink", hex: "#ec4899" },
    { name: "Electric Purple", hex: "#a855f7" },
    { name: "Sunset Orange", hex: "#f97316" },
  ];

  const handleColorChange = (key, hex) => {
    const newTheme = { ...theme, [key]: hex };
    setTheme(newTheme);
    updateTheme(key, hex);
  };

  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Theme Manager</h1>
        <p className="text-gray-400">Customize the look and feel of Kadora.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Primary Color Section */}
        <div className="bg-gray-950 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-xl font-bold mb-6">Primary Accent Color</h2>
          <div className="flex items-center space-x-4 mb-8">
            <div
              className="w-16 h-16 rounded-full border-4 border-gray-800 shadow-[0_0_20px_var(--primary-color)] transition-shadow duration-300"
              style={{ backgroundColor: theme.primary_color }}
            ></div>
            <div>
              <p className="text-gray-400 text-sm">Current Hex</p>
              <p className="font-mono text-xl text-white">
                {theme.primary_color}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4">
            {colors.map((c) => (
              <button
                key={c.hex}
                onClick={() => handleColorChange("primary_color", c.hex)}
                className={`w-10 h-10 rounded-full transition-transform hover:scale-110 ${theme.primary_color === c.hex ? "ring-2 ring-white scale-110" : ""}`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              ></button>
            ))}
          </div>
        </div>

        {/* Font Preview Section */}
        <div className="bg-gray-950 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-xl font-bold mb-6">Typography Preview</h2>
          <div className="space-y-6">
            <div>
              <h1
                className="text-4xl font-bold text-white mb-2"
                style={{ fontFamily: theme.font_family_heading }}
              >
                Heading Font
              </h1>
              <p className="text-gray-500 text-sm">Inter (Default)</p>
            </div>
            <div>
              <p
                className="text-lg text-gray-300"
                style={{ fontFamily: theme.font_family_body }}
              >
                This is how your body text will look. Kadora uses modern
                sans-serif fonts to maintain readability while looking premium.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Roboto / Inter (Default)
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800">
            <button
              onClick={() => {
                updateTheme("primary_color", "#25f478");
                setTheme({ ...theme, primary_color: "#25f478" });
              }}
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Reset to Default
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
