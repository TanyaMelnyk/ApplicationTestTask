import TaskBar from "./TaskBar";
import React from "react";
import { getDateFromMs } from "../../../helpers/date";
import { FoldersList } from "../types";
import { getActiveTask } from "../utils";
import { useAppSelector } from "../../../hooks";
import ButtonIcon from "../../../shared/templates/ButtonIcon/ButtonIcon";

const TaskContent = ({ folders }: { folders: FoldersList }) => {
  const activeFolderId = useAppSelector(
    ({ taskManager }) => taskManager.activeFolderId
  );
  const activeTaskId = useAppSelector(
    ({ taskManager }) => taskManager.activeTaskId
  );
  const task = folders.length
    ? getActiveTask(folders, activeFolderId, activeTaskId)
    : null;

  const creationDate = task ? getDateFromMs(task.time) : "";

  return (
    <div className="task-container">
      <TaskBar>
        <div>
          <ButtonIcon image="edit.svg" altText="edit" />
          <ButtonIcon image="zoom_text.svg" altText="zoom" />
        </div>
        <div>
          <ButtonIcon image="lock_icon.png" altText="lock" />
          <ButtonIcon image="search_icon.svg" altText="search" />
        </div>
      </TaskBar>
      {task && (
        <div className="task-content">
          <p className="content-date">Created {creationDate}</p>
          <h3>{task.name}</h3>
          <p className="description">{task.description}</p>
        </div>
      )}
    </div>
  );
};
export default TaskContent;
