import { PageScreen, PageWrapper } from "@/components/layout/page";
import React from "react";
import MuzikiDrawer from "./components/muziki-drawer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageScreen>
      <MuzikiDrawer />
      <PageWrapper>{children}</PageWrapper>
    </PageScreen>
  );
}
