import { NavLink } from "react-router-dom";
import { navigationItems } from "../../constants/navigation";
import type { UserRole } from "../../types/user";

interface SidebarProps {
  role: UserRole;
}

const Sidebar = ({ role }: SidebarProps) => {
  return (
    <aside className="flex h-screen w-64 flex-col bg-slate-900 text-white shadow-lg">
      {/* Logo Section */}
      <div className="border-b border-slate-700 p-6">
        <h1 className="text-2xl font-bold tracking-wide">
          Investor Portal
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Operations Panel
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {navigationItems
            .filter((item) => item.roles.includes(role))
            .map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      }`
                    }
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </nav>

      {/* User Information */}
      <div className="border-t border-slate-700 p-5">
        <div className="rounded-lg bg-slate-800 p-4">
          <p className="font-semibold">Administrator</p>
          <p className="text-sm text-slate-400">
            admin@portal.com
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;