import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-8">
      <div className="flex items-center text-xs md:text-lg gap-2 text-neutral-300 bg-white/10 rounded-full px-4 md:px-8 md:py-2 py-1 border border-white/20 select-none">
        <Crown className="size-4 md:size-6"/>
        <span>The exception made by exceptions</span>
      </div>
      <div className="text-center">
        <h1 className="md:text-4xl text-2xl text-shadow-lg mb-2 font-extrabold">
          Welcome to our Github project
        </h1>
        <p className="md:text-lg text-xs text-neutral-100">
          Our Project fetch all the branches and commits of a Github repository
          and display them in a beautiful way.
        </p>
      </div>
      <div className="flex items-center md:gap-4 gap-2">
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
