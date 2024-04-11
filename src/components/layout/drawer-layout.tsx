import React from "react";
import { PageScreen, PageWrapper } from "./page";
import { DrawerWrapper } from "../nav/drawer";

export default function DrawerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageScreen>
      <DrawerWrapper />
      <PageWrapper>{children}</PageWrapper>
    </PageScreen>
  );
}
