import Task from "./Task";
export default function Tasks({ tasks, onDelete, onToggle }) {
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
