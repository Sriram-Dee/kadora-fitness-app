import { useState, useEffect } from "react";

import { useContent } from "../../context/ContentContext";
import { Save } from "lucide-react";

export default function ContentManager() {
  const { state, updateContent } = useContent();
  const [formData, setFormData] = useState(state.site_content.home_hero);

  // Update local state when context changes (initial load)
  useEffect(() => {
    setFormData(state.site_content.home_hero);
  }, [state.site_content.home_hero]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContent("home_hero", formData);
    alert("Content Updated Successfully!");
  };

  return (
    <>
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Content Manager</h1>
            <p className="text-gray-400">Edit homepage hero section.</p>
          </div>
          <button
            onClick={handleSubmit}
            className="flex items-center bg-[var(--primary-color)] text-black px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
          >
            <Save className="w-5 h-5 mr-2" />
            Save Changes
          </button>
        </header>

        <div className="bg-gray-950 p-8 rounded-2xl border border-gray-800 space-y-6">
          <h2 className="text-xl font-bold text-white border-b border-gray-800 pb-4">
            Home Hero Section
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="block text-gray-400 mb-2">Main Headline</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 text-white focus:border-[var(--primary-color)] outline-none"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-gray-400 mb-2">Subtitle</label>
              <textarea
                name="subtitle"
                value={formData.subtitle}
                onChange={handleChange}
                rows="3"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 text-white focus:border-[var(--primary-color)] outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">
                CTA Button Text
              </label>
              <input
                type="text"
                name="cta_text"
                value={formData.cta_text}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 text-white focus:border-[var(--primary-color)] outline-none"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-gray-400 mb-2">
                Background Image URL
              </label>
              <input
                type="text"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 text-white focus:border-[var(--primary-color)] outline-none"
              />
              {formData.image_url && (
                <div className="mt-4 h-48 rounded-lg overflow-hidden border border-gray-800 relative">
                  <img
                    src={formData.image_url}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    Preview
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
