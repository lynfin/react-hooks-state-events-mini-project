import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as uuid } from "uuid";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS.map(task => ({ ...task, id: uuid() })));
  const [selectedCategory, setSelectedCategory] = useState('');

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const addTask = (newTask) => {
    console.log('Received request to add', newTask)
    // LKF Create the new id and add task to the array
  }

  const selectCategory = (newCategory) => {
    setSelectedCategory(newCategory);
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={selectCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask}/>
      <TaskList
        tasks={tasks.filter(task =>
          selectedCategory === '' ||
          selectedCategory === 'All' ||
          task.category === selectedCategory)}
        deleteTask={deleteTask} />
    </div>
  );
}

export default App;
