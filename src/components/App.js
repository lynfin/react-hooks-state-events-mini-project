import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { v4 as uuid } from "uuid";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS.map(task => ({ ...task, id: uuid() })));
  const [selectedCategory, setSelectedCategory] = useState('');
  const filteredTasks = tasks.filter(task =>
    selectedCategory === '' ||
    selectedCategory === 'All' ||
    task.category === selectedCategory);


  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const selectCategory = (newCategory) => {
    setSelectedCategory(newCategory);
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={selectCategory} />
      <NewTaskForm />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
