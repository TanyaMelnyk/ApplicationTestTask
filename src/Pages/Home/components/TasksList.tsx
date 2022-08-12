import React from "react";
import "./../style.scss";
import TaskBar from "./TaskBar";
import Task from "./Task";
import { FoldersList } from "../types";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { updateTaskData } from "../model";
import { getActiveFolder } from "../utils";

const TasksList = ({ folders }: { folders: FoldersList }) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(({ authorization }) => authorization.userId);
  const folderId = useAppSelector(
    ({ taskManager }) => taskManager.activeFolderId
  );

  const folder = folders ? getActiveFolder(folders, folderId) : null;
  const handleClick = () => {
    dispatch(updateTaskData(userId, folderId));
  };

  return (
    <div className="tasks-list">
      <TaskBar>
        <div className="view">
          <button>
            <img src="./../../../../assets/list_icon.svg" alt="" />
          </button>
          <button>
            <img src="./../../../../assets/grid_icon.svg" alt="" />
          </button>
        </div>
        <button>
          <img src="./../../../../assets/basket.svg" alt="" />
        </button>
      </TaskBar>
      {folder &&
        folder.tasks &&
        folder.tasks.map((item) => {
          return (
            <Task
              key={item.time}
              id={item.id}
              name={item.name}
              text={item.description}
              date={item.time}
            />
          );
        })}
      <button onClick={handleClick} className="add-button">
        <img src="./../../../../assets/folder-add.svg" alt="" /> New task
      </button>
    </div>
  );
};

export default TasksList;
