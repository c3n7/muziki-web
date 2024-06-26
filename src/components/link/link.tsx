import React from "react";
import NextLink from "next/link";

export default function Link({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <NextLink href={href} className="text-primary">
      {children}
    </NextLink>
  );
}
