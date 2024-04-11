import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import React, { useState } from "react";

export default function DrawerDropdown({
  icon,
  text,
  collapsed = false,
  isActive = false,
  children,
}: {
  icon: string;
  text: string;
  collapsed?: boolean;
  isActive?: boolean;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState<boolean>(collapsed);
  return (
    <div className="w-full space-y-1 flex flex-col">
      <section
        className={`tr-eo w-full p-3 hover:bg-secondary hover:bg-opacity-10 dark:hover:bg-opacity-5 hover:scale-105 hover:text-secondary active:scale-95 rounded-lg flex space-x-2 items-center cursor-pointer
        ${isActive ? "bg-secondary bg-opacity-10" : ""}
  `}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex-none">
          <div className="flex space-x-2 items-center">
            <span className="text-grey-50">{icon}</span>
            {!collapsed && <span>{text}</span>}
          </div>
        </div>

        {!collapsed && (
          <div className="grow flex justify-end pr-2">
            {expanded && <IconChevronDown size={16} />}
            {!expanded && <IconChevronRight size={16} />}
          </div>
        )}
      </section>

      <section
        className={`tr-eo
        ${!collapsed && expanded ? "inline w-full" : ""}
        ${collapsed || (!expanded && !collapsed) ? "hidden" : ""}
      `}
      >
        {children}
      </section>
    </div>
  );
}
