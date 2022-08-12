import TaskBar from "./TaskBar";
import React from "react";
import { getDateFromMs } from "../../../helpers/date";
import { FoldersList } from "../types";
import { getActiveTask } from "../utils";
import { useAppSelector } from "../../../hooks";

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
          <button>
            <img src="./../../../../assets/edit.svg" alt="" />
          </button>
          <button>
            <img src="./../../../../assets/zoom_text.svg" alt="" />
          </button>
        </div>
        <div>
          <button>
            <img src="./../../../../assets/lock_icon.png" alt="" />
          </button>
          <button>
            <img src="./../../../../assets/search_icon.svg" alt="" />
          </button>
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
