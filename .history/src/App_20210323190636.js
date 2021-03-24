import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Tasks></Tasks>
    </div>
  );
}

export default App;
