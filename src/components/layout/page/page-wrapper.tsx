import React from "react";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full h-full lg:pl-64 bg-base-100 tr-eo">
      {children}

      {/*TODO: Alerts go Here */}
    </section>
  );
}
