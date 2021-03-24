import Button from "./Button";

export default function Header({ onAdd }) {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      {/* <Button color="green" onClick={onAdd} text="Add"></Button> */}
    </header>
  );
}
