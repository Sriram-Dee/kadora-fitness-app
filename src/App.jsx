import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContentProvider } from "./context/ContentContext";

// Public Pages (Placeholders)
import Home from "./pages/public/Home";
import Pricing from "./pages/public/Pricing";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import AdminLayout from "./components/layout/AdminLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";

import AdminDashboard from "./pages/admin/Dashboard";
import Login from "./pages/admin/Login";
import ContentManager from "./pages/admin/ContentManager";
import PricingManager from "./pages/admin/PricingManager";
import ThemeManager from "./pages/admin/ThemeManager";
import Analytics from "./pages/admin/Analytics";
import Members from "./pages/admin/Members";
import Settings from "./pages/admin/Settings";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <ContentProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-slate-900 text-white">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin Routes */}
            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />

            <Route element={<ProtectedRoute />}>
              <Route
                path="/admin"
                element={
                  <AdminLayout>
                    <AdminDashboard />
                  </AdminLayout>
                }
              />
              <Route
                path="/admin/analytics"
                element={
                  <AdminLayout>
                    <Analytics />
                  </AdminLayout>
                }
              />
              <Route
                path="/admin/members"
                element={
                  <AdminLayout>
                    <Members />
                  </AdminLayout>
                }
              />
              <Route
                path="/admin/content"
                element={
                  <AdminLayout>
                    <ContentManager />
                  </AdminLayout>
                }
              />
              <Route
                path="/admin/pricing"
                element={
                  <AdminLayout>
                    <PricingManager />
                  </AdminLayout>
                }
              />
              <Route
                path="/admin/theme"
                element={
                  <AdminLayout>
                    <ThemeManager />
                  </AdminLayout>
                }
              />
              <Route
                path="/admin/settings"
                element={
                  <AdminLayout>
                    <Settings />
                  </AdminLayout>
                }
              />
            </Route>
          </Routes>
        </div>
      </Router>
    </ContentProvider>
  );
}

export default App;
