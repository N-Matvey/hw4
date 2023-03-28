import { useState, useEffect } from "react";
import './App.css';
import List from "./components/TaskList/TaskList";
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import Input from "./components/Input/Input";

function App() {
    const [ show, setShow ] = useState(false);
    const [ newTask, setNewTask ] = useState('');
    const [ tasks, setTasks ] = useState([
        {
            id: 1,
            title: 'Coding',
            completed: false
        },
        {
            id: 2,
            title: 'Eat',
            completed: false
        },
        {
            id: 3,
            title: 'Sleep',
            completed: false
        },
        {
            id: 4,
            title: 'Coding',
            completed: false
        },

    ])
    const handleShow  = () => setShow(!show)

    const handleChangeCheck = (event) => {
        setNewTask(event.target.value);
        console.log(newTask, 'new task');
    }
    const handleAddTask = () => {
        setTasks((prevState) => [...prevState,
            {
                id: Math.floor(Math.random() * 1000),
                title: newTask,
                completed: false
            }]);
        handleShow();
    }

    const handleDelete = (id) => {
        const res = tasks.filter(item => item.id !== id)
        setTasks(res)
        console.log(tasks)
    }
    /// filter

    const handleSearch = (event) => {
        tasks.filter(task => event.target.value === task.title || event.target.value === task.id ? alert(`Найден Task!\nid: ${task.id} \ntitle: ${task.title} \nCompleated: ${task.completed}`) : {})
    }

    const handleDone = (id) => {
        // const currentIndex = tasks.findIndex(task => task.id === id )
        tasks.map(task => {
            if(task.id === id) {
                return task.completed = !task.completed
            }
            return task
        })
        setTasks([...tasks])
    }

    const handleEdit = (editTodo, setClose) => {

        const editList = tasks.map(task => {
            if(task.id === editTodo.id) {
                return editTodo
            }
            return task
        })
        setClose(false)
        setTasks([...editList])
    }

    const handleCancel = (setClose) => {

        setClose(false)
    }

    return (
        <div className="App">
            <Input
                name={'search'}
                onChangeFunc={handleSearch}
            />
            {show && <Modal
                handleChangeCheck={handleChangeCheck}
                handleAdd={handleAddTask}
                handleShow={handleShow}  />}

            <Button handleClick={handleShow}>
                Открыть модалку
            </Button>


            {/* task list */}
            <List
                handleDelete={handleDelete}
                handleDone={handleDone}
                handleEdit={handleEdit}
                handleCancel={handleCancel}
                list={tasks} />
        </div>
    );
}

export default App;

