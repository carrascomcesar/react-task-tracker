import Task from "./Task";
export default function Tasks({ tasks, onDelete, onToggle }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        ></Task>
      ))}
    </div>
  );
}
