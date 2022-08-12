import React from "react";
import "./../style.scss";
import { getTimeMs } from "../../../helpers/date";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { RootState } from "../../../reduxStore";
import { updateActiveTaskId } from "../model";

const Task = ({
  name,
  date,
  text,
  id,
}: {
  name: string;
  date: number;
  text: string;
  id: string;
}) => {
  const dispatch = useAppDispatch();
  const activeTaskId = useAppSelector(
    (state: RootState) => state.taskManager.activeTaskId
  );
  const taskCreation = getTimeMs(date);
  const isActive = activeTaskId === id;

  const handleClick = () => {
    dispatch(updateActiveTaskId(id));
  };

  return (
    <div onClick={handleClick} className={isActive ? "task active" : "task"}>
      <p>{name}</p>
      <p className="description">
        <span>{taskCreation}</span>
        {text}
      </p>
    </div>
  );
};

export default Task;
