import React, { useState } from 'react'
import TodoCard from '../TodoCard/TodoCard';
const TaskList = (
    {
        list,
        handleDelete,
        handleDone ,
        handleEdit,
        handleCancel
    }
) => {


    const [currentEdit , setCurrentEdit] = useState();
    const [isClose, setIsClose] = useState(true)

    return (
        <div>
            {list.map(task => <TodoCard
                handleDelete={handleDelete}
                handleDone={handleDone}
                handleEdit={handleEdit}
                handleCancel={handleCancel}
                handleSelectCurrent={setCurrentEdit}
                iEdit={task.id === currentEdit}
                setClose={setIsClose}
                close={isClose}
                key={task.id}
                task={task} />)}
        </div>
    )
}

export default TaskList