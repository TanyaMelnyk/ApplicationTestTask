import React from "react";
import "./../style.scss";
import Folder from "./Folder";
import { FoldersList } from "../types";

const FolderList = ({ tasks }: { tasks: FoldersList }) => {
  return (
    <div className="folders">
      <img
        className="logoImage"
        alt="logo"
        src="./../../../../assets/BT_Logo%204.png"
      />
      {tasks.map((item) => {
        return (
          <Folder key={item.id} name={item.name} tasks={item.tasks.length} />
        );
      })}
      <button className="add-folder">
        <img src="./../../../../assets/folder-add.svg" alt="" /> New folder
      </button>
    </div>
  );
};

export default FolderList;
