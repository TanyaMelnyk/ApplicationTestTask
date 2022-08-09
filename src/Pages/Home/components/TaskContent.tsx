import TaskBar from "./TaskBar";
import React from "react";
import { getDateFromMs } from "../../../helpers/date";

const TaskContent = ({
  name,
  description,
  date,
}: {
  name: string;
  description: string;
  date: number;
}) => {
  const creationDate = getDateFromMs(date);
  return (
    <>
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
      <div className="task-content">
        <p className="content-date">Created {creationDate}</p>
        <h3>{name}</h3>
        <p className="description">{description}</p>
      </div>
    </>
  );
};
export default TaskContent;
