"use client";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Mail, Smartphone, Linkedin } from "lucide-react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

export default function Info() {
  return (
    <div className="flex flex-col max-w-2xl items-center border border-slate-300 m-4 rounded-lg p-4">
      <Image
        src="/profie.jpg"
        alt="Quinten Deconinck"
        width={90}
        height={90}
        className="rounded-2xl self-center"
      />
      <h1>Quinten Deconinck</h1>
      <h2>Web Development student</h2>
      <Separator />
      <div className="flex flex-row">
        <Mail />{" "}
        <div className="flex flex-col">
          <p className="uppercase">email</p>
          <Link
            href={`mailto:quinten.deconinck@student.hogent.be`}
            className="flex items-center justify-center hover:text-red-500"
          >
            <span className=" ">quinten.deconinck@student.hogent.be</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-row">
        <Smartphone />
        <div className="flex flex-col">
          <p className="uppercase">phone</p>
          <Link
            href={`tel:+32476049302`}
            className="flex items-center justify-center hover:text-red-500"
          >
            <span className=" ">+32 476 04 93 02</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Link
          href={`https://www.linkedin.com/in/quinten-deconinck-01b375177/`}
          className={buttonVariants({ variant: "link" })}
        >
          <Linkedin className="text-blue-500" />
          LinkedIn
        </Link>
      </div>
      <div>
        <div className="flex flex-row mt-4">
          <div className="flex flex-col">
            <p className="uppercase">CV</p>
            <Link
              href="/Quinten_Deconinck_CV.pdf"
              className="flex items-center justify-center hover:text-red-500"
              download
            >
              <span className=" ">Click here to download</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
