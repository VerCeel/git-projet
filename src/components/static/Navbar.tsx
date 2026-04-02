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
    <div className="fixed text-white top-6 shadow-lg ring-2 ring-black/20 right-40 left-40 w-auto z-50 flex items-center justify-between px-6 py-3 rounded-xl border border-white/20 bg-black/20 backdrop-blur-xl">
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
