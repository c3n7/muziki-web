import React from "react";

export default function Thead({ children }: { children: React.ReactNode }) {
  return <thead className="bg-base-200">{children}</thead>;
}
