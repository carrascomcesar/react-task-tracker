import Task from "./Task";
export default function Tasks({ tasks, onDelete }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={Ond}></Task>
      ))}
    </div>
  );
}
