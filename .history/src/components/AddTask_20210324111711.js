import React from 'react'

export default function AddTask() {
    return (
        <form className='add-form'>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" placeholder='Add Task'/>
            </div>
        </form>
    )
}
