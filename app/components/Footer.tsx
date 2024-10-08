import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <div className="flex items-center flex-col justify-center w-screen pb-4 border-t pt-4 border-slate-300">
      <h1 className="mx-1 mt-2 text-lg font-medium  sm:mx-2 md:mx-3 lg:mx-4 pb-4">
        devconinck ©2024 - Privacy Policy
      </h1>
    </div>
  );
};

export default Footer;
