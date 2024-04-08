"use client";

import { useEffect, useState } from "react";

/* eslint-disable no-unused-vars */
export enum AlertMessageType {
  success = "success",
  error = "error",
}
/* eslint-enable */

export default function Alert({
  message,
  delay = 5000,
  type = AlertMessageType.success,
}: {
  message: string;
  delay?: number;
  type?: AlertMessageType;
}) {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setVisible(false), delay);
  }, [delay]);

  if (!visible) return;

  return (
    <div className="bg-base-100 shadow-md p-2 rounded-lg flex flex-row items-stretch gap-2">
      <div
        className={`border-2 rounded
        ${type === AlertMessageType.success ? "border-success" : ""}
        ${type === AlertMessageType.error ? "border-error" : ""}
        `}
      />

      <div className="flex flex-col gap-1">
        <div className="font-bold text-sm">
          {type === AlertMessageType.success && "Success"}
          {type === AlertMessageType.error && "Error"}
        </div>
        <div className="text-sm">{message}</div>
      </div>
    </div>
  );
}
