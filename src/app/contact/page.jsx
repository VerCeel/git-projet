import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BsDiscord } from "react-icons/bs";

const page = () => {
  return (
    <div className="w-3xl text-shadow-md">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        If you have any questions or inquiries, feel free to reach out to us!
      </p>
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
          <MoveLeft className="mr-2"/>
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default page;
