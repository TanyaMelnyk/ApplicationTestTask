import React from "react";
import "./../style.scss";
import Folder from "./Folder";
import { FoldersList } from "../types";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { updateFolderData } from "../model";

const FolderList = ({ folders }: { folders: FoldersList }) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(({ authorization }) => authorization.userId);

  const handleClick = () => {
    dispatch(updateFolderData(userId));
  };

  return (
    <div className="folders">
      <img
        className="logoImage"
        alt="logo"
        src="./../../../../assets/BT_Logo%204.png"
      />
      {folders.map((item) => {
        return (
          <Folder
            key={item.id}
            id={item.id}
            name={item.name}
            tasks={item.tasks}
          />
        );
      })}
      <button onClick={handleClick} className="add-button">
        <img src="./../../../../assets/folder-add.svg" alt="" /> New folder
      </button>
    </div>
  );
};

export default FolderList;
