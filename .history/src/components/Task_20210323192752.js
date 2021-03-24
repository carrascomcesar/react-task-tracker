import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Task({ task }) {
  return (
    <div className="task">
      <h3>
        {task.text}
        <FaTimes style=></FaTimes>
      </h3>
      <p>{task.day}</p>
    </div>
  );
}
