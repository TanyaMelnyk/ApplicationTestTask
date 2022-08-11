import React from "react";
import "./../style.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { RootState } from "../../../reduxStore";
import { updateActiveFolderId, updateActiveTaskId } from "../model";
import { TasksList } from "../types";
//import { getTasks } from "../model";

const Folder = ({
  id,
  name,
  tasks,
}: {
  id: number;
  name: string;
  tasks: TasksList;
}) => {
  const dispatch = useAppDispatch();
  const activeFolderId = useAppSelector(
    (state: RootState) => state.taskManager.activeFolderId
  );

  const isActive = activeFolderId === id;

  const handleClick = () => {
    dispatch(updateActiveFolderId(id));
    dispatch(updateActiveTaskId(tasks.length ? tasks[0].id : null));
  };

  return (
    <div
      onClick={handleClick}
      className={isActive ? "folder active" : "folder"}
    >
      {name} <span>{tasks.length}</span>
    </div>
  );
};

export default Folder;
