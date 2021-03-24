import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {const [tasks, setTasks] = useState([
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
  return (
    <div className="container">
      <Header></Header>
      <Tasks></Tasks>
    </div>
  );
}

export default App;
