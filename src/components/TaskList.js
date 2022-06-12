import React from "react";
import Task from "./Task.js"


function TaskList({ tasks, deleteTask }) {

  return (
    <div className="tasks" key="tasks">
      {tasks.map(task => <Task
        category={task.category}
        text={task.text}
        id={task.id}
        deleteTask={deleteTask}
        key={task.id} />)}
    </div>
  );
}

export default TaskList;
