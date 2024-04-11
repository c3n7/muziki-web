import React from "react";

export default function PageScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="relative min-h-screen">{children}</section>;
}
