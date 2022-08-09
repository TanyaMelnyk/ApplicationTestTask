import React from "react";
import "./../style.scss";
import { getTimeMs } from "../../../helpers/date";

const Task = ({
  name,
  date,
  text,
}: {
  name: string;
  date: number;
  text: string;
}) => {
  const taskCreation = getTimeMs(date);

  return (
    <div className="task">
      <p>{name}</p>
      <p className="description">
        <span>{taskCreation}</span>
        {text}
      </p>
    </div>
  );
};

export default Task;
