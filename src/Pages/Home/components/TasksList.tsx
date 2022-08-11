import React from "react";
import "./../style.scss";
import TaskBar from "./TaskBar";
import Task from "./Task";
import { TasksList as TasksListType } from "./../types";

const TasksList = ({ tasks }: { tasks: TasksListType }) => {
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
      {tasks.length &&
        tasks.map((item) => {
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
    </div>
  );
};

export default TasksList;
