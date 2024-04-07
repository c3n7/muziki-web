import React from "react";

export default function TdAction({ children }: { children: React.ReactNode }) {
  return (
    <td className="px-3 py-1  text-left text-sm whitespace-nowrap first:rounded-l-lg last:rounded-r-lg border-r last:border-none border-r-base-content border-opacity-5">
      <span className="flex flex-row justify-end gap-2 items-end ">
        {children}
      </span>
    </td>
  );
}
