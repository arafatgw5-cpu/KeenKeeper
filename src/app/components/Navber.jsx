"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Clock, BarChart2 } from "lucide-react";



const Navbar = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="w-full bg-gray-100 px-6 py-4 flex items-center justify-between shadow-sm">
        {/* Left: Logo */}
        <h1 className="text-2xl font-bold text-gray-800">
          Keen<span className="text-green-600">Keeper</span>
        </h1>

        {/* Right: Menu */}
        <div className="flex items-center gap-6">
          {/* Home */}
          <Link href="/">
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                pathname === "/"
                  ? "bg-green-700 text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <Home size={18} />
              Home
            </button>
          </Link>

          {/* Timeline */}
          <Link href="/timeline">
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                pathname === "/timeline"
                  ? "bg-green-700 text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <Clock size={18} />
              Timeline
            </button>
          </Link>

          {/* Stats */}
          <Link href="/stats">
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                pathname === "/stats"
                  ? "bg-green-700 text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <BarChart2 size={18} />
              Stats
            </button>
          </Link>
        </div>
      </div>
   
    </div>
  );
  
};

export default Navbar;
