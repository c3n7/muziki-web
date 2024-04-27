import { DrawerLink, DrawerWrapper } from "@/components/nav/drawer";
import { IconDisc, IconHome, IconTags, IconUsers } from "@tabler/icons-react";

export default function MuzikiDrawer() {
  return (
    <DrawerWrapper>
      <DrawerLink
        text="Home"
        href="/"
        icon={<IconHome size={20} />}
        isActive={true}
      />
      <DrawerLink text="Artists" href="/" icon={<IconUsers size={20} />} />
      <DrawerLink text="Albums" href="/" icon={<IconDisc size={20} />} />
      <DrawerLink text="Genres" href="/" icon={<IconTags size={20} />} />
    </DrawerWrapper>
  );
}
