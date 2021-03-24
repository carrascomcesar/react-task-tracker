import Button from "./Button";

export default function Header({ onAdd }) {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button color="green" text="Add"></Button>
    </header>
  );
}
