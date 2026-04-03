import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsDiscord } from "react-icons/bs";

export const metadata = {
  title: "Contact",
};

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-8">
      <h1 className="md:text-4xl text-2xl text-shadow-lg mb-2 font-extrabold">
        Contact Us
      </h1>
      <p className="md:text-lg text-xs text-neutral-100">
        If you have any questions or inquiries, feel free to reach out to us!
      </p>
      <div className="flex items-center md:gap-4 gap-2">
        <Link href={"https://discord.gg/Va4DhjsprQ"}>
          <Button size="lg" className="" variant="default">
            <BsDiscord
              size={80}
              className="text-neutral-700 hover:text-purple-700 transition-colors duration-300"
            />
            Contact Us
          </Button>
        </Link>
        <Link href={"/"}>
          <Button size="lg" variant="secondary" className="ml-4">
            <MoveLeft className="mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
