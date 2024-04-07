import React from "react";
import Link from "next/link";

export default function ActionButton({
  type,
  text,
  href,
  loading,
}: {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  text: string;
  href: string;
  loading: boolean;
}) {
  return (
    <Link href={href}>
      <button
        className="btn btn-primary normal-case btn-sm btn-outline "
        type={type}
      >
        <span className={loading ? "block" : "hidden"}>
          <span className="loading loading-spinner loading-xs"></span>
        </span>
        <div className="flex flex-row items-center gap-2">
          <i className="fa fa-solid fa-chevron-left pt-0.5"></i>
          <span>{text}</span>
        </div>
      </button>
    </Link>
  );
}
