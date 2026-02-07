import { useState } from "react";

import { useContent } from "../../context/ContentContext";
import { Check, Edit, Save, X } from "lucide-react";

export default function PricingManager() {
  const { state, updatePlan } = useContent();
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEdit = (plan) => {
    setEditingId(plan.id);
    setEditForm({ ...plan });
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleSave = (id) => {
    updatePlan(id, editForm);
    setEditingId(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "features") {
      const features = value.split("\n").filter((f) => f.trim() !== "");
      setEditForm({ ...editForm, features });
    } else {
      setEditForm({
        ...editForm,
        [name]:
          type === "checkbox"
            ? checked
            : name === "price"
              ? Number(value)
              : value,
      });
    }
  };

  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Pricing Manager</h1>
        <p className="text-gray-400">Manage your subscription plans.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {state.plans.map((plan) => (
          <div
            key={plan.id}
            className={`bg-gray-950 rounded-2xl border ${editingId === plan.id ? "border-[var(--primary-color)]" : "border-gray-800"} p-6 relative`}
          >
            {editingId === plan.id ? (
              // Edit Mode
              <div className="space-y-4">
                <input
                  type="text"
                  name="title"
                  value={editForm.title}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded p-2 text-white font-bold"
                />
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2">$</span>
                  <input
                    type="number"
                    name="price"
                    value={editForm.price}
                    onChange={handleChange}
                    className="w-24 bg-gray-900 border border-gray-800 rounded p-2 text-white font-bold"
                  />
                  <span className="text-gray-400 ml-2">/mo</span>
                </div>
                <textarea
                  name="features"
                  value={editForm.features.join("\n")}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-gray-900 border border-gray-800 rounded p-2 text-white text-sm"
                  placeholder="One feature per line"
                />
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="isPopular"
                    checked={editForm.isPopular}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-300">Mark as Popular</span>
                </div>
                <div className="flex space-x-2 pt-4">
                  <button
                    onClick={() => handleSave(plan.id)}
                    className="flex-1 bg-green-600 text-white py-2 rounded flex items-center justify-center text-sm font-bold hover:bg-green-700"
                  >
                    <Save className="w-4 h-4 mr-1" /> Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex-1 bg-gray-800 text-white py-2 rounded flex items-center justify-center text-sm font-bold hover:bg-gray-700"
                  >
                    <X className="w-4 h-4 mr-1" /> Cancel
                  </button>
                </div>
              </div>
            ) : (
              // View Mode
              <>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.title}
                </h3>
                {plan.isPopular && (
                  <span className="absolute top-4 right-4 bg-[var(--primary-color)] text-black text-xs px-2 py-1 rounded font-bold">
                    POPULAR
                  </span>
                )}
                <div className="text-4xl font-bold text-white mb-6">
                  ${plan.price}
                  <span className="text-lg text-gray-500 font-normal">/mo</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-400 text-sm"
                    >
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleEdit(plan)}
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded flex items-center justify-center font-bold transition-colors"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Plan
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
