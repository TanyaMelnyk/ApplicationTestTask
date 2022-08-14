import React, { useState } from "react";
import { createContext } from "react";

const TaskContext = createContext({
  password: "",
  setPassword: (arg: string) => {},
  toggleLock: false,
  setToggleLock: (arg: boolean) => {},
});

const TaskContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [password, setPassword] = useState("");
  const [toggleLock, setToggleLock] = useState(false);

  const value = { password, setPassword, toggleLock, setToggleLock };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

const TaskContextConsumer = TaskContext.Consumer;

export { TaskContextProvider, TaskContext, TaskContextConsumer };
