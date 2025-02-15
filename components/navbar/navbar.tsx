"use client";

import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full flex fixed top-0 bg-white/5 backdrop-blur-lg z-10 justify-between p-3 h-12">
      <Link href={"/"} className="flex gap-2 items-start font-bold">
        <Image src="/logo.svg" alt="Logo" width={24} height={24} />
        Castled
      </Link>

      <div className="flex gap-4 items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </nav>
  );
}
