import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  DollarSign,
  Palette,
  LogOut,
  Menu,
  X,
  ChartBar,
  Users,
  Settings,
} from "lucide-react";

export default function AdminLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: ChartBar, label: "Analytics", path: "/admin/analytics" }, // New
    { icon: Users, label: "Members", path: "/admin/members" }, // New
    { icon: FileText, label: "Content", path: "/admin/content" },
    { icon: DollarSign, label: "Pricing", path: "/admin/pricing" }, // Kept for functionality
    { icon: Palette, label: "Theme", path: "/admin/theme" }, // Kept for functionality
    { icon: Settings, label: "Settings", path: "/admin/settings" }, // New
  ];

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full bg-gray-950 border-b border-gray-800 p-4 z-50 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tighter">
          KADORA<span className="text-[var(--primary-color)]">.</span>{" "}
          <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-400 font-normal">
            Admin
          </span>
        </h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-950 border-r border-gray-800 p-6 flex flex-col transform transition-transform duration-300 md:translate-x-0 md:static ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} pt-20 md:pt-6`}
      >
        <div className="mb-10 hidden md:flex flex-col">
          <div className="flex items-center mb-6">
            <h1 className="text-2xl font-bold tracking-tighter">
              KADORA<span className="text-[var(--primary-color)]">.</span>
            </h1>
            <span className="ml-2 text-xs bg-gray-800 px-2 py-1 rounded text-gray-400">
              Admin
            </span>
          </div>
          {/* User Profile */}
          <div className="flex items-center p-3 bg-gray-900 rounded-xl border border-gray-800">
            <div className="w-10 h-10 rounded-full bg-[var(--primary-color)]/20 flex items-center justify-center text-[var(--primary-color)] font-bold mr-3">
              AR
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">Alex Rivera</h3>
              <p className="text-xs text-gray-500">System Admin</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)}
              className={`flex items-center px-4 py-3 rounded-xl transition-colors ${
                location.pathname === item.path
                  ? "bg-[var(--primary-color)] text-black font-bold"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-3 text-gray-400 hover:text-red-500 transition-colors mt-auto"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </aside>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 pt-20 md:pt-8 overflow-y-auto w-full">
        {children}
      </main>
    </div>
  );
}
