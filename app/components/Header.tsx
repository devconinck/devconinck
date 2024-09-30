"use client";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import ModeToggle from "./Mode-toggle";

export default function Header() {
  const routes = [
    {
      name: "About",
      path: "/#about",
    },
    {
      name: "Skills",
      path: "/#skills",
    },
    {
      name: "Projects",
      path: "/#projects",
    },
    {
      name: "Contact",
      path: "/#contact",
    },
  ];

  return (
    <div className="  p-2">
      <div className="flex flex-row">
        <nav className="flex justify-center ">
          <ul className="flex p-6 gap-6 border border-slate-300 rounded-xl ">
            {routes.map((route) => (
              <li className="flex" key={route.path}>
                <Link
                  className={buttonVariants({ variant: "ghost" })}
                  href={route.path}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center  ">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
