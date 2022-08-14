import React, { useContext } from "react";
import "./../style.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { RootState } from "../../../reduxStore";
import { updateActiveFolderId, updateActiveTaskId } from "../model";
import { TasksList } from "../types";
import { TaskContext } from "../../../Context";
//import { getTasks } from "../model";

const Folder = ({
  id,
  name,
  tasks,
}: {
  id: string;
  name: string;
  tasks: TasksList;
}) => {
  const dispatch = useAppDispatch();
  const activeFolderId = useAppSelector(
    (state: RootState) => state.taskManager.activeFolderId
  );
  const { setPassword } = useContext(TaskContext);
  const isActive = activeFolderId === id;
  const { setToggleLock } = useContext(TaskContext);

  const handleClick = () => {
    //reset password on task change
    setPassword("");
    //close password dropdown
    setToggleLock(false);

    dispatch(updateActiveFolderId(id));
    dispatch(updateActiveTaskId(tasks ? tasks[0].id : null));
  };

  return (
    <div
      onClick={handleClick}
      className={isActive ? "folder active" : "folder"}
    >
      {name} <span>{tasks ? tasks.length : 0}</span>
    </div>
  );
};

export default Folder;
