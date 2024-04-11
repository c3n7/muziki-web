import React from "react";

export default function PageContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="p-4 px-3 lg:px-5 bg-base-200 rounded-t-xl relative">
      {children}
    </main>
  );
}
