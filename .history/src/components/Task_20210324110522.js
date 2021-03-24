import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Task({ task, onDelete, toggleReminder }) {
  return (
    <div className="task" onDoubleClick={() => toggl eReminder(task.id)}>
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        ></FaTimes>
      </h3>
      <p>{task.day}</p>
    </div>
  );
}
