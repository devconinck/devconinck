"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ModeToggle from "./Mode-toggle";
import MobileHamburgerMenu from "./Hamburger";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen">
      <main className="px-2 pt-2 pb-1 m-auto sm:pb-2 max-w-13xl border-b border-slate-300">
        <nav className="flex items-center justify-between mx-1 sm:mx-2 md:mx-3 lg:mx-4">
          <Logo />

          <div className="hidden md:flex md:border rounded-3xl md:p-3 md:items-center md:justify-center">
            <ul className="flex items-center gap-5 bg-muted rounded-full shadow-inner">
              <Link
                href="/"
                className="flex items-center gap-1 transition-all hover:bg-primary/10"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z"></path>
                </svg>
                Home
              </Link>
              <Link
                href="/projects"
                className="flex items-center gap-1 transition-all hover:text-primary hover:bg-primary/10"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h6v2h4v-2h6l.001 6H4z"></path>
                </svg>
                Projects
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-1 transition-all hover:text-primary hover:bg-primary/10"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.715 12c1.151 0 2-.849 2-2s-.849-2-2-2-2 .849-2 2 .848 2 2 2z"></path>
                  <path d="M20 4H4c-1.103 0-2 .841-2 1.875v12.25C2 19.159 2.897 20 4 20h16c1.103 0 2-.841 2-1.875V5.875C22 4.841 21.103 4 20 4zm0 14-16-.011V6l16 .011V18z"></path>
                  <path d="M14 9h4v2h-4zm1 4h3v2h-3zm-1.57 2.536c0-1.374-1.676-2.786-3.715-2.786S6 14.162 6 15.536V16h7.43v-.464z"></path>
                </svg>
                About
              </Link>
            </ul>
          </div>

          <div className="hidden md:flex md:items-center md:gap-6 lg:gap-12">
            <div className="gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 transition-colors"
                asChild
              >
                <Link
                  href="https://www.github.com/devconinck"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 transition-colors"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/quinten-deconinck-01b375177"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
            <ModeToggle />
          </div>

          <div className="md:hidden">
            <MobileHamburgerMenu />
          </div>
        </nav>
      </main>
    </div>
  );
}

const Logo = () => (
  <div className="flex-shrink-0">
    <Link
      href="/"
      className="text-2xl font-mono font-bold flex items-center group relative"
    >
      {/* Opening bracket with rotation effect */}
      <span className="text-gray-200 dark:text-gray-600 transform transition-transform duration-300 group-hover:-rotate-12">
        &lt;
      </span>

      {/* "dev" with color change and slight up movement on hover */}
      <span className="text-primary transition-all duration-300 group-hover:text-cyan-600 group-hover:-translate-y-0.5">
        dev
      </span>

      {/* "coninck" with letter spacing effect */}
      <span className="text-gray-200 dark:text-gray-600 transition-all duration-300 group-hover:tracking-wider">
        coninck
      </span>

      {/* Closing bracket with rotation effect */}
      <span className="text-gray-200 dark:text-gray-600 transform transition-transform duration-300 group-hover:rotate-12">
        /&gt;
      </span>
    </Link>
  </div>
);
