import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Vet Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Cleaning Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header></Header>
      <AddTask></AddTask>
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onToggle={toggleReminder}
          onDelete={deleteTask}
        ></Tasks>
      ) : (
        "No Tasks to Show."
      )}
    </div>
  );
}

export default App;
