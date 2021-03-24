import React from "react";

export default function AddTask() {
  return (
    <form className="add-form">
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input type="text" placeholder="Add Task" />
      </div>
      <div className="form-control">
        <label htmlFor="">Day & Time</label>
        <input type="text" placeholder="Add Day & Time" />
      </div>
      <div className="form-control">
        <label htmlFor="">Seminder</label>
        <input type="text" placeholder="Add reminder" />
      </div>
    </form>
  );
}
