import React from "react";

export default function IconButton({
  icon,
  type = "button",
  tooltip,
}: {
  icon: string | undefined;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  tooltip: string;
}) {
  return (
    <div
      className={tooltip ? "tooltip tooltip-hover tooltip-left" : ""}
      data-tip={tooltip}
    >
      <button className="btn btn-primary normal-case btn-square" type={type}>
        <span className="hidden">
          <span className="loading loading-spinner loading-xs"></span>
        </span>
        <span>{icon}</span>
      </button>
    </div>
  );
}
