import { FiBell } from "react-icons/fi";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8 shadow-sm">
      {/* Left Section */}
      <div>
        <h2 className="text-xl font-semibold text-slate-800">
          Investor Service Request Management Portal
        </h2>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <button className="relative rounded-full p-2 transition hover:bg-slate-100">
          <FiBell size={22} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* Profile */}
        <ProfileDropdown />
      </div>
    </header>
  );
};

export default Navbar;