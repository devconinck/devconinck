import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <div className="flex items-center flex-col justify-center w-screen pb-4">
      <h1 className="mx-1 mt-2 text-lg font-medium  sm:mx-2 md:mx-3 lg:mx-4 pb-4">
        devconinck ©2024 - Privacy Policy
      </h1>
      <div className="">
        <Link
          href={"www.linkedin.com/in/quinten-deconinck-01b375177"}
          className={buttonVariants({ variant: "outline" })}
        >
          LinkedIn
        </Link>
      </div>
    </div>
  );
};

export default Footer;
