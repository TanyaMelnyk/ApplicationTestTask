import React from "react";
import "./../style.scss";
import TaskBar from "./TaskBar";
import Task from "./Task";
import { Task as TaskType } from "./../types";

const TasksList = ({ tasks }: { tasks: TaskType[] }) => {
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
      {tasks.map((item) => {
        return (
          <Task
            key={item.time}
            name={item.name}
            text={item.description}
            date={item.time}
          />
        );
      })}
    </div>
  );
};

export default TasksList;
