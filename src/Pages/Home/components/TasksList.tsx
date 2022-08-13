import React from "react";
import "./../style.scss";
import TaskBar from "./TaskBar";
import Task from "./Task";
import { FoldersList } from "../types";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { updateTaskData } from "../model";
import { getActiveFolder } from "../utils";
import { DeleteTaskModal } from "./DeleteTaskModal";
import { useToggleModal } from "../../../shared/hooks/useToggleModal";
import ButtonIcon from "../../../shared/templates/ButtonIcon/ButtonIcon";

const TasksList = ({ folders }: { folders: FoldersList }) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(({ authorization }) => authorization.userId);
  const folderId = useAppSelector(
    ({ taskManager }) => taskManager.activeFolderId
  );
  const taskId = useAppSelector(({ taskManager }) => taskManager.activeTaskId);
  const { showModal, handleHideModal } = useToggleModal();

  const folder = folders ? getActiveFolder(folders, folderId) : null;
  const handleClick = () => {
    dispatch(updateTaskData(userId, folderId));
  };

  return (
    <div className="tasks-list">
      <TaskBar>
        <div className="view">
          <ButtonIcon image="list_icon.svg" altText="list view" />
          <ButtonIcon image="grid_icon.svg" altText="grid view" />
        </div>
        <ButtonIcon image="basket.svg" altText="basket" />
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
      <DeleteTaskModal
        show={showModal}
        onHide={handleHideModal}
        folderId={folderId}
        taskId={taskId}
      />
    </div>
  );
};

export default TasksList;
