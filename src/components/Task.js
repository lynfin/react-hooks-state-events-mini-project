import React from "react";

function Task({category, text, id, deleteTask}) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => deleteTask(id)} className="delete">X</button>
    </div>
  );
}

export default Task;
