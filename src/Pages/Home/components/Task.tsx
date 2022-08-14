import React, { useContext } from "react";
import "./../style.scss";
import { getTimeMs } from "../../../helpers/date";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { RootState } from "../../../reduxStore";
import { updateActiveTaskId } from "../model";
import { Task as TaskType } from "../types";
import { TaskContext } from "../../../Context";

const Task = ({ task }: { task: TaskType }) => {
  const { id, name, description, time, pass } = task;
  const dispatch = useAppDispatch();
  const activeTaskId = useAppSelector(
    (state: RootState) => state.taskManager.activeTaskId
  );
  const timeDate = getTimeMs(time);
  const isActive = activeTaskId === id;
  const { setPassword } = useContext(TaskContext);
  const { setToggleLock } = useContext(TaskContext);

  const handleClick = () => {
    //reset password on task change
    setPassword("");
    //close password dropdown
    setToggleLock(false);

    dispatch(updateActiveTaskId(id));
  };

  return (
    <div onClick={handleClick} className={isActive ? "task active" : "task"}>
      {pass && (
        <div className="lock-icon">
          <img src="../../../../assets/lock-small.svg" alt="lock" />
        </div>
      )}
      <div>
        <p>{name}</p>
        <p className="description">
          <span>{timeDate}</span>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Task;
