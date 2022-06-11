import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const taskInitialState = {
    text: "",
    category: "misc",
    id: ""
  }
  const [newTask, setNewTask] = useState(taskInitialState);
  const { text, category, id } = newTask;

  const handleChange = (event) => {    
    const {name, value} = event.target;
    setNewTask((prevTask)=>({...prevTask,[name]:value}));
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    onTaskFormSubmit(newTask);
    
    setNewTask((newTask) => taskInitialState);
    setNewTask({ ...taskInitialState });
    setNewTask(taskInitialState);
    // LKF - WHAT IS THE DIFFERENCE BETWEEN THE STATEMENTS ABOVE
    console.log(`Submit requested - clearing task state`)
  }
  console.log('newTask state is', newTask)
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange} value={category}>
          {categories
            .filter(category => category !== 'All')
            .map(
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
