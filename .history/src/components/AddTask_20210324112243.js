import { useState } from 'react'
const AddTask = () => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(False);
}
export default function AddTask() {
  return (
    <form className="add-form">
      <div className="form-control">
        <label htmlFor="">Task</label>
              <input type="text" placeholder="Add Task" value={text} onChange={ (e)=>setText()}/>
      </div>
      <div className="form-control">
        <label htmlFor="">Day & Time</label>
        <input type="text" placeholder="Add Day & Time" />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Set reminder</label>
        <input type="checkbox" />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
}
