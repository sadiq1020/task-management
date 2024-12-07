import React, { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

const TaskBoard = () => {
  // Data (Could be json file)
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description: "Habijabi likha, just likhar jonno likha, Ajaira Description",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: false,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleTask = () => {
    setShowAddModal(true);
    console.log("clicked");
  };

  return (
    <section className="mb-20" id="tasks">
      {/* conditional modal rendering */}
      {showAddModal && <AddTaskModal />}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddClick={handleTask} />

          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
