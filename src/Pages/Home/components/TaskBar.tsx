import React from "react";
import "./../style.scss";

const TaskBar = ({ children }: { children: React.ReactNode }) => {
  return <div className="tasks-bar">{children}</div>;
};

export default TaskBar;
