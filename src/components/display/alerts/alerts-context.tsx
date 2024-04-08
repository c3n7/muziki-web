"use client";

import React, { createContext, useMemo, useState } from "react";
import { AlertMessageType } from "./alert";

// eslint-disable-next-line no-unused-vars
type addMessageType = (message: string) => void;

interface MessageType {
  id: string;
  message: string;
  type: AlertMessageType;
  expiresAt: number;
}

interface AlertStateType {
  messages: MessageType[];
  addMessage: addMessageType;
  addSuccess: addMessageType;
  addError: addMessageType;
}

const initialState: AlertStateType = {
  messages: [],
  addMessage: () => {},
  addSuccess: () => {},
  addError: () => {},
};

const AlertsContext = createContext(initialState);

export function AlertsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [value, setValue] = useState<MessageType[]>([]);

  const values = useMemo(() => {
    const addGenericMessage = (message: string, type: AlertMessageType) => {
      const newMessage: MessageType = {
        message,
        id: crypto.randomUUID(),
        expiresAt: new Date().getTime() + 5000,
        type,
      };

      setValue([...value, newMessage]);
    };

    const addMessage: addMessageType = (message) =>
      addGenericMessage(message, AlertMessageType.success);

    const addSuccess: addMessageType = (message) =>
      addGenericMessage(message, AlertMessageType.success);

    const addError: addMessageType = (message) =>
      addGenericMessage(message, AlertMessageType.error);

    const state: AlertStateType = {
      messages: value,
      addMessage,
      addSuccess,
      addError,
    };

    return state;
  }, [value]);
  return (
    <AlertsContext.Provider value={values}>{children}</AlertsContext.Provider>
  );
}

export default AlertsContext;
