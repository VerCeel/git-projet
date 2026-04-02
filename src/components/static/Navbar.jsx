"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/branches-list",
    label: "Branches list",
  },
  {
    href: "/commits-list",
    label: "Commits List",
  },
  {
    href: "/contact",
    label: "Contact",
  }
];

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed text-neutral-300 hover:text-white top-6 shadow-lg ring-2 ring-black/20  px-10  w-7xl left-1/2 -translate-x-1/2 z-50 flex items-center justify-between py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl">
      <Link href={"/"} className="flex text-xl gap-2 items-center">
        <FaGithub size={40}/>
        Github Project
      </Link>

      <div className="flex items-center gap-4">
        {links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <div key={index} className={`text-neutral-300 hover:text-white ${isActive ? 'text-white underline-offset-5 underline' : ''}`}>
              <Link href={link.href}>{link.label}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
