"use client";

import Image from "next/image";
import React from "react";

export default function DrawerWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const showDrawer: boolean = true;

  return (
    <nav
      className={`bg-base-100 px-6 w-64 pt-4 pb-5 min-h-screen lg:inline fixed h-full top-0 left-0 z-40 overflow-y-auto overflow-x-hidden tr-eo
      ${!showDrawer ? "hidden" : ""}
    `}
    >
      <section className="flex flex-row gap-2 items-start w-full h-fit grow-0">
        <span className="w-full hidden dark:block p-5 h-16 relative">
          <Image
            src={"/logos/vector/default-monochrome-white.svg"}
            className="object-contain"
            alt="logo"
            fill
          />
        </span>
        <span className="w-full block dark:hidden">
          <Image
            src={"/logos/vector/default-monochrome-black.svg"}
            className="object-contain"
            alt="logo"
            fill
          />
        </span>
      </section>

      <section className="w-full flex flex-col space-y-1 text-sm mt-6 justify-start">
        {children}
      </section>
    </nav>
  );
}
