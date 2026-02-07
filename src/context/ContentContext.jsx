import { createContext, useContext, useReducer, useEffect } from "react";

// Initial Mock Data matching the schema
const initialState = {
  plans: [
    {
      id: "plan_beginner",
      title: "Beginner",
      price: 29,
      features: ["2 Training Sessions", "Gym Access", "Standard App Access"],
      isPopular: false,
    },
    {
      id: "plan_pro",
      title: "Pro",
      price: 59,
      features: [
        "Unlimited Training",
        "All Gym Access",
        "Pro App Features",
        "Nutrition Plan",
      ],
      isPopular: true,
    },
    {
      id: "plan_athlete",
      title: "Athlete",
      price: 99,
      features: [
        "Personal Coach",
        "All Access",
        "Custom Plans",
        "Gear Discounts",
      ],
      isPopular: false,
    },
  ],
  site_content: {
    home_hero: {
      title: "Unleash Your Potential",
      subtitle: "Join the revolution of fitness excellence.",
      cta_text: "Start Free Trial",
      image_url:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    },
  },
  theme_settings: {
    primary_color: "#25f478", // Neon Green
    secondary_color: "#0ea5e9", // Sky Blue
    font_family_heading: "Inter",
    font_family_body: "Inter",
  },
};

const ContentContext = createContext();

// Actions
const UPDATE_PLAN = "UPDATE_PLAN";
const UPDATE_CONTENT = "UPDATE_CONTENT";
const UPDATE_THEME = "UPDATE_THEME";

function contentReducer(state, action) {
  switch (action.type) {
    case UPDATE_PLAN:
      return {
        ...state,
        plans: state.plans.map((p) =>
          p.id === action.payload.id ? { ...p, ...action.payload } : p,
        ),
      };
    case UPDATE_CONTENT:
      return {
        ...state,
        site_content: {
          ...state.site_content,
          [action.payload.section_id]: {
            ...state.site_content[action.payload.section_id],
            ...action.payload.data,
          },
        },
      };
    case UPDATE_THEME:
      return {
        ...state,
        theme_settings: { ...state.theme_settings, ...action.payload },
      };
    default:
      return state;
  }
}

export function ContentProvider({ children }) {
  const [state, dispatch] = useReducer(contentReducer, initialState);

  // Apply theme to CSS variables
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty(
      "--primary-color",
      state.theme_settings.primary_color,
    );
    root.style.setProperty(
      "--secondary-color",
      state.theme_settings.secondary_color,
    );
  }, [state.theme_settings]);

  const updatePlan = (id, data) =>
    dispatch({ type: UPDATE_PLAN, payload: { id, ...data } });
  const updateContent = (section_id, data) =>
    dispatch({ type: UPDATE_CONTENT, payload: { section_id, data } });
  const updateTheme = (setting, value) =>
    dispatch({ type: UPDATE_THEME, payload: { [setting]: value } });

  return (
    <ContentContext.Provider
      value={{ state, updatePlan, updateContent, updateTheme }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  return useContext(ContentContext);
}
