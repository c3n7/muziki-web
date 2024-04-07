import React from "react";

export default function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full">
      <div className="overflow-x-auto horiz">
        <div className="inline-block py-2 min-w-full">
          <div className="overflow-hidden rounded-lg">
            <table className="w-full">{children}</table>
          </div>
        </div>
      </div>
    </div>
  );
}
