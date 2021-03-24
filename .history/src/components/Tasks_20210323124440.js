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

export default function Tasks() {
    return (
        { tasks.map() => (<h3>{ task.text}</h3>