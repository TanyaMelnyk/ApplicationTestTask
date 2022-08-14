import TaskBar from "./TaskBar";
import React, { useContext } from "react";
import { getDateFromMs } from "../../../helpers/date";
import { FoldersList, Task } from "../types";
import { getActiveTask } from "../utils";
import { useAppSelector } from "../../../hooks";
import ButtonIcon from "../../../shared/templates/ButtonIcon/ButtonIcon";
import LockedContent from "./LockedContent";
import { TaskContext } from "../../../Context";
import PasswordDropdown from "./PasswordDropdown";

const md5 = require("md5");

const TaskContentContainer = ({ task }: { task: Task }) => {
  const { password } = useContext(TaskContext);
  const isUnlockedContent = task?.pass === md5(password);

  const creationDate = task ? getDateFromMs(task.time) : "";

  if (task.pass && !isUnlockedContent) {
    return <LockedContent />;
  } else {
    return (
      <div className="task-content">
        <p className="content-date">Created {creationDate}</p>
        <h3>{task.name}</h3>
        <p className="description">{task.description}</p>
      </div>
    );
  }
};

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

  return (
    <div className="task-container">
      <TaskBar>
        <div>
          <ButtonIcon image="edit.svg" altText="edit" />
          <ButtonIcon image="zoom_text.svg" altText="zoom" />
        </div>
        <div>
          <PasswordDropdown />
          <ButtonIcon image="search_icon.svg" altText="search" />
        </div>
      </TaskBar>
      {task && <TaskContentContainer task={task} />}
    </div>
  );
};
export default TaskContent;
