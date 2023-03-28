import React, { useState } from 'react'
import classes from './todocard.module.css'
const TodoCard = ({
                      task,
                      handleDelete,
                      handleDone ,
                      handleEdit,
                      handleSelectCurrent,
                      iEdit,
                      handleCancel,
                      setClose,
                      close
                  }) => {

    const [ newTitle ,setNewTitle ] = useState(task.title)

    if(iEdit && close) {
        return <div>
            <input
                name='edit'
                value={newTitle}
                onChange={(event) => setNewTitle(event.target.value)}
            />
            <button onClick={() => handleEdit({...task, title: newTitle}, setClose )}>Save</button>
            <button onClick={() => handleCancel(setClose)}>Cancel</button>
        </div>
    }
    return (
        <div className={task.completed ? classes.todoCard + " " + classes.done : classes.todoCard}>
            <h5>{task.title}</h5>
            <button onClick={() => handleSelectCurrent(task.id, setClose(true))}>Edit</button>
            <button onClick={() => handleDone(task.id)}>Done</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
    )
}

export default TodoCard