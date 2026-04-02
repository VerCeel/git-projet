import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 gap-8">
      <div className="flex items-center gap-2 text-neutral-300 bg-white/10 rounded-full px-8 py-2 border border-white/20 select-none">
        <Crown />
        <span>The exception made by exceptions</span>
      </div>
      <div className="text-center">
        <h1 className="text-4xl text-shadow-lg mb-2 font-extrabold">
          Welcome to our Github project
        </h1>
        <p className=" text-neutral-100">
          Our Project fetch all the branches and commits of a Github repository
          and display them in a beautiful way.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Link href={"/branches-list"}>
          <Button size="lg" className="font-extrabold" variant="default">
            Get Started
          </Button>
        </Link>
        <Link href={"/contact"}>
          <Button size="lg" variant="secondary" className="font-extrabold">
            Check The Repository
          </Button>
        </Link>
      </div>
    </div>
  );
}
