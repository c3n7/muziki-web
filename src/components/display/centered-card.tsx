import React from "react";
import Image from "next/image";

export default function CenteredCard({
  children,
  logoSrc,
}: {
  children: React.ReactNode;
  logoSrc: string;
}) {
  return (
    <div className="relative">
      <div className="fixed top-0 right-0">
        {/* TODO: Theme toggler goes here */}
      </div>

      <section className="flex items-center justify-center min-w-full min-h-screen px-2">
        <div className="flex flex-wrap w-full md:w-8/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 space-y-1">
          <div className="card w-full p-4 bg-base-100">
            <div className="flex flex-row justify-center space-x-2 w-full mb-2">
              <div className="h-24 w-full object-contain relative">
                <Image
                  src={logoSrc}
                  className="object-contain"
                  alt="logo"
                  fill
                />
              </div>
            </div>

            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
