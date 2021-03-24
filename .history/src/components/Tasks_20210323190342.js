import { useState } from "react";
export default function Tasks() {
    const [tasks, setTasks] = useState()
  const tasks = 
  return (
    <div>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </div>
  );
}
