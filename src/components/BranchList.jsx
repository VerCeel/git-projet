"use client";

import { GitPullRequest } from "lucide-react";
import { useEffect, useState } from "react";

export default function BranchList() {
  const [Branches, setBranches] = useState([]);

  useEffect(() => {
    const fetchBranches = async () => {
      const res = await fetch("/api/github/branches");
      const data = await res.json();
      setBranches(data);
      console.log(data);
    };

    fetchBranches();
  }, []);

  return (
    <div className="text-neutral-200 shadow-lg ring-1 ring-black/5 px-6 py-3 rounded-lg border border-white/15 bg-black/50 backdrop-blur-xl max-h-[70vh] no-scrollbar overflow-y-auto pr-3">
      <ul className="space-y-4">
        {Array.isArray(Branches) &&
          Branches.map((branch) => (
            <li key={branch.name} className="flex items-center gap-4 border-b border-neutral-600 pb-3">
              <GitPullRequest size={16} className="inline mr-1" />
              {branch.name}
            </li>
          ))}
      </ul>
    </div>
  );
}
