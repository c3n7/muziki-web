"use client";

import { useContext } from "react";
import AlertsContext from "./alerts-context";
import Alert from "./alert";

export default function AlertsWrapper() {
  return <AlertsBody />;
}

function AlertsBody() {
  const alertsCtx = useContext(AlertsContext);

  return (
    <div className="fixed bottom-0 right-0 p-8">
      <div className="flex flex-col gap-2">
        {alertsCtx.messages.map((msg) => (
          <Alert message={msg.message} key={msg.id} type={msg.type} />
        ))}
      </div>
    </div>
  );
}
