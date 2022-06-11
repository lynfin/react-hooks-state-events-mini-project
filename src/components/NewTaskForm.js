import React, {useState} from "react";

function NewTaskForm({ categories }) {
  const taskInitialState = {
    text: "",
    category: "",
    id: ""
  }
  const [newTask, setNewTask] = useState(taskInitialState);

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {categories.filter(category => category !== 'All').map(
            category => {
              return (
                <option
                  value={category.toLowerCase()}
                  key={category.toLowerCase()}>
                  {category}
                </option>)
            }
          )
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
