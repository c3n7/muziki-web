import React from "react";
import CenteredCard from "@/components/display/centered-card";
import {
  AlertsContextProvider,
  AlertsWrapper,
} from "@/components/display/alerts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CenteredCard logoSrc="/logos/vector/default-monochrome-white.svg">
      <AlertsContextProvider>
        {children}
        <AlertsWrapper />
      </AlertsContextProvider>
    </CenteredCard>
  );
}
