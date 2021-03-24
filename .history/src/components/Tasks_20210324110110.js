import Task from "./Task";
export default function Tasks({ tasks, onDelete, toggleReminder}) {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={toggleReminder}
          onDelete={onDelete}
        ></Task>
      ))}
    </div>
  );
}
