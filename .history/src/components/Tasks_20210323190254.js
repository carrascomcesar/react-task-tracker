import { useState } from "react";
export default function Tasks() {
    const {tasks, u}
  const tasks = [
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
  ];
  return (
    <div>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </div>
  );
}
