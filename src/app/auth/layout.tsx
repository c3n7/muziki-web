import React from "react";
import CenteredCard from "@/components/display/centered-card";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CenteredCard logoSrc="/logos/vector/default-monochrome-white.svg">
      {children}
    </CenteredCard>
  );
}
