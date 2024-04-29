"use client";

import { DrawerLink, DrawerWrapper } from "@/components/nav/drawer";
import { IconDisc, IconHome, IconTags, IconUsers } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import React from "react";

export default function MuzikiDrawer() {
  return (
    <DrawerWrapper>
      {GetDrawerData().map((link) => (
        <DrawerLink
          key={link.uuid}
          text={link.text}
          href={link.href}
          icon={link.icon}
          isActive={link.isActive}
        />
      ))}
    </DrawerWrapper>
  );
}

class DrawerLinkDTO {
  uuid: string;
  href: string;
  text: string;
  icon: React.ReactNode;
  isActive: boolean;

  constructor(
    href: string,
    text: string,
    icon: React.ReactNode,
    isActive: boolean = true
  ) {
    this.uuid = `${Math.random()}`;
    this.href = href;
    this.text = text;
    this.icon = icon;
    this.isActive = isActive;
  }
}

interface DrawerDataType {
  links: Array<DrawerLinkDTO>;
}

const drawerData: DrawerDataType = {
  links: [
    new DrawerLinkDTO("/library", "Home", <IconHome size={20} />),
    new DrawerLinkDTO("/library/artists", "Artists", <IconUsers size={20} />),
    new DrawerLinkDTO("/library/albums", "Albums", <IconDisc size={20} />),
    new DrawerLinkDTO("/library/genres", "Genres", <IconTags size={20} />),
  ],
};

function GetDrawerData(): Array<DrawerLinkDTO> {
  const pathName: string = usePathname();

  return drawerData.links.map((item) => {
    item.isActive = pathName === item.href;
    return item;
  });
}
