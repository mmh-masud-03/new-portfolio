import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div></div>
      <nav className="flex flex-row gap-x-6 items-center justify-end max-w-[50%] text-xl text-white p-4">
        <Link href="/services"> Projects </Link>
        <Link href="#about"> About </Link>
        <Link href="/contact"> Contact </Link>
      </nav>
    </div>
  );
}

export default Header;
